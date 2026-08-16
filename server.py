import os
import sys
import mimetypes
import re
from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn

class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True

class PortfolioDevHandler(SimpleHTTPRequestHandler):
    """
    High-Performance Local Dev Server for Jaswanth Kadali Portfolio.
    Provides HTTP 206 Partial Content (Range requests) for smooth video streaming.
    """

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Range')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        # ── STATIC FILE SERVING WITH RANGE SUPPORT FOR MP4 VIDEOS ──
        range_header = self.headers.get('Range', None)
        if not range_header or not range_header.startswith('bytes='):
            return super().do_GET()

        path = self.translate_path(self.path)
        if not os.path.exists(path) or os.path.isdir(path):
            return super().do_GET()

        file_size = os.path.getsize(path)
        range_match = re.match(r'bytes=(\d*)-(\d*)', range_header)
        if not range_match:
            return super().do_GET()

        start_str, end_str = range_match.groups()
        if start_str and end_str:
            start = int(start_str)
            end = min(int(end_str), file_size - 1)
        elif start_str:
            start = int(start_str)
            end = file_size - 1
        elif end_str:
            start = max(0, file_size - int(end_str))
            end = file_size - 1
        else:
            return super().do_GET()

        if start >= file_size or start > end:
            self.send_response(416, "Requested Range Not Satisfiable")
            self.send_header("Content-Range", f"bytes */{file_size}")
            self.end_headers()
            return

        content_length = end - start + 1
        content_type, _ = mimetypes.guess_type(path)
        if not content_type:
            content_type = 'application/octet-stream'

        try:
            with open(path, 'rb') as f:
                f.seek(start)
                self.send_response(206, "Partial Content")
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                self.send_header("Content-Length", str(content_length))
                self.end_headers()

                remaining = content_length
                chunk_size = 64 * 1024
                while remaining > 0:
                    chunk = f.read(min(chunk_size, remaining))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (ConnectionResetError, BrokenPipeError):
            pass
        except Exception as e:
            sys.stderr.write(f"Error serving range: {e}\n")

    def log_message(self, format, *args):
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args))

if __name__ == '__main__':
    port = 8080
    directory = os.path.dirname(os.path.abspath(__file__))
    os.chdir(directory)

    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, PortfolioDevHandler)
    print(f"Portfolio Dev Server running at http://localhost:{port}/")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer shutting down.")
        httpd.server_close()
