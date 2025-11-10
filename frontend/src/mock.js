// Mock data for developer portfolio

export const portfolioData = {
    hero: {
        name: "Gowtham",
        title: "Full Stack Developer & AI Agent Automation Engineer",
        tagline: "Building intelligent, automated, and scalable digital solutions",
        description: "Driven by a passion for crafting seamless user experiences and developing robust backend systems powered by AI automation and full-stack technologies.",
        ctaButtons: [
            { text: "View Projects", link: "#projects", primary: true },
            { text: "Contact Me", link: "#contact", primary: false }
        ]
    },
    about: {
        title: "About Me",
        bio: "I'm Gowtham V, a 3rd-year B.Tech student in Artificial Intelligence and Data Science at K.S. Rangasamy College of Technology. As a passionate Full Stack Developer and AI Agent Automation Engineer, I focus on building intelligent, efficient, and user-centric digital solutions. I specialize in creating modern web applications using React, Node.js, and cloud technologies, while integrating AI-driven automation to enhance productivity and scalability. Beyond academics and coding, I explore emerging AI tools, contribute to tech projects, and experiment with automation workflows that simplify everyday digital tasks.",
        image: "/Profile.jpg",
        highlights: [
            { label: "Internship Experience", value: "1 Month" },
            { label: "Projects Completed", value: "5" },
            { label: "AI Automations Built", value: "10" }
        ]
    },
    skills: {
        title: "Skills & Technologies",
        categories: [{
                name: "Frontend",
                technologies: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"]
            },
            {
                name: "Backend",
                technologies: ["Node.js", "Python", "Express.js", "MongoDB", "Firebase"]
            },
            {
                name: "AI & Automation",
                technologies: ["OpenAI API", "n8n Workflow Automation", "Hugging Face", "LangChain"]
            },
            {
                name: "DevOps & Tools",
                technologies: ["Docker", "Git", "GitHub", "Vercel", "Netlify"]
            },
        ]
    },
    projects: [{
            id: 1,
            title: "Quick Rent – Car Rental Web Application",
            description: "A full-stack web application for seamless car rental management. Users can browse available cars, compare prices, make secure bookings, and manage rentals with real-time availability updates. The admin panel enables vehicle management, booking approvals, and customer tracking.",
            image: "/quickrent.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Express.js"],
            liveLink: "https://quickrentcar-booking.web.app/",
            githubLink: "https://github.com/gowtham-v-data/QuickRentCar-Booking"
        },
        {
            id: 2,
            title: "Blossom Bay – Flower E-Commerce Website",
            description: "A beautifully designed flower-themed e-commerce website where users can browse, search, and purchase a variety of flowers and gifts. The platform includes dynamic product listings, category filters, a shopping cart, and a smooth checkout experience — all built with an elegant and responsive UI.",
            image: "/flowershop2.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "php"],
            liveLink: "http://localhost:8080/flower/index2.php",
            githubLink: "https://github.com/gowtham-v-data/Flower-"
        }, {
            id: 3,
            title: "Shop Vibe – Online Shopping Platform",
            description: "An interactive and responsive e-commerce website designed for a modern shopping experience. Shop Vibe enables users to explore various product categories, add items to their cart, and proceed to a secure checkout. The website also features product search, discount offers, and a clean, mobile-friendly design.",
            image: "/shopvibe.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap",
                "Firebase Auth"
            ],
            liveLink: "https://onyx-incentive-465002-a8.web.app/",
            githubLink: "#"
        },
        {
            id: 4,
            title: "AI Marketing Team – Automated Content & Workflow System",
            description: "An advanced AI-powered marketing automation system built using n8n and integrated APIs. The system generates social media posts, designs visuals, schedules content across platforms, and automatically sends performance reports to the manager. It uses AI agents for text and image generation, Google Sheets for data storage, and Gmail for automated communication — creating a fully autonomous marketing workflow.",
            image: "/Marketingteam.jpg",
            technologies: ["n8n", "OpenAI API", "Hugging Face", "Google Sheets API", "Gmail API", "Twitter API", "LinkedIn API"],
            liveLink: "#",
            githubLink: "https://github.com/gowtham-v-data/Marketing-Team-Automation/tree/main"
        }, {
            id: 5,
            title: "CRM Automation System – Smart Client Management Workflow",
            description: "A powerful AI-driven CRM automation system built using n8n, OpenAI API, and Google services to streamline client relationship management. The system automatically tracks leads, sends personalized follow-up emails, manages task reminders, and generates summary reports. It integrates data from multiple sources such as Google Sheets and Gmail, providing real-time insights and reducing manual work for sales and marketing teams.",
            image: "/CRM.jpg",
            technologies: ["n8n", "OpenAI API", "Google Sheets API", "Gmail API"],
            liveLink: "#",
            githubLink: "https://github.com/gowtham-v-data/CRM-Automation/tree/main"
        },
        {
            id: 6,
            title: "Telegram Student Details Auto-Updater",
            description: "An intelligent Telegram bot that automatically updates student details into Excel or Google Sheets using automation tools like n8n or Python. It reduces manual data entry and ensures real-time synchronization of student records.",
            image: "/Telegramupdate.jpg", // optional image file name
            technologies: ["Telegram Bot API", "n8n", "Google Sheets API", "Node.js"],
            liveLink: "#", // replace with your live demo or bot link
            githubLink: "https://github.com/yourusername/telegram-student-updater" // replace with your repo link
        }

    ],
    experience: [{
            id: 1,
            company: "Google Virtual Machine Learning Internship (Eduskills)",
            position: "Machine Learning Intern",
            duration: "2025 - Completed",
            description: "Completed a certified virtual internship under Google and Eduskills focusing on machine learning fundamentals, data preprocessing, and model implementation.",
            achievements: [
                "Gained hands-on experience with supervised and unsupervised ML algorithms",
                "Implemented predictive models using Python and scikit-learn",
                "Completed multiple real-world assignments under Google mentorship"
            ]
        },
        {
            id: 2,
            company: "Imaginative Technology",
            position: "Full Stack Developer Intern",
            duration: "2025 - 1 Month (Successfully Completed)",
            description: "Worked on developing responsive web applications using modern full-stack technologies, focusing on front-end development and backend integration.",
            achievements: [
                "Designed and implemented interactive UI using React and Tailwind CSS",
                "Integrated APIs with Node.js and Express for dynamic functionality",
                "Enhanced website responsiveness and user experience"
            ]
        },
        {
            id: 3,
            company: "Academic Projects – K.S. Rangasamy College of Technology",
            position: "AI & Data Science Student Developer",
            duration: "2024 - Present",
            description: "Engaged in multiple academic and practical projects related to AI, data science, and automation as part of B.Tech in Artificial Intelligence and Data Science.",
            achievements: [
                "Developed 'Dochub' – an AI-powered doctor appointment system",
                "Created Telegram bot automation to update student details in Excel via n8n",
                "Built a credit card object detection model using computer vision techniques"
            ]
        }
    ],
    contact: {
        title: "Get In Touch",
        description: "I'm always open to collaborating on AI, automation, and full-stack development projects. Feel free to reach out if you have an idea, an internship opportunity, or want to build something innovative together!",
        email: "gowslm2005@gmail.com",
        socials: [
            { name: "GitHub", url: "https://github.com/gowtham-v-data", icon: "github" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/gowtham-v-705161292/", icon: "linkedin" },
            { name: "Twitter", url: "https://x.com/sanjai_v06", icon: "twitter" }
        ]
    }

};