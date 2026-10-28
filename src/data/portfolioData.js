export const personalProfile = {
  name: "CHINNAM SHIRIDI SAI",
  shortName: "Sai",
  title: "Computer Science Student | Software Developer | Cloud Enthusiast",
  education: {
    institution: "KL University",
    fullInstitution: "Koneru Lakshmaiah University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2024 – Present",
    cgpa: "9.72",
    verified: true,
  },
  previousEducation: [
    {
      institution: "NRI Junior College",
      qualification: "Intermediate (12th Grade)",
      period: "2022 – 2024",
      score: "97.1%",
    },
    {
      institution: "Srinivasa Public School",
      qualification: "Secondary School (10th Grade)",
      period: "2021 – 2022",
      score: "88.16%",
    },
  ],
  bio: "I'm a Computer Science student at KL University passionate about building reliable software, designing scalable backend systems, and creating practical solutions using modern web technologies and cloud platforms.",
  openToInternships: true,
  availabilityText: "Open to Software Development Internships",
  location: "Andhra Pradesh, India",
  email: "2400031075cse1@gmail.com",
  phone: "+91 9989472522",
  linkedin: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
  github: "https://github.com/shiridisai07",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/shiridisai07",
    linkedin: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
    email: "mailto:2400031075cse1@gmail.com",
    phone: "tel:+919989472522",
  },
};

export const rotatingHeadlines = [
  "Computer Science Student",
  "Software Developer",
  "Java & Spring Boot Developer",
  "Cloud Computing Enthusiast",
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: "cpu",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
    ],
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Java", "Spring Boot", "REST APIs", "Hibernate"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL"],
  },
  {
    title: "Cloud and DevOps",
    icon: "cloud",
    skills: ["AWS", "Google Cloud"],
  },
  {
    title: "Tools and Platforms",
    icon: "tool",
    skills: ["Git", "GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];

export const currentlyExploring = [
  "Microservices Architecture",
  "Cloud Computing",
  "AI-Assisted Development",
  "TinyML",
];

export const projects = [
  {
    id: 1,
    title: "EduTrack",
    subtitle: "Academic Management & Assignment Submission Platform",
    category: "Frontend Development",
    status: "Completed (Frontend Project)",
    isCompleted: true,
    description:
      "A responsive academic management interface engineered for students and faculty to manage coursework, submit assignments online, and track grading workflows with seamless navigation.",
    longDescription:
      "Developed as a verified university frontend project and frontend hackathon implementation. EduTrack delivers an intuitive, fast, and accessible user experience for academic information management, dynamic assignment submission workflows, and grade tracking. Engineered with clean semantic HTML5, modern CSS3 styling, and modular JavaScript without unnecessary bloat.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "DOM Manipulation",
      "UI/UX Design",
    ],
    features: [
      "Responsive frontend interface tailored for student coursework, academic tracking, and schedules.",
      "Interactive assignment submission portal with grading progression and feedback components.",
      "Designed user-friendly pages to streamline navigation and simplify academic record lookup.",
      "Client-side form validation and dynamic state rendering for real-time user feedback.",
      "Structured with semantic markup and flexible CSS layout systems for cross-device compatibility.",
    ],
    architecture:
      "Client-side Single Page Application architecture utilizing modular vanilla JavaScript for dynamic DOM rendering, event handling, and form validation, styled with custom responsive CSS3.",
    github: "https://github.com/shiridisai07",
    demo: "",
  },
  {
    id: 2,
    title: "Student Management System",
    subtitle: "Full-Stack Student Work & Study Management Platform",
    category: "Full Stack Development",
    status: "Completed (Full-Stack System)",
    isCompleted: true,
    description:
      "A full-stack enterprise web application for managing student work, study records, course enrollments, and academic data using Spring Boot, RESTful services, and MySQL.",
    longDescription:
      "Engineered to digitize and automate student work-study administration and academic record keeping. Implements a robust Spring Boot backend exposing secured RESTful endpoints to perform high-efficiency CRUD operations on student profiles, course mappings, and academic standing, persisted in a normalized MySQL relational database.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Hibernate",
      "JPA",
      "MVC Architecture",
      "Postman",
    ],
    features: [
      "Full-stack web application designed for comprehensive student work and study record management.",
      "Engineered clean RESTful APIs facilitating reliable client-server communication.",
      "Implemented high-performance CRUD operations for student registration, profile updates, and course tracking.",
      "Integrated Hibernate / JPA ORM layer for robust relational database transaction management.",
      "Structured strictly using MVC (Model-View-Controller) design pattern for scalable, maintainable enterprise code.",
    ],
    architecture:
      "Layered enterprise MVC architecture comprising Spring Boot REST controllers, service abstraction layer, Spring Data JPA / Hibernate persistence layer, and a normalized MySQL relational database.",
    github: "https://github.com/shiridisai07",
    demo: "",
  },
  {
    id: 3,
    title: "VoltGrid",
    subtitle: "Distributed EV Charging Station & Grid Load Balancing Platform",
    category: "SOA & Cloud Systems",
    status: "Completed (SOA Project)",
    isCompleted: true,
    description:
      "Engineered under Service-Oriented Architecture (SOA) principles to coordinate multi-node EV charging operations, balance power grid loads dynamically, and prevent electrical surges during peak demand.",
    longDescription:
      "VoltGrid addresses the critical electrical infrastructure challenge of power grid destabilization caused by concurrent fast-charging electric vehicles. Built following Service-Oriented Architecture (SOA) and distributed microservices design, the platform utilizes decoupled service boundaries, automated registry discovery, and intelligent load allocation to distribute electricity consumption smoothly across charging networks.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Netflix Eureka",
      "API Gateway",
      "SOA Architecture",
      "Microservices",
    ],
    features: [
      "Decoupled SOA service modules for charging station allocation, user sessions, and power grid analytics.",
      "Service discovery and dynamic registry handled via Netflix Eureka server.",
      "API Gateway routing ingress requests with token authentication and load distribution.",
      "Algorithmic load balancing mitigating high-draw electrical stress during peak charging hours.",
      "Documented and published as an architectural technical paper on LinkedIn.",
    ],
    architecture:
      "Service-Oriented Architecture (SOA) utilizing Spring Cloud Netflix Eureka for service registry, Spring Cloud Gateway for ingress routing, and independent loosely coupled Spring Boot services backed by MySQL.",
    github: "https://github.com/shiridisai07",
    demo: "https://www.linkedin.com/pulse/voltgrid-smart-ev-charging-grid-load-balancing-chinnam-shiridi-sai-9gdnf/",
  },
  {
    id: 4,
    title: "Smart Vision App",
    subtitle: "Edge Detection & Visual Feature Extraction System",
    category: "DTI & Computer Vision",
    status: "Completed (DTI Project)",
    isCompleted: true,
    description:
      "A computer vision and image processing application developed for Design Thinking & Innovation (DTI), implementing algorithmic edge detection filters and boundary contouring.",
    longDescription:
      "Smart Vision was built to tackle visual quality inspection and boundary recognition. Developed under the DTI framework, the application processes digital images through multi-stage edge detection pipelines including Sobel, Laplacian, and Canny algorithms to accurately detect object contours and structural boundaries.",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Image Processing",
      "Edge Detection",
      "DTI Methodology",
    ],
    features: [
      "Multi-stage edge detection pipeline implementing Gaussian noise reduction, intensity gradient calculation, and non-maximum suppression.",
      "Interactive parameter adjustment for hysteresis thresholding to refine edge fidelity.",
      "Contour extraction and boundary coordinate mapping for visual pattern analysis.",
      "Engineered under DTI (Design Thinking & Innovation) methodology for practical visual inspection problems.",
    ],
    architecture:
      "Modular Python processing pipeline leveraging OpenCV core image manipulation matrix operations and NumPy multi-dimensional array calculations.",
    github: "https://github.com/shiridisai07",
    demo: "",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    date: "Verified Credential",
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7498991980778188800/",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7498991980778188800/",
    description:
      "Validates foundational understanding of AWS Cloud infrastructure, core services (EC2, S3, IAM, VPC), security best practices, and billing models.",
    skillsValidated: [
      "AWS Cloud Fundamentals",
      "Cloud Security & Compliance",
      "Core Services (EC2, S3, IAM)",
      "Cloud Architecture Principles",
    ],
  },
  {
    id: 2,
    title: "Oracle AI Foundations Associate",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    category: "Artificial Intelligence & Cloud",
    date: "2025 Associate",
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7473242504381898753/",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7473242504381898753/",
    description:
      "Demonstrates fundamental understanding of Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI concepts on Oracle Cloud.",
    skillsValidated: [
      "AI & Machine Learning Concepts",
      "Generative AI & LLMs",
      "Oracle Cloud AI Services",
      "Data Science Fundamentals",
    ],
  },
  {
    id: 3,
    title: "Google Cloud Engineering Certificate",
    name: "Google Cloud Engineering Certificate",
    issuer: "Google Cloud in collaboration with L4G Solutions",
    category: "Cloud Engineering",
    date: "2026 Program",
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7471114165345099776/",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7471114165345099776/",
    description:
      "Covers GCP fundamentals, virtual machine deployment in Compute Engine, container orchestration with GKE, and IAM security controls.",
    skillsValidated: [
      "Google Cloud Platform (GCP)",
      "Compute Engine & Virtual Machines",
      "Google Kubernetes Engine (GKE)",
      "Cloud Security & IAM",
    ],
  },
  {
    id: 4,
    title: "Deloitte Data Analytics Job Simulation",
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    category: "Data Analytics",
    date: "Completed",
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7471113781851496448/",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7471113781851496448/",
    description:
      "Hands-on practical simulation solving business data analytics problems, designing visualizations, and communicating insights.",
    skillsValidated: [
      "Data Analytics & Insights",
      "Business Problem Solving",
      "Dashboard Interpretation",
      "Technical Communication",
    ],
  },
  {
    id: 5,
    title: "GitHub Copilot Certification",
    name: "GitHub Copilot Certification",
    issuer: "GitHub",
    category: "Developer Tooling & AI",
    date: "Verified",
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7392546373398589440/",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7392546373398589440/",
    description:
      "Validates expertise in AI-assisted software development, pair programming workflows, prompt engineering, and test generation.",
    skillsValidated: [
      "AI-Assisted Development",
      "GitHub Copilot Workflows",
      "Prompt Engineering",
      "Code Optimization",
    ],
  },
  {
    id: 6,
    title: "Linguaskill English Certification",
    name: "Linguaskill English Certification",
    issuer: "Cambridge Assessment English",
    category: "Professional Communication",
    date: "Cambridge Certified",
    credentialUrl: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
    link: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
    description:
      "Standardized multi-level English assessment measuring business and academic communication proficiency, reading, writing, and speaking.",
    skillsValidated: [
      "Professional Communication",
      "Technical Writing",
      "Verbal Fluency",
      "Business English",
    ],
  },
  {
    id: 7,
    title: "NPTEL Certification – Machine Learning",
    name: "NPTEL Certification – Machine Learning",
    issuer: "NPTEL / IIT",
    category: "Machine Learning & Algorithms",
    date: "Academic Elite",
    credentialUrl: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
    link: "https://www.linkedin.com/in/chinnam-shiridi-sai-a57a8931a/",
    description:
      "Rigorous academic curriculum covering supervised and unsupervised algorithms, regression, classification, clustering, and neural networks.",
    skillsValidated: [
      "Machine Learning Algorithms",
      "Statistical Modeling",
      "Model Evaluation",
      "Neural Networks",
    ],
  },
];

// Experience & Learning Journey (removed the 2 redundant/unattractive cards requested by user)
export const experienceLearning = [
  {
    title: "Google Cloud Engineering Program",
    role: "Cloud Engineering Program",
    organization: "Google Cloud in collaboration with L4G Solutions",
    period: "04/2026 – 06/2026",
    badge: "Cloud Computing",
    description:
      "Completed hands-on technical program covering cloud infrastructure fundamentals, Google Compute Engine virtual machines, Google Kubernetes Engine (GKE) clusters, and Cloud IAM security policies.",
    skills: [
      "Google Cloud Platform (GCP)",
      "Compute Engine & VMs",
      "Google Kubernetes Engine (GKE)",
      "Cloud Security & IAM",
    ],
    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7471114165345099776/",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    role: "Undergraduate Student (CGPA: 9.72)",
    organization: "Koneru Lakshmaiah University (KL University)",
    period: "2024 – Present",
    badge: "Academic Degree",
    description:
      "Pursuing core computer science curriculum with distinction. Focused on Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Web Application Architecture.",
    skills: [
      "Data Structures & Algorithms",
      "Java & OOP",
      "DBMS & MySQL",
      "Software Engineering",
    ],
    credentialUrl: "",
  },
  {
    title: "Intermediate Higher Secondary Education",
    role: "12th Grade (Score: 97.1%)",
    organization: "NRI Junior College",
    period: "2022 – 2024",
    badge: "Scholastic Distinction",
    description:
      "Completed higher secondary education in Mathematics, Physics, and Chemistry, graduating with a 97.1% score and strong logical-mathematical foundation.",
    skills: [
      "Mathematics & Logic",
      "Analytical Problem Solving",
      "Physics Foundations",
    ],
    credentialUrl: "",
  },
  {
    title: "Secondary School Education",
    role: "10th Grade (Score: 88.16%)",
    organization: "Srinivasa Public School",
    period: "2021 – 2022",
    badge: "Foundational Academics",
    description:
      "Built early foundational competencies in mathematics, science, and computer science, graduating with distinction.",
    skills: ["Foundational Sciences", "Computer Basics", "Problem Solving"],
    credentialUrl: "",
  },
];

export const technicalHighlights = [
  {
    title: "Consistently High Academic Distinction",
    category: "Academic Standing",
    metric: "9.72 CGPA",
    description:
      "Maintained a verified 9.72 CGPA across the B.Tech Computer Science and Engineering curriculum at KL University, complemented by 97.1% in Intermediate (12th Grade).",
    points: [
      "Strong grasp of core Computer Science principles and mathematical foundations.",
      "Consistently achieved top-percentile grades in programming and algorithms coursework.",
      "Dedicated to technical problem solving and systematic code structure.",
    ],
  },
  {
    title: "Enterprise Backend & Cloud Architectures",
    category: "Systems & Engineering",
    metric: "7 Certifications",
    description:
      "Demonstrated ability in building layered backend systems using Spring Boot, Hibernate, and MySQL, with verified cloud competency across AWS and Google Cloud.",
    points: [
      "Designed RESTful API endpoints with structured HTTP responses and validation.",
      "Implemented microservices concepts including service discovery and API gateways.",
      "Validated cloud deployment concepts across AWS EC2/S3/VPC and GCP Compute Engine/GKE.",
    ],
  },
  {
    title: "Application Lifecycle & Agile Practices",
    category: "Software Methodology",
    metric: "5 Projects",
    description:
      "Practical experience structuring project backlogs, writing modular code, managing version control with Git, and applying MVC architecture.",
    points: [
      "Hands-on with Agile Scrum sprint workflows and backlog grooming in Jira.",
      "Clear separation of concerns between data persistence, service logic, and controllers.",
      "Emphasis on testable API endpoints, error handling, and clean code documentation.",
    ],
  },
];

// Backward-compatible exports
export const skills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ name: s, category: cat.title }))
);
export const skillGroups = skillCategories;
