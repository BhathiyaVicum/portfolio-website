// projects-data.js

const projectsData = [
    // ============================================
    // CLOUD & DEVOPS PROJECTS
    // ============================================
    {
        id: 1,
        title: "EC2 Work Hours Scheduler",
        category: "Cloud & DevOps",
        image: "images/project-imgs/ec2-scheduler.png",
        technologies: ["Terraform", "Lambda", "EventBridge", "EC2", "CloudWatch", "Python"],
        description: "Automated cost-optimization system that starts/stops EC2 instances on a schedule using tag-based filtering and EventBridge.",
        longDescription: "Built an automated cost-optimization system that starts/stops EC2 instances based on a work schedule using tag-based filtering. Provisioned the entire infrastructure with Terraform, implemented Lambda automation logic, and scheduled execution via EventBridge at 8:00 AM and 7:00 PM on weekdays. This significantly reduced idle compute costs by ensuring instances only ran during business hours.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/ec2-workhours-scheduler",
        linkedinLink: null
    },
    {
        id: 2,
        title: "Static Website Hosting",
        category: "Cloud & DevOps",
        image: "images/project-imgs/static-hosting.png",
        technologies: ["Terraform", "AWS S3", "CloudFront", "IAM"],
        description: "Secure static website deployment on AWS using a private S3 bucket with CloudFront CDN and Origin Access Control.",
        longDescription: "Deployed a secure static website on AWS using a private S3 bucket with CloudFront CDN. Provisioned all infrastructure with Terraform, implemented Origin Access Control (OAC) to keep the S3 bucket private while serving content securely through CloudFront, and enabled global edge caching with HTTPS for fast, secure delivery worldwide.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/s3-static-web-host",
        linkedinLink: null
    },
    {
        id: 3,
        title: "CI/CD Pipeline",
        category: "Cloud & DevOps",
        image: "images/project-imgs/cicd.png",
        technologies: ["Jenkins", "Terraform", "Docker", "AWS EC2", "Python", "Git"],
        description: "Automated build and deployment of a Flask app using Jenkins CI/CD pipeline with Docker and Terraform-provisioned AWS infrastructure.",
        longDescription: "Automated the build and deployment of a Flask application using a Jenkins CI/CD pipeline. Containerized the app with Docker, provisioned AWS infrastructure via Terraform, and deployed to EC2. Implemented a declarative Jenkins pipeline with automated Docker Hub push and infrastructure provisioning — enabling consistent, repeatable, one-click deployments.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/Python-app-pipeline",
        linkedinLink: null
    },
    {
        id: 4,
        title: "Dockerized App Deployment on AWS EC2",
        category: "Cloud & DevOps",
        image: "images/project-imgs/dockerized-ec2.png",
        technologies: ["AWS EC2", "Docker", "Nginx", "Node.js", "Let's Encrypt"],
        description: "Full DevOps deployment of a containerized Node.js app on AWS EC2 with Docker, Nginx reverse proxy, and SSL/TLS via Let's Encrypt.",
        longDescription: "Implemented a complete DevOps deployment pipeline for a containerized Node.js application on AWS EC2. The solution includes Docker containerization for a portable, isolated runtime, an Nginx reverse proxy for traffic routing and load balancing, SSL/TLS encryption with Let's Encrypt for HTTPS, custom domain management via Namecheap DNS, and health monitoring endpoints for operational visibility. This end-to-end deployment demonstrates production-grade practices for hosting secure, scalable web applications.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/dockerized-app-deployment",
        linkedinLink: null
    },

    // ============================================
    // WEB APPS
    // ============================================
    {
        id: 5,
        title: "Hospital Management System",
        category: "Web App",
        image: "images/project-imgs/project1.png",
        technologies: ["HTML", "CSS", "PHP", "JS", "MySQL"],
        description: "A complete hospital management system with patient registration, doctor schedules, and appointment booking.",
        longDescription: "This comprehensive system was built for a local clinic to digitize their operations. It includes modules for patient registration, appointment scheduling, electronic health records, billing, and report generation. The system has reduced paperwork by 80% and improved patient wait times significantly.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/hospital-management-system",
        linkedinLink: null
    },
    {
        id: 6,
        title: "ZenticAI - Document Chat Platform",
        category: "Web App",
        image: "images/project-imgs/zentic.png",
        technologies: ["React", "Tailwind CSS", "Supabase", "Node.js", "Express"],
        description: "Built a RAG platform that allows users to upload PDFs and ask questions using AI with vector search and local embeddings.",
        longDescription: "ZenticAI is a production-grade RAG (Retrieval-Augmented Generation) platform that transforms static PDF documents into interactive, AI-powered conversations. Users can upload research papers, lecture notes, or any PDF and ask questions naturally. The system uses local embeddings (384-dim MiniLM) and cosine similarity for semantic vector search, ensuring answers are contextually relevant. Integrated Groq's Llama 3.3 70B for fast, accurate AI responses based only on the user's document. Features include authentication, document management, persistent chat history, and a responsive UI built with React and Tailwind CSS.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/zentic-ai",
        linkedinLink: null
    },
    {
        id: 7,
        title: "Portfolio Website",
        category: "Web App",
        image: "images/project-imgs/project4.png",
        technologies: ["HTML", "CSS", "JS", "Bootstrap"],
        description: "A responsive portfolio website built with HTML, CSS, Bootstrap, and JavaScript animations.",
        longDescription: "This is the very portfolio website you're looking at! Built from scratch, it showcases my projects, skills, and experience. It features a modern design, smooth scrolling, a responsive layout, and interactive elements powered by JavaScript libraries like Swiper.js and AOS. The code is clean and well-structured for easy maintenance.",
        liveLink: "https://your-portfolio-live-link.com",
        githubLink: "https://github.com/BhathiyaVicum/portfolio-website",
        linkedinLink: null
    },
    {
        id: 8,
        title: "Prompt Enhancer",
        category: "Web App",
        image: "images/project-imgs/3.png",
        technologies: ["React", "Tailwind CSS", "Groq API"],
        description: "A modern React web application that enhances raw user prompts into clear, structured, and effective AI-ready prompts using the Groq API.",
        longDescription: "A modern React web application that enhances raw user prompts into clear, structured, and effective AI-ready prompts using the Groq API (LLaMA 3.3 70B).",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/prompt-enhancer",
        linkedinLink: null
    },
    {
        id: 9,
        title: "Music Player App",
        category: "Web App",
        image: "images/project-imgs/4.png",
        technologies: ["Flask", "Python", "HTML", "CSS", "JS", "Bootstrap"],
        description: "A modern Flask web application that provides a sleek interface for playing music.",
        longDescription: "A modern Flask web application that provides a sleek interface for playing music with a responsive design.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/Music-Player-Web-App",
        linkedinLink: null
    },

    // ============================================
    // UI/UX DESIGN
    // ============================================
    {
        id: 10,
        title: "Car Sale UI Design",
        category: "UI/UX Design",
        image: "images/project-imgs/project-2.png",
        technologies: ["Figma", "Photoshop"],
        description: "A sleek and modern UI design for a luxury car sale website created using Figma and Photoshop.",
        longDescription: "This UI/UX design project focused on creating an immersive experience for luxury car buyers. The design includes a dynamic homepage with featured vehicles, detailed car specification pages, a comparison tool, and a streamlined inquiry form. The design system emphasizes high-quality imagery and smooth micro-interactions to convey a premium brand feel.",
        liveLink: "https://www.behance.net/gallery/222841039/Luxury-Car-Sale-Web-Design",
        githubLink: null,
        linkedinLink: null
    },
    {
        id: 11,
        title: "Mr.Barber UI/UX Design",
        category: "UI/UX Design",
        image: "images/project-imgs/1.png",
        technologies: ["Figma"],
        description: "Designed and prototyped a mobile barber appointment booking system using Figma.",
        longDescription: "Designed and prototyped a mobile barber appointment booking system using Figma. Created multiple UI iterations and improved design based on user feedback.",
        liveLink: "https://www.figma.com/proto/hNcQbBj5RIlARdOeppMoJ2/Mr.-Barber-UI?node-id=187-1868&p=f&t=mejyVBcYLJHgU4aa-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=187%3A1868",
        githubLink: null,
        linkedinLink: null
    },
    {
        id: 12,
        title: "ZenticAI UI/UX Design",
        category: "UI/UX Design",
        image: "images/project-imgs/project5.png",
        technologies: ["Figma"],
        description: "Designed and prototyped a modern UI for the ZenticAI application using Figma.",
        longDescription: "Designed and prototyped a modern UI for the ZenticAI application using Figma.",
        liveLink: "https://www.behance.net/gallery/249278925/Case-Study-ZenticAI-Document-Intelligence-Platform",
        githubLink: null,
        linkedinLink: null
    },

    // ============================================
    // DESKTOP APPS
    // ============================================
    {
        id: 13,
        title: "POS System",
        category: "Desktop App",
        image: "images/project-imgs/project3.png",
        technologies: ["Java", "MySQL"],
        description: "A desktop-based Point of Sale system developed in Java with MySQL integration for inventory and billing.",
        longDescription: "A robust POS system designed for small retail businesses. Key features include product management, customer database, sales recording, invoice generation, and detailed sales reports. The Java Swing GUI provides an intuitive interface for cashiers, while the MySQL backend ensures data persistence and reliability.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/pos-system-java",
        linkedinLink: null
    },
    {
        id: 14,
        title: "Sales Analysis System",
        category: "Desktop App",
        image: "images/project-imgs/2.png",
        technologies: ["Java", "MySQL", "Swing"],
        description: "The system automates the manual sales data analysis process, providing management with actionable insights for strategic decision-making.",
        longDescription: "A desktop sales analysis application that automates manual data processing and provides management with actionable insights for strategic decision-making.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/Sales-Data-Analysis-App",
        linkedinLink: null
    },

    // ============================================
    // ML PROJECTS
    // ============================================
    {
        id: 15,
        title: "Heart Disease Prediction System",
        category: "ML",
        image: "images/project-imgs/project6.png",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        description: "Developed a machine learning model to predict the likelihood of heart disease based on patient data.",
        longDescription: "Developed a machine learning model to predict the likelihood of heart disease based on patient data. Implemented various algorithms and evaluated their performance to select the best model.",
        liveLink: null,
        githubLink: "https://github.com/BhathiyaVicum/heart-disease-risk-predictor",
        linkedinLink: null
    },

    // ============================================
    // ANALYTICS
    // ============================================
    {
        id: 16,
        title: "Food Shop Sales Analysis Dashboard",
        category: "Analytics",
        image: "images/project-imgs/project7.jpg",
        technologies: ["Power BI", "DAX"],
        description: "Power BI dashboard suite analyzing food retail sales data with executive KPIs, product performance, sales forecasting, and regional insights.",
        longDescription: "Designed a complete Power BI dashboard solution to analyze sales data from a food retail business. The project includes four interactive dashboards: Executive Dashboard (overall business performance and KPIs), Product Performance Dashboard (revenue, quantity, and product insights), Sales Trends & Forecasting Dashboard (monthly trends and future predictions), and Regional Sales Analysis Dashboard (sales distribution across regions). Key insights included identifying top-selling and low-performing products, analyzing customer buying patterns and sales trends, comparing regional performance for better decision-making, and exploring relationships between price and sales volume.",
        liveLink: null,
        githubLink: null,
        linkedinLink: "https://www.linkedin.com/posts/bhathiya-h-b4749b332_powerbi-dataanalytics-businessintelligence-ugcPost-7446803990798901248-BdY8/"
    }
]