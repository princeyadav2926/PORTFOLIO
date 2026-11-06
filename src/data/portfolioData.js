export const portfolioData = {
  personal: {
    name: "Prince Kumar",
    role: "B.Tech CSE Student | Aspiring Full Stack Developer",
    location: "India",
    tagline: "Building Digital Experiences Through Code, Creativity and Problem Solving.",
    githubUrl: "https://github.com/princeyadav2926",
    linkedinUrl: "https://www.linkedin.com/in/prince-kumar-8897a8368/",
    email: "prince.cse.dev@gmail.com", // Editable
    openToWork: true,
    statusText: "Available for Internships & Projects",
  },

  intro: {
    greeting: "Hi, I'm Prince Kumar.",
    bio: [
      "I am a Computer Science Engineering student passionate about Full Stack Development, Data Structures and Algorithms, programming and emerging technologies.",
      "I enjoy developing practical applications, solving programming problems and exploring innovative ideas.",
      "My goal is to become a skilled software developer and build impactful real-world solutions."
    ],
    aboutMeFull: "I am Prince Kumar, a B.Tech Computer Science Engineering student passionate about technology and software development. My learning journey includes programming with C++, Java and Python, Data Structures and Algorithms, and Full Stack Web Development. I enjoy building projects that solve real-world problems and continuously improving my technical knowledge. I am particularly interested in software engineering, web development, AI applications and problem solving."
  },

  hero: {
    heading: "Hi, I'm Prince Kumar",
    animatedRoles: [
      "Full Stack Developer",
      "C++ Programmer",
      "Java Developer",
      "DSA Enthusiast",
      "Software Developer",
      "Technology Explorer"
    ],
    description: "I transform ideas into functional digital experiences using programming, creativity and modern technologies.",
    buttons: [
      { label: "Explore My Projects", href: "#projects", primary: true },
      { label: "Download Resume", action: "resume", secondary: true },
      { label: "Let's Connect", href: "#contact", outline: true }
    ]
  },

  skills: {
    programmingLanguages: [
      { name: "C++", category: "Core", icon: "Code", highlight: "Problem Solving & DSA" },
      { name: "Java", category: "Core", icon: "Coffee", highlight: "OOP & Enterprise Logic" },
      { name: "Python", category: "Scripting / AI", icon: "Terminal", highlight: "Automation & Data" },
      { name: "JavaScript", category: "Web Core", icon: "FileCode", highlight: "ES6+ & Async/Await" },
    ],
    fullStack: {
      frontend: [
        { name: "React.js", desc: "Component Architecture & Hooks", level: "Core Library" },
        { name: "Tailwind CSS", desc: "Utility-First Responsive UI", level: "Modern Styling" },
        { name: "JavaScript (ES6+)", desc: "DOM, Closures & Event Loop", level: "Scripting Core" },
        { name: "HTML5", desc: "Semantic Web Structure", level: "Standard" },
        { name: "CSS3", desc: "Flexbox, Grid & Keyframe Animations", level: "Styling" },
      ],
      backend: [
        { name: "Node.js", desc: "Event-driven runtime environment", level: "Runtime" },
        { name: "Express.js", desc: "Modular routing & middleware", level: "Framework" },
        { name: "REST APIs", desc: "Resource modeling, HTTP methods, JSON", level: "Architecture" },
      ],
      database: [
        { name: "MongoDB", desc: "NoSQL document store & aggregation", level: "NoSQL" },
        { name: "MySQL", desc: "Relational schemas & SQL queries", level: "RDBMS" },
        { name: "SQLite", desc: "Lightweight embedded storage", level: "Embedded SQL" },
      ]
    },
    dsaAndCS: [
      { name: "Arrays", focus: "Contiguous Memory & Two Pointers" },
      { name: "Strings", focus: "Pattern Matching & Anagrams" },
      { name: "Linked Lists", focus: "Singly, Doubly & Fast-Slow Pointers" },
      { name: "Stack", focus: "LIFO, Monotonic Stack & Expression Parsing" },
      { name: "Queue", focus: "FIFO, Circular & Double-Ended Queues" },
      { name: "Trees", focus: "Binary Trees, BST & Traversals (DFS/BFS)" },
      { name: "Searching", focus: "Binary Search & Linear Search" },
      { name: "Sorting", focus: "Merge Sort, Quick Sort & In-Place Sorts" },
      { name: "Recursion", focus: "Base Cases & Call Stack Operations" },
      { name: "Object-Oriented Programming", focus: "Encapsulation, Inheritance, Polymorphism" },
      { name: "Problem Solving", focus: "Time & Space Complexity Optimization" },
      { name: "DBMS", focus: "ACID Properties, Normalization & Indexing" },
    ],
    developerTools: [
      { name: "Git", desc: "Distributed version control system", type: "VCS" },
      { name: "GitHub", desc: "Collaboration & open-source hosting", type: "Platform" },
      { name: "VS Code", desc: "Primary code editing environment", type: "IDE" },
      { name: "Google Antigravity", desc: "Advanced agentic development environment", type: "Agentic IDE" },
      { name: "Vercel", desc: "Modern frontend deployment & serverless", type: "Cloud Host" },
    ],
    aiAndEmerging: [
      { name: "Generative AI", desc: "LLM integration, multimodality & reasoning flows" },
      { name: "Prompt Engineering", desc: "Structured prompt design, few-shot prompting & system prompts" },
      { name: "AI Tools", desc: "Development copilot workflows & productivity augmentation" },
    ]
  },

  projects: [
    {
      id: "opportunity-radar",
      title: "Opportunity Radar",
      category: "AI | Full Stack Development | Career Intelligence",
      tag: "Flagship Project",
      status: "Active Development",
      description: "Opportunity Radar is an intelligent student opportunity discovery platform designed to help students discover, understand and track relevant opportunities such as internships, hackathons, scholarships, and fellowships.",
      coreConcept: [
        "Discover verified opportunities across multiple tech ecosystems",
        "Understand eligibility criteria clearly before applying",
        "Identify skill gaps needed to succeed in target programs",
        "Track application deadlines with reminders & milestones"
      ],
      features: [
        { title: "Opportunity Discovery", desc: "Aggregated feed of verified internships, hackathons & scholarships." },
        { title: "Smart Recommendations", desc: "Matching opportunities tailored to student skill profiles." },
        { title: "Eligibility Analysis", desc: "Automated breakdown of criteria, batch eligibility & prerequisite checks." },
        { title: "Deadline Tracking", desc: "Visual timeline and milestone reminders to never miss a due date." },
        { title: "Student Dashboard", desc: "Personalized portal for saved listings, application progress & notes." }
      ],
      targetOpportunities: [
        "Internships",
        "Hackathons",
        "Scholarships",
        "Competitions",
        "Workshops",
        "Fellowships"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com/princeyadav2926",
      liveUrl: null, // Keep missing info editable/transparent
      highlights: [
        "Centralized student career intelligence",
        "Clean responsive student interface",
        "Modular REST backend architecture"
      ]
    },
    {
      id: "terraforge",
      title: "TerraForge",
      category: "AI | Environmental Technology",
      tag: "Environmental AI",
      status: "System Architecture & Research",
      description: "Air Pollution Weather Coupled Forecasting System focused on Delhi NCR, providing predictive environmental insights and regional atmospheric risk modeling.",
      coreConcept: [
        "Couple weather patterns with particulate matter dispersion dynamics",
        "High-density monitoring simulation for Delhi NCR microclimates",
        "Actionable environmental alerts for citizen safety"
      ],
      features: [
        { title: "Air Quality Dashboard", desc: "Real-time AQI, PM2.5, PM10 and atmospheric pollutant metrics." },
        { title: "72-Hour Forecast", desc: "Predictive trajectory modeling air quality shifts over 3 days." },
        { title: "Weather & Pollution Analysis", desc: "Correlation studies linking wind velocity, humidity and smog." },
        { title: "Regional Risk Map", desc: "Interactive heatmaps of high-exposure zones in Delhi NCR." },
        { title: "Environmental Insights", desc: "Advisories and health cautions based on forecast severity." }
      ],
      technologies: ["Python", "Data Modeling", "React.js", "Environmental APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/princeyadav2926",
      liveUrl: null,
      highlights: [
        "Focused on Delhi NCR air quality challenges",
        "Coupled weather-smog prediction architecture",
        "Interactive geospatial risk visualization"
      ]
    },
    {
      id: "smart-shopping",
      title: "Smart Shopping",
      category: "Full Stack Web Development",
      tag: "Full Stack App",
      status: "Functional Prototype",
      description: "A smart shopping platform engineered to provide an improved product discovery, filtering and responsive checkout experience.",
      coreConcept: [
        "Seamless catalog navigation with zero lag filtering",
        "Persistent cart state and order calculation",
        "Intuitive product discovery experience"
      ],
      features: [
        { title: "Product Catalog", desc: "Categorized listings with price, specs and availability indicators." },
        { title: "Dynamic Search & Filters", desc: "Instant client-side multi-parameter filtering by price & category." },
        { title: "Cart Management", desc: "Live cart updates, item counters and order total computation." },
        { title: "Responsive Experience", desc: "Mobile-first UI crafted for smooth mobile and desktop browsing." }
      ],
      technologies: ["React.js", "JavaScript", "Node.js", "CSS3 / Tailwind", "REST APIs"],
      githubUrl: "https://github.com/princeyadav2926",
      liveUrl: null,
      highlights: [
        "Real implemented features showcase",
        "Modular component hierarchy",
        "Fast state updates"
      ]
    },
    {
      id: "dsa-programming",
      title: "DSA and Programming Practice",
      category: "Programming | Problem Solving",
      tag: "Algorithms & Core",
      status: "Continuous Practice",
      description: "A structured collection of programming practice, algorithmic problems and data structure implementations using C++ and Java.",
      coreConcept: [
        "Solidifying fundamental Computer Science principles",
        "Iterative algorithmic optimization for runtime & memory",
        "Clean object-oriented and modular code standards"
      ],
      features: [
        { title: "Data Structures", desc: "Hand-crafted implementations of lists, stacks, queues and binary trees." },
        { title: "Algorithmic Paradigms", desc: "Recursion, divide-and-conquer, searching and sorting techniques." },
        { title: "Object-Oriented Design", desc: "Classes, abstraction, inheritance and encapsulation in C++ and Java." },
        { title: "Problem Solving", focus: "Competitive coding problem solutions with step-by-step logic." }
      ],
      topics: [
        "Arrays",
        "Linked Lists",
        "Stack",
        "Queue",
        "Searching",
        "Sorting",
        "Recursion",
        "OOP",
        "Problem Solving"
      ],
      technologies: ["C++", "Java", "Data Structures", "Algorithms", "Git"],
      githubUrl: "https://github.com/princeyadav2926",
      liveUrl: null,
      highlights: [
        "C++ and Java implementations",
        "Focus on fundamental time-space efficiency",
        "Tracked on GitHub"
      ]
    }
  ],

  fullStackJourney: {
    title: "Full Stack Development Journey",
    subtitle: "From clean client-side interfaces to resilient server architecture and distributed version control.",
    pillars: [
      {
        id: "frontend",
        title: "Frontend Development",
        role: "Client Experience & Interactivity",
        tools: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
        points: [
          "Building reusable, declarative component architectures in React",
          "Responsive, mobile-first design using Tailwind CSS utility system",
          "Modern asynchronous JavaScript handling data streams and UI state"
        ],
        icon: "Layout"
      },
      {
        id: "backend",
        title: "Backend Development",
        role: "API Engine & Business Logic",
        tools: ["Node.js", "Express.js", "REST APIs"],
        points: [
          "Designing RESTful endpoints with consistent JSON contracts",
          "Configuring middleware for authentication, parsing and error handling",
          "Asynchronous event-driven execution for responsive server throughput"
        ],
        icon: "Server"
      },
      {
        id: "database",
        title: "Database Management",
        role: "Data Persistence & Integrity",
        tools: ["MongoDB", "MySQL", "SQLite"],
        points: [
          "Schema design for both relational tables (MySQL) and flexible documents (MongoDB)",
          "Writing structured queries and aggregations for efficient retrieval",
          "Understanding transactional integrity (ACID) and normalization"
        ],
        icon: "Database"
      },
      {
        id: "workflow",
        title: "Developer Workflow & Tooling",
        role: "Productivity & Deployment Pipeline",
        tools: ["Git", "GitHub", "VS Code", "Vercel"],
        points: [
          "Git branch management, commits and pull request workflows on GitHub",
          "Fast iteration and debugging within Visual Studio Code",
          "Continuous automated frontend deployment on Vercel"
        ],
        icon: "Workflow"
      }
    ]
  },

  dsaSection: {
    heading: "Data Structures & Algorithms",
    description: "I continuously practice Data Structures and Algorithms to strengthen my logical thinking and problem-solving skills.",
    cards: [
      { name: "Arrays", complexity: "O(1) Access | O(n) Search", focus: "Prefix sums, two-pointers, sliding window and boundary traversals." },
      { name: "Strings", complexity: "O(n) Operations", focus: "Character frequency hashing, palindrome checks, anagrams and string builders." },
      { name: "Linked Lists", complexity: "O(1) Insertion | O(n) Search", focus: "Reversal, cycle detection with Floyd's algorithm, merging sorted lists." },
      { name: "Stack", complexity: "O(1) Push/Pop", focus: "LIFO ordering, valid parentheses verification, monotonic stack variations." },
      { name: "Queue", complexity: "O(1) Enqueue/Dequeue", focus: "FIFO processing, BFS level-order traversals, circular buffer mechanisms." },
      { name: "Trees", complexity: "O(log n) to O(n)", focus: "Binary trees, BST search/insert, in-order/pre-order/post-order traversals." },
      { name: "Searching", complexity: "O(log n) Binary Search", focus: "Divide-and-conquer on sorted spaces, lower/upper bounds, peak finding." },
      { name: "Sorting", complexity: "O(n log n) Optimal", focus: "Merge sort, Quick sort partitioning, stability and memory trade-offs." },
      { name: "Recursion", complexity: "Stack Dependent", focus: "Formulating base cases, backtracking state restoration, recursion trees." },
      { name: "OOP", complexity: "System Design Principle", focus: "Encapsulation, inheritance hierarchies, runtime polymorphism, modularity." }
    ],
    githubLink: "https://github.com/princeyadav2926"
  },

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    status: "Currently Pursuing (Undergraduate)",
    // Editable college placeholder as per requirement
    institution: "Engineering College / University, India",
    isEditableNotice: "College name and academic milestones can be customized in profile settings.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++ / Java)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Computer Networks",
      "Software Engineering & Web Technologies"
    ]
  },

  certifications: [
    {
      id: "cert-prompt-eng",
      title: "Prompt Engineering",
      issuer: "AI / Technology Program",
      focus: "Contextual framing, zero-shot/few-shot techniques, system prompt design and LLM orchestration.",
      badge: "AI & LLM"
    },
    {
      id: "cert-chatgpt-ai",
      title: "ChatGPT and AI Tools Workshop",
      issuer: "AI Skills Workshop",
      focus: "Productivity augmentation, automated code workflows, and hands-on generative AI integration.",
      badge: "Applied AI"
    },
    {
      id: "cert-data-analytics",
      title: "Data Analytics with Generative AI",
      issuer: "Generative AI Program",
      focus: "Synthesizing datasets, automated reporting patterns, and AI-accelerated exploratory data analysis.",
      badge: "Data & AI"
    },
    {
      id: "cert-networking",
      title: "Professional Networking for Career Growth",
      issuer: "Professional Development Initiative",
      focus: "Strategic industry outreach, technical portfolio presentation and collaborative developer networking.",
      badge: "Career Growth"
    }
  ]
};

