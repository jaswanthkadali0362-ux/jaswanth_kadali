/* ==========================================================================
   JASWANTH KADALI — PREMIUM ENGINEERING PORTFOLIO
   Interactive Engine: Three.js · GSAP · Lenis · Custom Cursor
   ========================================================================== */

'use strict';

/* ——————————————————————————————————————————————————————————————
   PROJECT DATA
—————————————————————————————————————————————————————————————— */
const PROJECTS = [
  {
    id: 'nidar-drone',
    num: '01',
    category: 'Drones & UAV',
    title: 'NIDAR — Autonomous Agriculture Precision Drone',
    summary: 'Built a fully autonomous quadcopter using Pixhawk Cube Orange flight controller and Jetson Nano onboard computer, featuring custom impact-absorbing arm geometry, GPS waypoint navigation, and real-time computer vision.',
    cover: 'assets/projects/covers/nidar_drone_cover.svg',
    image: 'assets/projects/nidar/nidar_agri_drone.jpg',
    video: null,
    tags: ['Pixhawk Cube Orange', 'Jetson Nano', 'Autonomous Flight', 'Computer Vision', 'ROS 2'],
    specs: {
      'Flight Controller': 'Pixhawk Cube Orange',
      'Onboard Computer': 'NVIDIA Jetson Nano',
      'Autonomy Stack': 'ArduPilot + ROS 2',
      'Frame': 'Custom Impact-Absorbing Arms'
    },
        gallery: [
      { src: 'assets/projects/nidar/nidar_agri_drone.jpg', title: 'NIDAR Agriculture Drone & Quadcopter', desc: 'Precision agriculture sprayer drone with companion test quadcopter' },
      { src: 'assets/projects/nidar/nidar_team_noida.jpg?v=3.0.0', title: 'NIDAR National Challenge Team (Greater Noida)', desc: 'National Innovation Challenge for Drone Application and Research' },
      { src: 'assets/projects/nidar/nidar_drone.png', title: 'NIDAR 3D CAD Schematic & Avionics', desc: 'Pixhawk Cube Orange, Jetson Nano, Here3+ GPS & 30A ESC architecture' },
      { src: 'assets/projects/nidar/nidar_photo_1.jpg', title: 'Pixhawk Cube Orange Avionics', desc: 'Triple-redundant IMU mounting, vibration dampening & power distribution' },
      { src: 'assets/projects/nidar/nidar_photo_2.jpg', title: 'NVIDIA Jetson Nano AI Setup', desc: 'ROS 2 edge intelligence for real-time computer vision & telemetry' },
      { src: 'assets/projects/nidar/nidar_quadcopter_frame_1.jpg', title: 'PID Flight Tuning Rig', desc: 'Single-axis pitch/roll stabilization test bench' },
      { src: 'assets/projects/nidar/nidar_quadcopter_frame_2.jpg', title: 'Motor Thrust Response', desc: '30A ESC & 4S LiPo motor dynamics testing' }
    ],
    problem: 'Commercial drones lack the onboard intelligence required for fully autonomous missions in GPS-denied or complex environments, and standard frames fail to absorb hard landing impacts that damage electronics.',
    objective: 'Design and build a fully autonomous quadcopter combining the Pixhawk Cube Orange flight controller for precision flight stabilization with a Jetson Nano for onboard AI inference, GPS waypoint navigation, and real-time obstacle awareness.',
    role: 'Lead Mechanical & Autonomous Systems Designer',
    mechanical: 'Custom high-toughness structural arm cross-section with internal flex-ribs for landing shock absorption. Frame optimized in CAD for thrust-to-weight ratio and Jetson Nano + Pixhawk mounting rigidity.',
    hardware: 'Pixhawk Cube Orange (IMU triple redundancy, ArduPilot), NVIDIA Jetson Nano (4GB), Here3+ GPS + Compass, telemetry radio, 4x BLDC motors, 30A ESCs, 4S LiPo, companion computer power board.',
    software: 'ArduPilot / Mission Planner for flight control, ROS 2 Humble for autonomous stack, MAVLink/MAVROS for Pixhawk–Jetson communication, Python OpenCV for vision pipeline, custom waypoint mission scripting.',
    results: 'Successfully achieved fully autonomous takeoff, waypoint navigation, and precision landing. Onboard Jetson Nano running real-time detection at 15 FPS. Frame absorbed landing impacts with zero electronic damage across 40+ test flights.'
  },

  {
    id: 'atv-gokart',
    num: '02',
    category: 'Automotive / Mechanical',
    title: 'Off-Road All-Terrain Vehicle (ATV) & Go-Kart',
    summary: 'Award-winning student motorsport All-Terrain Vehicle (ATV) and Go-Kart built for national endurance championships. National winner of FOMBI 2K25.',
    cover: 'assets/projects/covers/atv_gokart_cover.svg',
    image: 'assets/projects/atv/fombi_atv_frame_1.jpg',
    video: 'assets/videos/atv_fombi_2024.mp4',
    tags: ['ATV Design', 'Tubular Spaceframe', 'ANSYS FEA', 'FOMBI Winners', 'Vehicle Dynamics'],
    specs: {
      'Steering': 'Ackerman Geometry',
      'Chassis': 'Tubular Spaceframe',
      'Competition': 'FOMBI 2K25 / 2K24',
      'Result': 'Winners + 2× Runners-Up'
    },
    gallery: [
      { src: 'assets/projects/atv/fombi_atv_frame_1.jpg', title: 'FOMBI National Motorsport ATV', desc: 'Tubular spaceframe chassis & suspension testing' },
      { src: 'assets/projects/atv/fombi_atv_frame_2.jpg', title: 'Suspension & Steering Geometry', desc: 'Double wishbone & steering geometry fabrication' },
      { src: 'assets/projects/atv/fombi_atv_frame_3.jpg', title: 'Front Suspension & Knuckle Assembly', desc: 'Chassis knuckle and hub integration' },
      { src: 'assets/projects/atv/fombi_atv_frame_4.jpg', title: 'Endurance Track Testing', desc: 'FOMBI 2K25 National Champions in action' }
    ],
    problem: 'Designing and fabricating student motorsport vehicles that can withstand brutal off-road terrain, maintain high suspension travel, and handle severe structural impact while optimizing total weight.',
    objective: 'Engineer a high-performance off-road ATV and Go-Kart, optimizing the chassis spaceframe, double-wishbone suspension, steering kinematics, and braking dynamics for national competitions.',
    role: 'Lead Mechanical Design & Fabrication Engineer, Team Godavari',
    mechanical: 'Chassis spaceframe analysis under front, side, and rollover impacts. Double-wishbone geometry optimized in CAD for camber gain, roll center drift, and bump steer.',
    hardware: 'Tubular spaceframe chassis, double wishbone suspension, steering knuckles, custom hubs, hydraulic disc brakes.',
    software: 'SOLIDWORKS CAD, ANSYS FEA for frame impact and suspension stress analysis.',
    results: 'FOMBI 2K25 National Champions. FOMBI 2K24 Runners-Up. SRKR Go-Kart Championship Season 1 Runners-Up. Structural integrity validated through rigorous endurance races.'
  },
  {
    id: 'wall-sander',
    num: '03',
    category: 'Robotics & CAD',
    title: 'Autonomous Wall Sander Robot — Kinematic Design',
    summary: 'Semi-autonomous wall sanding robot arm designed in Fusion 360 with full motion analysis for multi-axis reachability and surface pressure consistency.',
    cover: 'assets/projects/covers/wall_sander_cover.svg',
    image: 'assets/projects/wall_sander/wall_sander_frame_1.jpg',
    video: 'assets/videos/wall_sander_fusion.mp4',
    tags: ['Fusion 360', 'Kinematics', 'Motion Analysis', 'Robot Design', 'Joint Torque'],
    specs: {
      'CAD': 'Autodesk Fusion 360',
      'Kinematics': 'Multi-Link Linear & Rotary',
      'Drive': 'Lead Screw + Pivot Arms',
      'Analysis': 'Joint Torque & Reach Sweep'
    },
    gallery: [
      { src: 'assets/projects/wall_sander/wall_sander_frame_1.jpg', title: 'Fusion 360 Kinematic Assembly', desc: 'Multi-axis arm reachability sweep' },
      { src: 'assets/projects/wall_sander/wall_sander_frame_2.jpg', title: 'Lead-Screw Elevation Drive', desc: 'Vertical motion carriage & guide rails' },
      { src: 'assets/projects/wall_sander/wall_sander_frame_3.jpg', title: 'Joint Torque Simulation', desc: 'Dynamic counterbalancing & actuator load analysis' },
      { src: 'assets/projects/wall_sander/wall_sander_frame_4.jpg', title: 'Sanding Head Motion Study', desc: 'End-effector trajectory on vertical wall' }
    ],
    problem: 'Manual wall sanding generates hazardous dust and causes severe physical strain. Automation requires lightweight arms maintaining uniform contact pressure on vertical surfaces.',
    objective: 'Design a compact wall sander arm with height extension, joint counterbalancing, and smooth end-effector trajectory.',
    role: 'Robotics Kinematics & Mechanical CAD Designer',
    mechanical: 'Multi-DOF mechanism with lead-screw vertical elevation and dual-pivoting arm linkages. Active spring counterbalancing to reduce actuator payload.',
    hardware: 'NEMA 23/34 stepper motors, linear guide rails, orbital sander head, load cell pressure sensor.',
    software: 'Autodesk Fusion 360 Motion Study, Joint Limits, Animation, Motion Analysis Suite.',
    results: 'Full vertical wall coverage with <2.5% variation in sanding pressure. Optimal gear reduction ratios identified to prevent motor overheating.'
  },
  {
    id: 'siemens-mcd',
    num: '04',
    category: 'CAD & Digital Twin',
    title: 'Siemens MCD — Digital Twin Simulation',
    summary: 'Physics-accurate digital twin modeling in Siemens NX & MCD: conveyor kinematics, slope dynamics, sensor-actuator logic and multi-body friction simulation.',
    cover: 'assets/projects/covers/siemens_mcd_cover.svg',
    image: 'assets/projects/siemens_mcd/mcd_design_1_frame_1.jpg',
    video: 'assets/videos/siemens_mcd_design.mp4',
    tags: ['Siemens NX', 'Siemens MCD', 'Digital Twin', 'Mechatronics', 'Physics Simulation'],
    specs: {
      'Software': 'Siemens NX & MCD',
      'Domain': 'Digital Twin / Mechatronics',
      'Engine': 'Rigid Body Dynamic Contacts',
      'Control': 'Sensor-Driven Automation'
    },
    gallery: [
      { src: 'assets/projects/siemens_mcd/mcd_design_1_frame_1.jpg', title: 'Siemens MCD Conveyor Digital Twin', desc: 'Mechatronics sensor-actuator dynamic simulation' },
      { src: 'assets/projects/siemens_mcd/mcd_slope_frame_1.jpg', title: 'Multi-Body Slope Friction Simulation', desc: 'Physics-accurate surface contact dynamics' },
      { src: 'assets/projects/siemens_mcd/nx_sim_1_frame_1.jpg', title: 'Siemens NX Mechanism Motion', desc: 'Kinematic joint limits & collision checks' }
    ],
    problem: 'Physical commissioning of complex automated systems leads to expensive rework and mechanical collisions if logic is not validated on a digital replica first.',
    objective: 'Build physics-accurate 3D digital twin models in Siemens MCD to simulate multi-body friction, slope dynamics, and sensor-actuator timing.',
    role: 'Mechatronics Simulation & CAD Specialist',
    mechanical: 'CAD assemblies imported into Siemens MCD with kinematic joints, rigid bodies, collision geometry, and surface friction coefficients defined.',
    hardware: 'Industrial sensor-actuator mapping, pneumatic cylinder models, belt conveyor drives.',
    software: 'Siemens NX CAD, Siemens MCD, Siemens Automation Logic Simulation.',
    results: 'Complex mechatronic sequences validated in 3D physics environment, reducing projected physical commissioning time by over 40%.'
  },
  {
    id: 'gazebo-ros2',
    num: '05',
    category: 'Autonomous Systems',
    title: 'ROS 2 & Gazebo — AMR Physics Simulation',
    summary: 'Autonomous Mobile Robot simulation in ROS 2 & Gazebo, integrated with Micro-ROS on ESP32 for hardware-in-the-loop navigation validation.',
    cover: 'assets/projects/covers/gazebo_ros_cover.svg',
    image: 'assets/projects/gazebo_ros/gazebo_sim_1_frame_1.jpg',
    video: 'assets/videos/gazebo_ros_sim.mp4',
    tags: ['ROS 2 Humble', 'Micro-ROS', 'Gazebo', 'ESP32', 'Navigation2', 'URDF'],
    specs: {
      'Framework': 'ROS 2 / Micro-ROS',
      'Simulator': 'Gazebo Sim',
      'Hardware': 'ESP32 Microcontroller',
      'Control': 'Teleop & Autonomous Nav'
    },
    gallery: [
      { src: 'assets/projects/gazebo_ros/gazebo_sim_1_frame_1.jpg', title: 'Gazebo Physics Simulation', desc: 'AMR 3D world physics & collision modeling' },
      { src: 'assets/projects/gazebo_ros/gazebo_sim_2_frame_1.jpg', title: 'ROS 2 Humble Node Graph', desc: 'Telemetry, teleop & Micro-ROS agent' },
      { src: 'assets/projects/gazebo_ros/gazebo_sim_3_frame_1.jpg', title: 'Rviz Sensor Visualization', desc: 'LiDAR pointcloud & wheel odometry mapping' }
    ],
    problem: 'Developing autonomous navigation directly on physical robots causes crashes and slow iteration. Simulation enables safe algorithm validation.',
    objective: 'Establish Gazebo physics simulation connected via Micro-ROS to ESP32 for hardware-in-the-loop validation of wheel odometry and motor commands.',
    role: 'Robotics Software & Simulation Developer',
    mechanical: 'URDF/Xacro robot model with wheel inertia tensors, caster pivot dynamics, LiDAR sensor placement, and frame collision geometry.',
    hardware: 'ESP32, quadrature wheel encoders, motor driver ICs, LiDAR scanner mount.',
    software: 'ROS 2 Humble, Micro-ROS agent, Gazebo Sim, Rviz, C++ / Python ROS nodes.',
    results: 'Established bidirectional publisher/subscriber communication between ESP32 hardware and ROS 2 Gazebo simulation environment.'
  },
  {
    id: 'ackerman-rc',
    num: '06',
    category: 'Embedded Systems',
    title: '4WD RC Vehicle — Ackerman Steering & Arduino',
    summary: 'Designed and fabricated a 4WD RC vehicle with true Ackerman steering geometry for optimized cornering traction, controlled via Arduino UNO.',
    cover: 'assets/projects/covers/ackerman_rc_cover.svg',
    image: null,
    video: null,
    tags: ['Arduino UNO', 'Ackerman Geometry', '4WD', 'Embedded C', 'Vehicle Dynamics'],
    specs: {
      'Steering': 'True Ackerman Geometry',
      'Controller': 'Arduino UNO',
      'Drive': '4WD DC Motors',
      'Comm': 'Wireless RF'
    },
    problem: '4WD RC vehicles with fixed parallel front steering suffer severe tire scrub during tight turns, losing traction and wasting energy.',
    objective: 'Design an Ackerman steering linkage for a 4WD RC platform controlled by Arduino UNO for smooth turning response.',
    role: 'Embedded & Vehicle Mechanical Designer',
    mechanical: 'Calculated Ackerman steering trapezoid dimensions. Modeled chassis plate, steering knuckles, and motor mounts for 3D printing.',
    hardware: 'Arduino UNO R3, L298N motor driver, servo motor, 4× DC gearhead motors, 11.1V LiPo, RF receiver.',
    software: 'Arduino C/C++, PWM servo control, differential speed mapping, steering calibration.',
    results: 'Eliminated front wheel tire scrub, reduced turning radius by 22%, improved power efficiency in high-speed slalom tests.'
  },
  {
    id: 'lpg-detection',
    num: '07',
    category: 'Embedded Systems',
    title: 'LPG Gas Leakage Detection System',
    summary: 'Safety-critical embedded system using MQ-05 semiconductor gas sensor to detect LPG leaks and trigger instant alarm and emergency shutdown within 500ms.',
    cover: 'assets/projects/covers/lpg_detector_cover.svg',
    image: null,
    video: null,
    tags: ['MQ-05 Sensor', 'Gas Safety', 'Arduino', 'Embedded C', 'Safety Automation'],
    specs: {
      'Sensor': 'MQ-05 Semiconductor',
      'Controller': 'Arduino / ESP32',
      'Alert': 'LED & Piezo Alarm',
      'Response': '< 500ms'
    },
    problem: 'Undetected LPG leaks in residential and small industrial facilities pose serious fire and explosion risks when gas reaches lower explosive limits.',
    objective: 'Develop an automated low-power gas leak monitoring system that continuously samples gas concentration and triggers immediate alarm.',
    role: 'Embedded Hardware & Circuit Engineer',
    mechanical: 'Compact 3D-printed sensor housing with optimal ventilation slots for ambient air intake.',
    hardware: 'MQ-05 gas sensor, Arduino, 16×2 LCD, piezo buzzer, relay module for solenoid cutoff, status LEDs.',
    software: 'Embedded C/C++, analog calibration, moving average threshold filter, interrupt-driven alarm state machine.',
    results: 'Reliable detection of LPG leakage within 500ms, triggering automatic relay disconnect and local alarm.'
  },
  {
    id: 'physics-sim',
    num: '08',
    category: 'CAD & Simulation',
    title: 'Physics-Engine Robot Dynamics & Joint Force Analysis',
    summary: 'Multi-body physics simulation of dynamic joint forces, torque requirements, and link movement under variable payload for actuator sizing.',
    cover: 'assets/projects/covers/physics_sim_cover.svg',
    image: 'assets/projects/robotics_physics/physics_sim_1_frame_1.jpg',
    video: 'assets/videos/physics_robot_sim.mp4',
    tags: ['Physics Simulation', 'Robot Dynamics', 'Joint Torque', 'Multi-Body', 'Actuator Sizing'],
    specs: {
      'Domain': 'Multi-Body Dynamics',
      'Analysis': 'Joint Torque & Friction',
      'Engine': 'Rigid-Body Physics',
      'Goal': 'Actuator Sizing'
    },
    gallery: [
      { src: 'assets/projects/robotics_physics/physics_sim_1_frame_1.jpg', title: 'Dynamic Joint Force Simulation', desc: 'Multi-body payload stress analysis' },
      { src: 'assets/projects/robotics_physics/physics_sim_2_frame_1.jpg', title: 'Robot Arm Trajectory Plot', desc: 'Joint torque profiles for actuator sizing' },
      { src: 'assets/projects/robotics_physics/physics_sim_3_frame_1.jpg', title: 'Rigid Body Collision Engine', desc: 'Dynamic impact physics validation' }
    ],
    problem: 'Under-sizing motor actuators causes stalls and trajectory lag during heavy payload operations at full arm extension.',
    objective: 'Simulate dynamic joint torque profiles at maximum payload extensions to specify motor gearboxes with appropriate safety factors.',
    role: 'Simulation Engineer',
    mechanical: 'Dynamic inertia modeling of multi-link robot manipulator assemblies.',
    hardware: 'Virtual joint actuators, force/torque sensors.',
    software: 'Physics simulation environment, kinematic solvers.',
    results: 'Exact motor gearbox torque specifications determined for continuous duty cycle without thermal overload.'
  }
];

const INTERESTS_PHOTOS = [
  { img: 'assets/projects/3d_printing/3d_print_1.jpg', title: 'FDM Prototype Parts', sub: 'Custom Mechanical Assembly' },
  { img: 'assets/projects/3d_printing/3d_print_2.jpg', title: 'Drone Structural Bracket', sub: 'PETG Printed Component' },
  { img: 'assets/projects/3d_printing/3d_print_3.jpg', title: 'Custom Motor Mount', sub: 'FDM Rapid Prototype' },
  { img: 'assets/projects/3d_printing/3d_print_4.jpg', title: 'Microcontroller Enclosure', sub: 'Custom Housing' },
  { img: 'assets/projects/3d_printing/3d_print_5.jpg', title: 'High-Density Infill Specimen', sub: 'Structural Strength Test' },
  { img: 'assets/projects/3d_printing/3d_print_6.jpg', title: '3D Printed Linkage Joint', sub: 'Precision Tolerance Fitting' },
  { img: 'assets/projects/3d_printing/3d_print_7.jpg', title: 'Custom Arm Flange', sub: 'Additive Manufacturing' },
  { img: 'assets/projects/3d_printing/3d_print_8.jpg', title: 'Workshop Build Plate', sub: 'Layer Line Quality Check' },
  { img: 'assets/projects/3d_printing/3d_print_9.jpg', title: 'Component Assembly', sub: 'FDM Hardware Integration' }
];

const CERTIFICATES = [
  {
    id: 'iit-delhi-ansys-cad',
    title: 'CAD Designing & ANSYS Analysis — Summer Internship Program',
    issuer: 'Course Central × TRYST IIT Delhi',
    category: 'CAD & Simulation',
    date: 'May - Jun 2025',
    skills: ['ANSYS FEA Structural', 'CAD Modeling', 'TRYST IIT Delhi', 'Stress Analysis', 'Finite Element Method'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_IIT_Delhi_CAD_ANSYS_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_IIT_Delhi_CAD_ANSYS.jpg'
  },
  {
    id: 'nidar-dfi-cert',
    title: 'NIDAR — National Innovation Challenge for Drone Application & Research (PR1 Final Mission)',
    issuer: 'Drone Federation of India (DFI) × MeitY × Gautam Buddha University',
    category: 'Drones & Embedded',
    date: '2026',
    skills: ['Autonomous UAV', 'PR1 Final Mission', 'DFI Certification', 'Precision Agriculture', 'MeitY'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_NIDAR_DFI_Final_Mission_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_NIDAR_DFI_Final_Mission.jpg'
  },
  {
    id: 'iisc-air-taxi-drone',
    title: 'Advanced Drone Technology (Air Taxi) Workshop Certification',
    issuer: 'Bharat Space Education Research Centre × IISc Bengaluru (I-STEM CeNSE)',
    category: 'Drones & Embedded',
    date: 'Jul 2025',
    skills: ['Air Taxi UAV Tech', 'IISc Bengaluru', 'Aerospace Dynamics', 'I-STEM CeNSE', 'Drone Avionics'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_IISc_Advanced_Drone_Workshop_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_IISc_Advanced_Drone_Workshop.pdf'
  },
  {
    id: 'ros2-amr',
    title: '45-Day Autonomous Mobile Robot (AMR) & ROS 2 Training',
    issuer: 'AMR Robotics Training Institute',
    category: 'Robotics & Autonomous',
    date: '2026',
    skills: ['ROS 2 Humble', 'Gazebo Sim', 'Micro-ROS', 'URDF Kinematics', 'Nav2 Stack'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_ROS2_AMR_Training_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_ROS2_AMR_Training.pdf'
  },
  {
    id: 'agkc-motorsport-2025',
    title: 'AGKC 2025 Season II — National Level Go Karting Championship',
    issuer: "AITAM × SmartBridge × Institution's Innovation Council",
    category: 'Motorsports & UAV',
    date: 'Mar 2025',
    skills: ['Motorsport Engineering', 'Go-Kart Chassis Dynamics', 'Track Endurance', 'Vehicle Fabrication'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_AGKC_2025_Motorsport_GoKart_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_AGKC_2025_Motorsport_GoKart.pdf'
  },
  {
    id: 'srkr-gokart-2025',
    title: 'SRKR Go-Kart Championship 2025 — Team Markandeya',
    issuer: 'SRKR Engineering College (A)',
    category: 'Motorsports & UAV',
    date: 'Jan 2025',
    skills: ['Team Markandeya', 'Go-Kart Chassis Dynamics', 'Steering Geometry', 'Mechanical Fabrication'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_SRKR_GoKart_Championship_2025_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_SRKR_GoKart_Championship_2025.pdf'
  },
  {
    id: 'siemens-nx-mastery',
    title: 'Siemens NX Mastery: Advanced Design & Applications',
    issuer: 'Siemens / Coursera',
    category: 'CAD & Simulation',
    date: 'Apr 2026',
    skills: ['Siemens NX', 'Advanced Part Design', 'Assemblies', 'Industrial CAD Standards'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_Siemens_NX_Mastery_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_Siemens_NX_Mastery.pdf'
  },
  {
    id: 'siemens-nx-essentials',
    title: 'Intro to Siemens NX: Engineering Essentials & Part Design',
    issuer: 'Siemens / Coursera',
    category: 'CAD & Simulation',
    date: 'Nov 2025',
    skills: ['Parametric Modeling', '3D Geometry', 'GD&T', 'Mechanical Drafts'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_Siemens_NX_Essentials_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_Siemens_NX_Essentials.pdf'
  },
  {
    id: 'solidworks-advanced',
    title: 'SOLIDWORKS Advanced Sketching & Reference Geometry',
    issuer: 'Dassault Systèmes / Coursera',
    category: 'CAD & Simulation',
    date: 'Nov 2025',
    skills: ['SOLIDWORKS', 'Complex Surfaces', 'Reference Planes', 'Mechanical Modeling'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_SOLIDWORKS_Advanced_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_SOLIDWORKS_Advanced.pdf'
  },
  {
    id: 'linkedin-reverse-eng',
    title: 'Reverse Engineering Foundations: Product Design',
    issuer: 'LinkedIn Learning',
    category: 'CAD & Simulation',
    date: 'Jul 2026',
    skills: ['Reverse Engineering', 'Product Design', '3D CAD Reconstruction', 'DFM Principles'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_LinkedIn_Reverse_Engineering_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_LinkedIn_Reverse_Engineering.jpg'
  },
  {
    id: 'mathworks-adv-cv',
    title: 'Advanced Deep Learning Techniques for Computer Vision',
    issuer: 'MathWorks / Coursera',
    category: 'AI & Computer Vision',
    date: 'Mar 2026',
    skills: ['CNN Architectures', 'Feature Extraction', 'YOLO / Vision Models', 'Transfer Learning'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_MathWorks_Advanced_Deep_Learning_CV_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_MathWorks_Advanced_Deep_Learning_CV.pdf'
  },
  {
    id: 'mathworks-obj-det',
    title: 'Deep Learning for Object Detection',
    issuer: 'MathWorks / Coursera',
    category: 'AI & Computer Vision',
    date: 'Feb 2026',
    skills: ['Object Tracking', 'Bounding Box Regression', 'MATLAB CV Toolbox'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_MathWorks_Object_Detection_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_MathWorks_Object_Detection.pdf'
  },
  {
    id: 'mathworks-intro-cv',
    title: 'Introduction to Deep Learning for Computer Vision',
    issuer: 'MathWorks / Coursera',
    category: 'AI & Computer Vision',
    date: 'Feb 2026',
    skills: ['Image Processing', 'Neural Networks', 'Supervised Classification'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_MathWorks_Intro_Deep_Learning_CV_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_MathWorks_Intro_Deep_Learning_CV.pdf'
  },
  {
    id: 'binford-drone',
    title: 'Quadcopter Drone Design & Flight Operations Certification',
    issuer: 'BINFORD Research Labs Pvt. Ltd.',
    category: 'Drones & Embedded',
    date: '2025',
    skills: ['Quadcopter Frame CAD', 'ESP32 Sensor Fusion', 'PID Flight Tuning', 'Flight Safety'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_Drone_BINFORD_Cert_1_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_Drone_BINFORD_Cert_1.pdf'
  },
  {
    id: 'six-sigma-yellow',
    title: 'Six Sigma Yellow Belt — Process Improvement',
    issuer: 'LinkedIn Learning',
    category: 'Quality & Operations',
    date: 'Jul 2026',
    skills: ['DMAIC Methodology', 'Statistical Process Control', 'Quality Assurance', 'Kaizen'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_Six_Sigma_Yellow_Belt_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_Six_Sigma_Yellow_Belt.pdf'
  },
  {
    id: 'udemy-ros2',
    title: 'ROS 2 & Micro-ROS for Robotics & Embedded Systems',
    issuer: 'Udemy',
    category: 'Robotics & Autonomous',
    date: '2025',
    skills: ['Micro-ROS', 'ESP32 Agent', 'Pub/Sub Nodes', 'DDS Middleware'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_Udemy_ROS2_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_Udemy_ROS2.pdf'
  },
  {
    id: 'isnee-fombi',
    title: 'FOMBI National Off-Road ATV Championship Certification',
    issuer: 'ISNEE Motorsports',
    category: 'Motorsports & UAV',
    date: '2024 - 2025',
    skills: ['Vehicle Dynamics', 'Telescopic Steering', 'Tubular Chassis Fabrication', 'Endurance Racing'],
    thumb: 'assets/certificates/previews/Jaswanth_Kadali_ISNEE_FOMBI_Motorsport_thumb.jpg',
    pdf: 'assets/certificates/Jaswanth_Kadali_ISNEE_FOMBI_Motorsport.pdf'
  }
];

const MARQUEE_ITEMS = [
  'Mechanical Engineering', 'Robotics', 'Drones & UAV', 'Autonomous Systems',
  'CAD / CAE', 'ROS 2', 'Gazebo', 'Embedded Systems', 'ESP32 & Arduino',
  'Siemens NX', 'SOLIDWORKS', 'Fusion 360', 'ANSYS FEA', 'Sensor Fusion',
  'Digital Twin', 'Computer Vision', 'Additive Manufacturing', 'PID Control',
  'Six Sigma', 'Vehicle Dynamics'
];

/* ——————————————————————————————————————————————————————————————
   LENIS SMOOTH SCROLL
—————————————————————————————————————————————————————————————— */
let lenis;

function initLenis() {
  if (!window.Lenis) return;
  lenis = new Lenis({
    duration: 1.3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Connect Lenis to GSAP ScrollTrigger
  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

/* ——————————————————————————————————————————————————————————————
   LOADER
—————————————————————————————————————————————————————————————— */
function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-progress-fill');
  if (!loader) return;

  // Animate progress bar
  if (fill) {
    setTimeout(() => { fill.style.width = '70%'; }, 50);
    setTimeout(() => { fill.style.width = '100%'; }, 300);
  }

  const dismiss = () => {
    if (loader.dataset.dismissed) return;
    loader.dataset.dismissed = 'true';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.classList.add('loaded');
      if (typeof animateHeroEntrance === 'function') animateHeroEntrance();
    }, 400);
  };

  setTimeout(dismiss, 500);
  setTimeout(dismiss, 1000);

  // Safety fallback: make sure everything is visible
  setTimeout(() => {
    document.querySelectorAll('.sr').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.hero-name-inner').forEach(el => el.style.transform = 'none');
    document.querySelectorAll('.hero-tag, .hero-descriptor, .hero-bottom').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, 1200);
}

/* ——————————————————————————————————————————————————————————————
   CUSTOM CURSOR
—————————————————————————————————————————————————————————————— */
function initCursor() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 });
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    gsap.set(ring, { x: ringX, y: ringY });
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states
  const hoverEls = document.querySelectorAll('a, button, input, .project-item, .skill-category, .cert-card');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.querySelectorAll('.project-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-project'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-project'));
  });
}

/* ——————————————————————————————————————————————————————————————
   NAVBAR
—————————————————————————————————————————————————————————————— */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const links = document.getElementById('nav-links');
  const closeBtn = document.getElementById('mobile-close');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const closeMenu = () => {
    links?.classList.remove('mobile-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  closeBtn?.addEventListener('click', closeMenu);

  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
}

/* ——————————————————————————————————————————————————————————————
   HERO THREE.JS CANVAS — Rotating 3D Geometric Network
—————————————————————————————————————————————————————————————— */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.z = 50;

  // Build a 3D wireframe network — inspired by CAD node graphs
  const geo = new THREE.IcosahedronGeometry(18, 2);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x00c2c7,
    wireframe: true,
    transparent: true,
    opacity: 0.12
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // Inner denser sphere
  const geo2 = new THREE.IcosahedronGeometry(10, 3);
  const mat2 = new THREE.MeshBasicMaterial({
    color: 0x00c2c7,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const mesh2 = new THREE.Mesh(geo2, mat2);
  scene.add(mesh2);

  // Point cloud
  const ptGeo = new THREE.BufferGeometry();
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
  }
  ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const ptMat = new THREE.PointsMaterial({ color: 0x00c2c7, size: 0.3, transparent: true, opacity: 0.4 });
  const points = new THREE.Points(ptGeo, ptMat);
  scene.add(points);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    const w = canvas.parentElement?.clientWidth || window.innerWidth;
    const h = canvas.parentElement?.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  let t = 0;
  function animate() {
    t += 0.003;
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.0015 + mouseY * 0.0008;
    mesh.rotation.y += 0.002 + mouseX * 0.001;
    mesh2.rotation.x -= 0.001;
    mesh2.rotation.y -= 0.0015;
    points.rotation.y += 0.0005;
    camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 4 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();
}

/* ——————————————————————————————————————————————————————————————
   DRONE CANVAS — 3D Wireframe Quadcopter
—————————————————————————————————————————————————————————————— */
function initDroneCanvas() {
  const canvas = document.getElementById('drone-canvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const W = canvas.parentElement.clientWidth;
  const H = canvas.parentElement.clientHeight;
  renderer.setSize(W, H);
  renderer.setClearColor(0x111113, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
  camera.position.set(0, 5, 28);

  // Ambient subtle light
  scene.add(new THREE.AmbientLight(0x334455, 1.5));
  const pointLight = new THREE.PointLight(0x00c2c7, 2, 60);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Drone group
  const drone = new THREE.Group();
  scene.add(drone);

  // Central hub
  const hubGeo = new THREE.BoxGeometry(4, 1.2, 4);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x00c2c7, wireframe: true, transparent: true, opacity: 0.7 });
  const hub = new THREE.Mesh(hubGeo, wireMat);
  drone.add(hub);

  // Arms — 4 arms at 45°
  const armDirs = [
    [1, 0, 1], [1, 0, -1], [-1, 0, 1], [-1, 0, -1]
  ];
  armDirs.forEach(([x, y, z]) => {
    const armGeo = new THREE.CylinderGeometry(0.15, 0.15, 10, 6);
    const arm = new THREE.Mesh(armGeo, wireMat);
    arm.rotation.z = Math.PI / 2;
    arm.position.set(x * 6, 0, z * 6);
    arm.lookAt(0, 0, 0);
    arm.rotateX(Math.PI / 2);
    drone.add(arm);

    // Motor at end of arm
    const motorGeo = new THREE.CylinderGeometry(1.2, 1.2, 1, 12);
    const motor = new THREE.Mesh(motorGeo, wireMat);
    motor.position.set(x * 10, 0.5, z * 10);
    drone.add(motor);

    // Propeller disk
    const propGeo = new THREE.TorusGeometry(2.2, 0.08, 4, 16);
    const prop = new THREE.Mesh(propGeo, new THREE.MeshBasicMaterial({ color: 0x00c2c7, transparent: true, opacity: 0.4 }));
    prop.position.set(x * 10, 1.2, z * 10);
    prop.rotation.x = Math.PI / 2;
    prop.userData.spin = Math.random() < 0.5 ? 0.08 : -0.08;
    drone.add(prop);
  });

  // Landing struts
  const strutGeo = new THREE.CylinderGeometry(0.1, 0.1, 4, 6);
  [-3, 3].forEach(x => {
    const strut = new THREE.Mesh(strutGeo, wireMat);
    strut.position.set(x, -2.5, 0);
    drone.add(strut);
  });

  let mouseX = 0, mouseY = 0;
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  function animate() {
    requestAnimationFrame(animate);
    drone.rotation.y += 0.006 + mouseX * 0.01;
    drone.rotation.x += (mouseY * 0.3 - drone.rotation.x) * 0.05;
    drone.position.y = Math.sin(Date.now() * 0.001) * 0.8;

    // Spin propellers
    drone.children.forEach(child => {
      if (child.userData.spin) child.rotation.z += child.userData.spin;
    });

    renderer.render(scene, camera);
  }
  animate();
}

/* ——————————————————————————————————————————————————————————————
   HERO ENTRANCE ANIMATION (GSAP)
—————————————————————————————————————————————————————————————— */
function animateHeroEntrance() {
  // Elements are visible by default — only animate on desktop with GSAP available
  if (!window.gsap || window.innerWidth < 768) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // Animate FROM hidden states (elements stay visible if this fails)
  tl.from('.hero-name-inner', {
    y: '110%',
    duration: 1.2,
    stagger: 0.15
  });

  tl.from('.hero-tag', {
    opacity: 0,
    y: 10,
    duration: 0.8
  }, '-=0.6');

  tl.from('.hero-descriptor', {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.5');

  tl.from('.hero-bottom', {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.5');
}

/* ——————————————————————————————————————————————————————————————
   MARQUEE
—————————————————————————————————————————————————————————————— */
function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  track.innerHTML = doubled.map(item =>
    `<div class="marquee-item"><div class="marquee-dot"></div>${item}</div>`
  ).join('');
}

/* ——————————————————————————————————————————————————————————————
   PROJECTS LIST
—————————————————————————————————————————————————————————————— */
function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;

  list.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-item" data-id="${p.id}">
      <div class="project-visual">
        ${p.video ? `
          <video class="project-video-bg" src="${p.video}" muted loop playsinline preload="metadata"></video>
        ` : p.image ? `
          <img class="project-img-bg" src="${p.image}" alt="${p.title}" loading="lazy">
        ` : `
          <object data="${p.cover}" type="image/svg+xml" class="project-svg-cover" aria-label="${p.title} technical diagram"></object>
        `}
      </div>
      <div class="project-info">
        <div class="project-num">${p.num} / ${String(PROJECTS.length).padStart(2, '0')}</div>
        <div class="project-category-badge">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <button class="project-cta open-case-study magnetic" data-id="${p.id}">
          <span>View Case Study</span>
          <span class="project-cta-arrow">→</span>
        </button>
      </div>
    </div>
  `).join('');

  // High-performance IntersectionObserver: only play video when approaching/inside viewport
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: '200px 0px', threshold: 0.1 });

    document.querySelectorAll('.project-video-bg').forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    document.querySelectorAll('.project-video-bg').forEach(video => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }

  // Case study buttons
  document.querySelectorAll('.open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.id);
    });
  });

  // Update scroll reveal for new elements
  initScrollReveal();
}

/* ——————————————————————————————————————————————————————————————
   INTERESTS GRID
—————————————————————————————————————————————————————————————— */
function renderInterests() {
  const grid = document.getElementById('interests-grid');
  if (!grid) return;

  grid.innerHTML = INTERESTS_PHOTOS.map(p => `
    <div class="interest-photo" tabindex="0" role="button" aria-label="View ${p.title}" data-img="${p.img}" data-title="${p.title}">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="interest-photo-overlay">EXPAND ↗</div>
    </div>
  `).join('');

  grid.querySelectorAll('.interest-photo').forEach(item => {
    const open = () => openLightbox(item.dataset.img, item.dataset.title);
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
  });
}

/* ——————————————————————————————————————————————————————————————
   CERTIFICATIONS GRID
—————————————————————————————————————————————————————————————— */
function renderCertificates(filter = 'all') {
  const grid = document.getElementById('certifications-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? CERTIFICATES 
    : CERTIFICATES.filter(c => c.category === filter);

  grid.innerHTML = filtered.map((c) => `
    <div class="cert-card" data-id="${c.id}">
      <div class="cert-thumb-wrap" tabindex="0" role="button" aria-label="Zoom certificate ${c.title}">
        <img src="${c.thumb}" alt="${c.title}" class="cert-thumb-img" loading="lazy">
        <div class="cert-thumb-overlay">
          <span>PREVIEW ↗</span>
        </div>
      </div>
      <div class="cert-body">
        <div class="cert-top-row">
          <span class="cert-issuer-badge">${c.issuer}</span>
          <span class="cert-verified-badge">✓ Verified</span>
        </div>
        <h3 class="cert-card-title">${c.title}</h3>
        <div class="cert-skills-list">
          ${c.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join('')}
        </div>
        <div class="cert-card-footer">
          <span class="cert-date">${c.date}</span>
          <a href="${c.pdf}" target="_blank" rel="noopener noreferrer" class="cert-open-btn" aria-label="Open PDF for ${c.title}">
            <span>Official PDF</span>
            <span class="cert-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Lightbox on thumbnail click
  grid.querySelectorAll('.cert-thumb-wrap').forEach((thumbEl, idx) => {
    const cert = filtered[idx];
    const open = () => openLightbox(cert.thumb, `${cert.title} — ${cert.issuer}`);
    thumbEl.addEventListener('click', open);
    thumbEl.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
  });

  initScrollReveal();
}

function initCertFilters() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertificates(btn.dataset.filter);
    });
  });
}

/* ——————————————————————————————————————————————————————————————
   MODAL (Case Study)
—————————————————————————————————————————————————————————————— */
function openModal(id) {
  const p = PROJECTS.find(p => p.id === id);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const panel = document.getElementById('modal-panel');
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="modal-category">${p.num} — ${p.category}</div>
    <h2 class="modal-title" id="modal-title">${p.title}</h2>
    <div class="modal-cover">
      ${p.video ? `
        <video src="${p.video}" controls autoplay loop playsinline class="modal-video" style="width:100%;height:100%;object-fit:contain;background:#06060c;display:block;margin:0;"></video>
      ` : p.image ? `
        <img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;display:block;">
      ` : `
        <object data="${p.cover}" type="image/svg+xml" style="width:100%;height:100%;display:block" aria-label="${p.title} technical diagram"></object>
      `}
    </div>
    <div class="modal-tags">${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    <div class="modal-specs">
      ${Object.entries(p.specs).map(([k, v]) => `
        <div class="modal-spec-item">
          <div class="modal-spec-key">${k}</div>
          <div class="modal-spec-val">${v}</div>
        </div>
      `).join('')}
    </div>

    <div class="modal-section-title">Problem Statement</div>
    <p class="modal-body">${p.problem}</p>

    <div class="modal-section-title">Objective</div>
    <p class="modal-body">${p.objective}</p>

    <div class="modal-section-title">My Role</div>
    <p class="modal-body">${p.role}</p>

    <div class="modal-section-title">Mechanical Design</div>
    <p class="modal-body">${p.mechanical}</p>

    <div class="modal-section-title">Hardware</div>
    <p class="modal-body">${p.hardware}</p>

    <div class="modal-section-title">Software</div>
    <p class="modal-body">${p.software}</p>

    <div class="modal-section-title">Results</div>
    <p class="modal-body">${p.results}</p>

        ${p.gallery && p.gallery.length > 0 ? `
      <div class="modal-section-title">Hardware Build &amp; Simulation Gallery</div>
      <div class="modal-gallery-grid">
        ${p.gallery.map(item => `
          <div class="modal-gallery-card" onclick="openLightbox('${item.src}', '${item.title.replace(/'/g, "\'")}')">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="modal-gallery-card-info">
              <div class="mgc-title">${item.title}</div>
              <div class="mgc-desc">${item.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    ` : p.image ? `
      <div class="modal-section-title">Project Hardware &amp; Prototype</div>
      <div style="width:100%; max-height:500px; overflow:hidden; border-radius:var(--radius); border:1px solid var(--graphite); margin:1.5rem 0; background:var(--black-3); cursor:pointer;" onclick="openLightbox('${p.image}', '${p.title.replace(/'/g, "\'")}')">
        <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:contain; display:block;">
      </div>
    ` : ''}

    ${p.video ? `
      <div class="modal-section-title">Project Video Demonstration</div>
      <video class="modal-video" src="${p.video}" controls preload="metadata">
        Your browser doesn't support HTML5 video.
      </video>
    ` : ''}

    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: center;">
      <button onclick="closeModal()" style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(0,194,199,0.12); border:1px solid var(--accent); color:var(--accent); font-family:var(--font-mono); font-size:0.8rem; font-weight:700; letter-spacing:0.08em; padding:0.75rem 2rem; border-radius:6px; cursor:pointer; transition:all 0.2s ease;">
        ✕ CLOSE CASE STUDY
      </button>
    </div>
  `;

  overlay.classList.add('open');
  overlay.scrollTop = 0;
  if (panel) panel.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  try { lenis?.stop(); } catch(e) {}
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  // Pause all playing videos in the modal
  overlay.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch(e) {}
  });

  overlay.classList.remove('open');
  document.body.style.overflow = '';
  try { lenis?.start(); } catch(e) {}
}

window.openModal = openModal;
window.closeModal = closeModal;

/* ——————————————————————————————————————————————————————————————
   LIGHTBOX
—————————————————————————————————————————————————————————————— */
function openLightbox(src, alt = '') {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  img.src = src;
  img.alt = alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  try { lenis?.stop(); } catch(e) {}
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
  try { lenis?.start(); } catch(e) {}
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

/* ——————————————————————————————————————————————————————————————
   SCROLL REVEAL (IntersectionObserver)
—————————————————————————————————————————————————————————————— */
function initScrollReveal() {
  const els = document.querySelectorAll('.sr:not(.sr-observed)');
  const isMobile = window.innerWidth < 768;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { 
    threshold: isMobile ? 0.01 : 0.08, 
    rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -40px 0px' 
  });

  els.forEach(el => {
    el.classList.add('sr-observed');
    obs.observe(el);
  });
}

/* ——————————————————————————————————————————————————————————————
   COUNTER ANIMATIONS
—————————————————————————————————————————————————————————————— */
function initCounters() {
  const counters = document.querySelectorAll('.counter-anim');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let count = 0;
      const interval = setInterval(() => {
        count++;
        el.textContent = count;
        if (count >= target) clearInterval(interval);
      }, 80);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ——————————————————————————————————————————————————————————————
   GSAP SCROLL ANIMATIONS
—————————————————————————————————————————————————————————————— */
function initGSAPAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.innerWidth < 768;

  // Prevent resize jitter / trigger resets during mobile address bar hide/show scroll transitions
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });

  // Intro phrases — stagger reveal
  gsap.utils.toArray('.intro-phrase').forEach((phrase, i) => {
    gsap.from(phrase, {
      scrollTrigger: {
        trigger: phrase,
        start: isMobile ? 'top 92%' : 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: isMobile ? -20 : -60,
      opacity: 0, // Fully fade in from 0 on mobile too
      duration: isMobile ? 0.6 : 1,
      ease: 'power3.out',
      delay: isMobile ? 0 : i * 0.1
    });
  });

  // Project items — slide in alternating directions
  gsap.utils.toArray('.project-item').forEach((item, i) => {
    const dir = i % 2 === 0 ? (isMobile ? 30 : 60) : (isMobile ? -30 : -60);
    gsap.from(item.querySelector('.project-info'), {
      scrollTrigger: {
        trigger: item,
        start: isMobile ? 'top 88%' : 'top 75%',
        toggleActions: 'play none none reverse'
      },
      x: dir,
      opacity: 0,
      duration: isMobile ? 0.85 : 1.1,
      ease: 'power4.out'
    });

    gsap.from(item.querySelector('.project-visual'), {
      scrollTrigger: {
        trigger: item,
        start: isMobile ? 'top 90%' : 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.93,
      opacity: 0,
      duration: isMobile ? 0.9 : 1.2,
      ease: 'power4.out'
    });
  });

  // Parallax on section headings (Disabled on mobile to maximize frame rates and prevent stutters)
  gsap.utils.toArray('.process-title, .skills-title, .about-heading, .drone-info-heading, .robot-info-heading').forEach(el => {
    if (isMobile) return;
    gsap.fromTo(el,
      { y: 30 },
      {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      }
    );
  });

  // Contact section background text parallax (Disabled on mobile to optimize scrolling performance)
  if (!isMobile) {
    gsap.to('.contact-bg-text', {
      x: '-5%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
  }

  // Competition items stagger
  gsap.utils.toArray('.comp-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: isMobile ? 'top 92%' : 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: -40,
      opacity: 0,
      duration: isMobile ? 0.65 : 0.9,
      ease: 'power3.out',
      delay: isMobile ? 0 : i * 0.1
    });
  });

  // Cert cards
  gsap.utils.toArray('.cert-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: isMobile ? 'top 92%' : 'top 88%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      duration: isMobile ? 0.6 : 0.8,
      ease: 'power3.out',
      delay: isMobile ? 0 : (i % 4) * 0.1
    });
  });

  // Skill categories
  gsap.utils.toArray('.skill-category').forEach((cat, i) => {
    gsap.from(cat, {
      scrollTrigger: {
        trigger: cat,
        start: isMobile ? 'top 92%' : 'top 90%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.95,
      opacity: 0,
      duration: isMobile ? 0.55 : 0.7,
      ease: 'power3.out',
      delay: isMobile ? 0 : (i % 3) * 0.1
    });
  });
}

/* ——————————————————————————————————————————————————————————————
   MAGNETIC BUTTONS
—————————————————————————————————————————————————————————————— */
function initMagneticButtons() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power3.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ——————————————————————————————————————————————————————————————
   INITIALISE ALL
—————————————————————————————————————————————————————————————— */
document.addEventListener('DOMContentLoaded', () => {

  // Render content first
  initMarquee();
  renderProjects();
  renderInterests();
  renderCertificates();
  initCertFilters();

  // Init systems
  initLoader();
  initLenis();
  initCursor();
  initNavbar();

  // Init canvases
  try { initHeroCanvas(); } catch (e) { console.warn('Failed to init Hero canvas:', e); }
  try { initDroneCanvas(); } catch (e) { console.warn('Failed to init Drone canvas:', e); }

  // Init animations
  initScrollReveal();
  initCounters();
  initMagneticButtons();

  // Wait for GSAP to be ready then run scroll animations
  if (window.gsap && window.ScrollTrigger) {
    initGSAPAnimations();
  }

  // Modal events
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Lightbox events
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeLightbox(); }
  });
});
