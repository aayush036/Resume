export const portfolioData = {
    name: "Aayush Patel",
    tagline: "Full-Stack Developer & Blockchain Enthusiast.",
    email: "patelayu182002@gmail.com",

    // 🔥 NEW → Used by Hero.jsx rotating animation
    techWords: ["Solidity", "Node.js", "React", "Tailwind CSS", "MongoDB"],

    resumeUrl:
        "https://drive.google.com/file/d/1euuAtVPGuVdK6Rr0dE6PYr5JwfpGcMgO/preview",

    about: {
        profileImage: "https://picsum.photos/400/400",
        text: [
            "I'm Aayush Patel, a full-stack and blockchain developer who enjoys building real-world, scalable applications.",
            "I regularly explore new tools, refine my skills, and work on projects that challenge me.",
            "My focus is on writing clean, modular, and reliable code."
        ]
    },

    // 🔥 YOUR EXACT SKILLS
    skills: [
        { name: "Solidity", iconClass: "devicon-solidity-plain" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain" },
        { name: "HTML", iconClass: "devicon-html5-plain" },
        { name: "Express", iconClass: "devicon-express-original" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
        { name: "Tailwind", iconClass: "devicon-tailwindcss-original" }
    ],

    socials: [
        { platform: "GitHub", url: "https://github.com/aayush036", icon: "Github" },
        { platform: "LinkedIn", url: "www.linkedin.com/in/aayush-patel-63130123a", icon: "Linkedin" },
        { platform: "Twitter", url: "https://x.com/Aayush036", icon: "Twitter" }
    ]
};

// Your projects array unchanged
export const projectsData = [
    {
        "id": "1",
        "title": "Secure MERN Stack Authentication System",
        "description": "A full-stack authentication system with email verification and secure 6-digit OTP-based password reset. Built using the MERN stack with JWT-powered authentication, optimized API performance, and a responsive Tailwind CSS frontend.",
        "techStack": ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
        "githubUrl": "https://github.com/aayush036/MERN_Authentication",
        "liveUrl": "https://mern-authentication-1-5v5p.onrender.com/",
        "imageUrl": "https://drive.google.com/thumbnail?id=1OwP2C_sm5to-Dob_WrJwuaQmJN85HTxV&sz=w1000"

    },
    {
        id: "2",
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers showing sales metrics, customer demographics, and inventory status in real-time.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        githubUrl: "https://github.com",
        liveUrl: "https://demo.com",
        imageUrl: "https://picsum.photos/600/350?random=1"
    },
    {
        id: "3",
        title: "AI Chat Interface",
        description: "A modern chat interface integrated with large language models, supporting streaming responses, code highlighting, and chat history.",
        techStack: ["React", "OpenAI API", "Vite", "Zustand"],
        liveUrl: "https://demo.com",
        imageUrl: "https://picsum.photos/600/350?random=3"
    },
    {
        id: "4",
        title: "Weather Forecaster",
        description: "A beautiful weather application providing 7-day forecasts, air quality index, and severe weather alerts using external APIs.",
        techStack: ["Vue.js", "CSS Modules", "OpenWeatherMap API"],
        githubUrl: "https://github.com",
        liveUrl: "https://weather-demo.com",
        imageUrl: "https://picsum.photos/600/350?random=4"
    }
];
