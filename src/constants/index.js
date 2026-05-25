import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  edutainer,
  carrent,
  jobit,
  tripguide,
  threejs,
  fitnest,
  autometa,
  culinairy,
  eventapi,
  resumeai,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Full-Stack Engineer",
    icon: backend,
  },
  {
    title: "Generative AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Edutainer ",
    icon: edutainer,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wolvarix Fitnest - AI Fitness & Nutrition Coach",
    description:
      "An AI-powered fitness and nutrition platform that analyzes body type using deep learning and computer vision, predicts BMI, and provides personalized workout and diet recommendations in real time.",
    tags: [
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: fitnest,
    source_code_link: "http://github.com/anikett0307",
  },

  {
    name: "AutoMeta - Adaptive Meta Learning Framework",
    description:
      "Advanced AI research project focused on dynamic task-shift detection in medical image classification using meta-learning, contrastive learning, memory banks, and an extended MAML framework.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "meta-learning",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "deep-learning",
        color: "blue-text-gradient",
      },
    ],
    image: autometa,
    source_code_link: "http://github.com/anikett0307",
  },

  {
    name: "Event Management REST API",
    description:
      "Backend API system for managing events, registrations, cancellations, and event analytics using REST architecture with secure and scalable backend development practices.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: eventapi,
    source_code_link: "http://github.com/anikett0307",
  },

  {
    name: "AI Resume Tailoring System",
    description:
      "Intelligent resume optimization system that customizes resumes according to job descriptions using LLMs, FastAPI, and local AI models with Ollama integration.",
    tags: [
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "ollama",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "blue-text-gradient",
      },
    ],
    image: resumeai,
    source_code_link: "http://github.com/anikett0307",
  },
];

export { services, technologies, experiences, testimonials, projects };