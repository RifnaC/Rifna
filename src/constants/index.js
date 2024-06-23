import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  creator,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  selfstack,  
  atheneuam,
  calendar,
  kanban,
  seminar,
  threejs,
  iedc,
  connect,
  budget,
  qr,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
  
];

const experiences = [
  {
    title: "Mern Stack Developer Intern",
    company_name: "Self Stack", 
    icon: selfstack,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing Restful APIs using Node.js and other related technologies.",
      "Implementing new features and bug fixes.",
    ],
  },
  {
    title: "COO Intern",
    company_name: "IEDC EMEA", 
    icon: iedc,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "Managed a team of interns, contributing to successful outcomes.",
      "Managed program timelines and ensured successful completion of programs.",
      "Coordinated and managed various connections to ensure seamless program implementation, contributing to successful outcomes.",
      "Submit reports to the CEO, offering valuable insights and recommendations for ongoing improvements",
    ],
  },
  {
    title: "Community Manager Intern",
    company_name: "Connect EMEA", 
    icon: connect,
    iconBg: "#383E56",
    date: "January 2022 - December 2022",
    points: [
      "Timely addressed student comments and inquiries, significantly contributing to increased student satisfaction.",
      "Formulated and implemented a social media strategy that effectively elevated brand awareness among students.",
      "Played a key role in team initiatives by actively participating in event organization, survey administration, and various tasks as required.",
      "Identified and pursued opportunities for process improvement, showcasing a dedicated commitment to enhancing the overall student experience.",
    ],
  },
];

const projects = [
  {
    name: "Atheneuam ",
    description:
      "Web-based platform that allows users to browse, purchase and manage their books",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: atheneuam,
    source_code_link: "https://github.com/RifnaC/Athenauem-book-store",
  },
  {
    name: "Calendar",
    description:
      "Web application that enables users to create, edit, and delete events.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Moment.js",
        color: "pink-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://github.com/RifnaC/Calendar",
  },
  {
    name: "Seminar Hall", 
    description:
      "Web application that enables users to book seats in a seminar hall on the desired date.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: seminar,
    source_code_link: "https://github.com/RifnaC/Seat-Booking-App",
  },
  {
    name: "Kanban board", 
    description:
      "Web application that enables users to create, edit, and delete events which can be dragged and dropped based on their status.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: kanban,
    source_code_link: "https://github.com/RifnaC/Kanban-App",
  },
  {
    name: "Budget Calculator", 
    description:
      "Web application that calculates the monthly budget based on the income and expenses of the user, and provide a detailed analysis.",
    tags: [
      {
        name: "Chart.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/RifnaC/BudgetCalculator",
  },
  {
    name: "QR code generator", 
    description:
      "Web application that enables users to generate a QR code based on the link provided by the user.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: qr,
    source_code_link: "https://github.com/RifnaC/QR-code-generator",
  },
];

export { services, technologies, experiences, projects };
