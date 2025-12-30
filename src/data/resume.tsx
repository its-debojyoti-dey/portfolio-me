import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Debojyoti Dey",
  initials: "DD",
  url: "https://linkedin.com/in/deydebojyoti",
  location: "Guwahati, India",
  locationLink: "https://www.google.com/maps/place/Guwahati",
  description:
    "Backend-focused Full-Stack Engineer and AI Engineer with 3+ years of experience designing scalable, cloud-native systems for global users.",
  summary:
    "Backend-focused Full-Stack Engineer and AI Engineer with **3+ years of experience** designing scalable, cloud-native systems for global users. Specialized in **backend architecture, system design, and LLM-powered automation** using Node.js, TypeScript, and modern AI frameworks. Proven ability to build, deploy, and own production systems end-to-end while collaborating with distributed teams in fast-paced startup environments.",
  avatarUrl: "/me.png",
  skills: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "JWT",
    "WebSockets",
    "Microservices",
    "Event-Driven Architecture",
    "Serverless Systems",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Firebase",
    "AWS",
    "Docker",
    "CI/CD Pipelines",
    "Nginx",
    "Linux",
    "GitHub",
    "OpenAI API",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "Multi-Agent Systems",
    "Prompt Engineering",
    "n8n",
    "Zapier",
    "Make (Integromat)",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "debojyotidey.official@gmail.com",
    tel: "+91-8011159798",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/deydebojyoti",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:debojyotidey.official@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "AtoZDebug",
      href: "#",
      badges: [],
      location: "Remote / India",
      title: "Co-Founder & Tech Lead (Backend / AI)",
      logoUrl: "/atozdebug.png",
      start: "Aug 2023",
      end: "Sep 2025",
      description:
        "Designed and owned backend architectures for multiple AI-driven SaaS products serving international clients. Built scalable APIs and backend services using Node.js, TypeScript, MongoDB, PostgreSQL. Implemented event-driven and asynchronous systems for real-time workflows, notifications, and background processing. Developed LLM-powered automation pipelines using LangChain, CrewAI, and LangGraph for multi-agent task orchestration. Led system design decisions including data modeling, caching, performance optimization, and AWS deployment. Managed and mentored a distributed team of 5 engineers, ensuring high code quality and on-time delivery. Owned the full software lifecycle: architecture, development, deployment, monitoring, and iteration based on user feedback.",
    },
  ],
  education: [
    {
      school: "Barak Valley Engineering College",
      href: "#",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/bvec.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Nowgong Polytechnic",
      href: "#",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/np.png",
      start: "2017",
      end: "2020",
    },
    {
      school: "NextLeap",
      href: "#",
      degree: "Product Manager Fellowship",
      logoUrl: "/nextleap.png",
      start: "Dec 2025",
      end: "Mar 2026",
    },
    {
      school: "Udemy",
      href: "#",
      degree: "FastAPI Certification",
      logoUrl: "/udemy.png",
      start: "2025",
      end: "2025",
    },
    {
      school: "Make",
      href: "#",
      degree: "Advanced Certification",
      logoUrl: "/make.png",
      start: "2025",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "BluBuddy.io",
      href: "https://BluBuddy.io",
      dates: "July 2024 - August 2025",
      active: true,
      description:
        "AI-powered conversational platform with a multi-agent backend architecture. Designed backend services for conversation orchestration, lead management, and analytics. Processed 50,000+ conversations and improved client lead conversion rates by 35%. Implemented domain-specific AI agents for real-estate listings aggregation and intelligent responses.",
      technologies: [
        "AI Agents",
        "Backend Architecture"
      ],
      links: [
        {
          type: "Website",
          href: "https://BluBuddy.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SmartInbox.ai",
      href: "https://SmartInbox.ai",
      dates: "April 2024 - March 2025",
      active: true,
      description:
        "LLM-driven email productivity system. Built backend pipelines for email ingestion, classification, and priority ranking. Implemented asynchronous processing and intelligent filtering workflows. Reduced email handling time by 40% for 2,000+ active users.",
      technologies: [
        "LLM",
        "Email Automation"
      ],
      links: [
        {
          type: "Website",
          href: "https://SmartInbox.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SocialSync",
      href: "#",
      dates: "",
      active: true,
      description:
        "Automated content publishing system. Integrated Google Trends, Perplexity, and Make.com. Designed fault-tolerant automation workflows for LinkedIn and X. Enabled consistent content delivery with minimal manual intervention.",
      technologies: [
        "Google Trends",
        "Perplexity",
        "Make.com"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Caption AI",
      href: "#",
      dates: "",
      active: true,
      description:
        "Generative AI backend service for social media captions. Used prompt engineering and LLM APIs. Enabled scalable, automated content creation across multiple platforms.",
      technologies: [
        "Generative AI",
        "LLM APIs"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AskMate AI",
      href: "#",
      dates: "",
      active: true,
      description:
        "AI-powered study assistant. Enabled users to upload PDFs, YouTube links, and question papers for contextual Q&A. Built React Native mobile frontend. Designed backend APIs using Node.js and integrated LLMs for document understanding and retrieval.",
      technologies: [
        "React Native",
        "Node.js",
        "LLMs"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
