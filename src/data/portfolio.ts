import { PersonalInfo, Project, Experience, Education, SkillCategory } from '../types';

export const personalInfo: PersonalInfo = {
  name: "R.S. MIDHUN",
  title: "Python Full-Stack Developer",
  targetRole: "Junior Full-Stack Developer | Python Full-Stack Developer",
  email: "midhunkrishnnaa@gmail.com",
  phone: "+91 7358990104",
  location: "Ramanparambu, Thuckalay, Kanyakumari District, Tamil Nadu",
  github: "https://github.com/itsmidhun-r-s",
  githubUsername: "itsmidhun-r-s",
  publicRepos: 10,
  liveAppsCount: 6,
  summary:
    "Python Full-Stack Developer and B.E. Computer Science and Engineering student with hands-on experience building responsive web applications with Python, Django, React.js, JavaScript, REST APIs, MySQL and MongoDB. Completed a 6-month Full Stack Developer Internship in Python at Schoenen DIS LLP. Independently designed and deployed 6 live web applications and maintains 10 public repositories on GitHub. Seeking a Junior Full-Stack Developer or Python Full-Stack Developer role.",
  languages: ["Tamil (Native / Fluent)", "English (Professional Working)"],
  interests: [
    "Web Development",
    "Exploring New Technologies",
    "Logical Puzzles",
    "Chess",
    "Badminton",
    "Fitness",
    "Cricket"
  ]
};

export const projects: Project[] = [
  {
    id: "ever-green-cabs",
    title: "Ever Green Cabs",
    subtitle: "Taxi Booking Website for Cab Fleet",
    category: "Client & Business",
    featured: true,
    highlightBadge: "Live Client Website",
    liveUrl: "https://evergreencabs.co.in",
    description:
      "Designed and developed a responsive taxi booking website for a Kanyakumari-based cab service. Created a user-friendly interface enabling travelers to browse services and book rides easily.",
    problemSolved:
      "Local travelers and tourists needed a seamless, transparent way to book airport transfers, outstation cabs, and holiday tour packages in and around Kanyakumari without hidden fares.",
    technologies: ["React.js", "JavaScript", "Responsive Web Design", "HTML5", "CSS3", "Bootstrap"],
    keyFeatures: [
      "Quick-booking form with instant ride inquiries",
      "Comprehensive service listings: airport transfers, custom tour packages, outstation trips",
      "Transparent pricing structure with vehicle category details",
      "Responsive photo gallery showcasing the fleet and travel destinations"
    ],
    metrics: "Active live production client website"
  },
  {
    id: "nakshatra-travels",
    title: "Nakshatra Coimbatore Travels",
    subtitle: "24-Hour Travel Agency with WhatsApp Booking",
    category: "Client & Business",
    featured: true,
    highlightBadge: "Live Business Website",
    liveUrl: "https://nakshatracoimbatoretravels.com",
    description:
      "Created a 24-hour travel agency website featuring a WhatsApp-first booking workflow where enquiry forms automatically prefill WhatsApp messages for instant quotes and bookings.",
    problemSolved:
      "High enquiry drop-off was reduced by integrating direct WhatsApp routing, allowing travelers to receive instantaneous personalized quotes for South Indian hill station tours.",
    technologies: ["React.js", "JavaScript", "WhatsApp API Integration", "CSS3", "HTML5", "Bootstrap"],
    keyFeatures: [
      "WhatsApp-first booking mechanism prefilling customer details directly into chat",
      "Custom tour package cards: Ooty, Kodaikanal, Tirupati, Madurai, Rameswaram, Valparai",
      "Authentic traveler testimonials and comprehensive FAQ accordion",
      "Streamlined 3-step booking guidance process"
    ],
    metrics: "24/7 instant WhatsApp lead capture"
  },
  {
    id: "data-extract-pro",
    title: "DataExtractPRO",
    subtitle: "AI-Powered Excel Data Extraction Tool",
    category: "AI-Powered",
    featured: true,
    highlightBadge: "AI & Data Tool",
    liveUrl: "https://webscrap-ui.vercel.app",
    description:
      "Built a web application that ingests .xlsx and .xls spreadsheets and intelligently extracts structured contact data including names, phone numbers, email addresses, cities, and state codes.",
    problemSolved:
      "Manual contact collation from messy, large spreadsheets was tedious and error-prone. This tool automates extraction, deduplication, and domain-based filtration.",
    technologies: ["Python", "REST APIs", "React.js", "Data Extraction", "Vercel"],
    keyFeatures: [
      "Multi-file .xlsx/.xls upload with intelligent duplicate-skip logic",
      "Intelligent extraction of contact data: names, phone numbers, emails, cities, state codes",
      "Email domain filtering (Gmail, Yahoo, Hotmail, Outlook)",
      "Location and state code filtering with complete upload history management"
    ],
    metrics: "High-speed automated parsing & zero-duplicate exports"
  },
  {
    id: "talent-ats",
    title: "TalentATS",
    subtitle: "AI Resume Analyzer & Candidate Matching Platform",
    category: "AI-Powered",
    featured: true,
    highlightBadge: "Featured AI Platform",
    liveUrl: "https://resume-analyzer-mauve-beta.vercel.app",
    description:
      "Developed a full ATS platform that parses PDF and DOCX resumes, extracts key skills, experience, and education, and scores candidates against job requirements using weighted matching algorithms.",
    problemSolved:
      "Recruiters struggle with manual screening of hundreds of applicants. TalentATS automates resume parsing and candidate ranking with objective weighted compatibility scores.",
    technologies: ["Python", "Django / REST APIs", "React.js", "JWT Authentication", "Glassmorphism UI", "Vercel"],
    keyFeatures: [
      "PDF and DOCX document parser for skills, education, and experience extraction",
      "Weighted algorithm matching candidates against target job descriptions",
      "Auto-ranking engine with smart visual recommendation badges",
      "Recruiter analytics dashboard with JWT authentication and light/dark mode glassmorphism UI"
    ],
    metrics: "Automated candidate scoring with JWT secure access"
  },
  {
    id: "pastry-hut",
    title: "Pastry Hut",
    subtitle: "Online Pastry Ordering Application",
    category: "Personal / Full-Stack",
    featured: false,
    highlightBadge: "Live Storefront",
    liveUrl: "https://pastryhut.netlify.app",
    description:
      "Developed a responsive online pastry ordering web application with a delightful, user-focused interface. Built frontend shopping functionality with modern React and Bootstrap.",
    problemSolved:
      "Provides customers an enjoyable, smooth browsing experience to select artisan pastries, review pricing, and place bakery orders seamlessly on any device.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Netlify"],
    keyFeatures: [
      "Interactive pastry catalog with visual card previews and pricing",
      "User-focused responsive navigation and cart management",
      "Clean modern styling with responsive layouts across mobile, tablet, and desktop",
      "Fast static deployment on Netlify"
    ],
    metrics: "Deployed and active on Netlify"
  },
  {
    id: "xtaken",
    title: "Xtaken",
    subtitle: "Secure Document Management Service",
    category: "Personal / Full-Stack",
    featured: false,
    highlightBadge: "Full-Stack System",
    liveUrl: "https://xtaken.in",
    description:
      "Contributed to both frontend and backend development for a secure document management web platform utilizing React.js, Bootstrap, Django, and dual-database architecture.",
    problemSolved:
      "Built a unified platform for organizations to safely store, index, retrieve, and manage digital records and documents with structured metadata queries.",
    technologies: ["React.js", "Django", "Python", "Bootstrap", "SQL", "MongoDB"],
    keyFeatures: [
      "Frontend UI built with React.js and Bootstrap for document viewing and uploads",
      "Django backend handling business logic and RESTful endpoints",
      "Dual database storage operations utilizing SQL for relational records and MongoDB for unstructured data",
      "Document metadata management and search capabilities"
    ],
    metrics: "Dual-database storage architecture"
  }
];

export const experiences: Experience[] = [
  {
    company: "Schoenen DIS LLP",
    role: "Full Stack Developer Intern — Python",
    duration: "15 Apr 2026 – 16 Oct 2026",
    type: "6-Month Internship",
    highlight: true,
    responsibilities: [
      "Worked with Python, Django, HTML, CSS, JavaScript and REST APIs across frontend and backend development.",
      "Gained practical experience in MySQL, API integration, Git and GitHub, debugging, testing and deployment.",
      "Independently designed, developed and deployed 4 live web applications during the internship.",
      "Collaborated on database architecture, schema migrations, and secure API endpoints for enterprise workflows."
    ],
    technologies: ["Python", "Django", "React.js", "JavaScript", "REST APIs", "MySQL", "Git", "GitHub"],
    contributions: [
      "4 Live Web Applications deployed independently during the internship tenure",
      "Implemented robust RESTful API endpoints and integrated relational databases with Django ORM",
      "Ensured thorough debugging, automated testing, and version-controlled Git deployment workflows"
    ]
  },
  {
    company: "Adventure Technology Solution",
    role: "Web Development Intern",
    duration: "18 Feb 2025 – 24 Feb 2025",
    type: "Internship",
    highlight: false,
    responsibilities: [
      "Worked on web development concepts and UI implementation.",
      "Engaged in frontend development and interactive web design practices.",
      "Participated in code reviews and web standards compliance."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    contributions: [
      "Created structured responsive components and enhanced layout compatibility across browsers"
    ]
  },
  {
    company: "M Squared Software and Services",
    role: "Web Development Intern",
    duration: "04 Mar 2024 – 09 Mar 2024",
    type: "Internship",
    highlight: false,
    responsibilities: [
      "Gained hands-on foundational web development experience.",
      "Explored software lifecycle workflows, web scripting, and interface styling.",
      "Assisted in testing web page layouts and user interaction flows."
    ],
    technologies: ["Web Development", "HTML", "CSS", "Testing"],
    contributions: [
      "Assisted in building accessible web interfaces and verifying layout integrity"
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "Amrita College of Engineering and Technology",
    degree: "B.E. Computer Science and Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 7.2 / 10",
    details: "Focusing on core computer science foundations, algorithms, data structures, software engineering, and database management."
  },
  {
    institution: "St. Mary Goretty Higher Secondary School",
    degree: "Higher Secondary (Class XII)",
    year: "2022",
    grade: "60.00%",
    details: "Completed Higher Secondary education with focus on science and mathematics."
  },
  {
    institution: "St. Mary Goretty Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC - Class X)",
    year: "2020",
    grade: "77.80%",
    details: "Completed Secondary School Leaving Certificate with strong academic foundation."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", levelDescription: "Core backend & scripting language used for Django APIs, data parsing, and AI matching" },
      { name: "JavaScript", levelDescription: "Modern ES6+ frontend scripting, DOM manipulation, asynchronous REST calls" },
      { name: "HTML5", levelDescription: "Semantic markup, accessibility compliance, SEO-ready structure" },
      { name: "CSS3", levelDescription: "Custom styling, animations, responsive grid/flexbox, glassmorphism" },
      { name: "SQL", levelDescription: "Relational queries, database indexing, schema design, and CRUD operations" }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", levelDescription: "Component-driven development, custom hooks, state management, SPA architecture" },
      { name: "JavaScript (ES6+)", levelDescription: "Promises, async/await, modular code organization, DOM APIs" },
      { name: "Bootstrap", levelDescription: "Rapid responsive grid prototyping and UI component integration" },
      { name: "Responsive Web Design", levelDescription: "Fluid layouts optimized from 320px mobile screens to large 4K displays" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Python", levelDescription: "Backend architecture, object-oriented design, data manipulation" },
      { name: "Django", levelDescription: "Robust MVC framework, Django ORM, authentication, and admin panel" },
      { name: "REST API Development", levelDescription: "Designing, building, testing, and securing RESTful JSON endpoints" },
      { name: "Node.js", levelDescription: "Server-side runtime environment for fast network applications" },
      { name: "Express.js", levelDescription: "Minimalist web framework for routing and middleware architecture" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", levelDescription: "Relational table architecture, foreign keys, query optimization" },
      { name: "MongoDB", levelDescription: "NoSQL document storage, JSON schemas, unstructured collection queries" },
      { name: "PostgreSQL", levelDescription: "Advanced open-source relational database management" },
      { name: "SQL", levelDescription: "Structured queries, joins, aggregations, data integrity constraints" },
      { name: "Supabase", levelDescription: "Modern backend-as-a-service database, auth, and real-time APIs" }
    ]
  },
  {
    title: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git", levelDescription: "Distributed version control, branching workflows, commit hygiene" },
      { name: "GitHub", levelDescription: "Code repository hosting, remote collaboration, project tracking" },
      { name: "Vercel", levelDescription: "Cloud platform for fast deployment of modern frontend & serverless apps" },
      { name: "Netlify", levelDescription: "Continuous deployment and hosting for modern web projects" },
      { name: "XAMPP", levelDescription: "Local development environment for Apache, MySQL, and PHP stacks" }
    ]
  },
  {
    title: "Core Development Practices",
    icon: "Cpu",
    skills: [
      { name: "API Integration", levelDescription: "Consuming third-party and internal REST services seamlessly" },
      { name: "CRUD Operations", levelDescription: "Create, Read, Update, Delete data pipelines across diverse databases" },
      { name: "Database Management", levelDescription: "Data normalization, schema migrations, and backup strategies" },
      { name: "Debugging & Testing", levelDescription: "Systematic root-cause analysis, unit testing, and issue resolution" },
      { name: "Deployment", levelDescription: "Configuring production builds, environment variables, and live hosting" }
    ]
  }
];

export const quickStats = [
  { value: "6", label: "Live Applications", detail: "Deployed & actively running" },
  { value: "6-Mo", label: "Internship", detail: "At Schoenen DIS LLP (Python)" },
  { value: "10", label: "Public Repos", detail: "Maintained on GitHub" },
  { value: "100%", label: "Resume-Backed", detail: "Zero fabricated claims" }
];
