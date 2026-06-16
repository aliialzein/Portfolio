export type NavLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
  impact: string
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  achievements: string[]
}

export const site = {
  name: 'Ali Alzein',
  title: 'Software Engineer | Backend & Full-Stack Developer',

  intro:
    'Software Engineering student focused on building scalable backend systems, full-stack applications, and AI-integrated solutions with clean architecture and production mindset.',

  resumeUrl: '/Ali_Alzein_Software_Developer_CV.pdf',
  email: 'aliialzein1@gmail.com',

  about:
    `Computer and Communications Engineering student entering final year with hands-on experience in backend and full-stack development.
I specialize in building scalable systems using ASP.NET, Node.js, React, and FastAPI, with a strong focus on clean architecture and real-world problem solving.
I enjoy designing system architectures, integrating APIs, and building end-to-end applications that are production-oriented and maintainable.
My goal is to contribute to engineering teams where system design, performance, and reliability matter.`
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/aliialzein',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ali-al-zein',
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
  },
]

export const projects: Project[] = [
  {
    title: 'Smart Room Manager System',
    description:'Full-stack room management system developed during internship, focusing on authentication, room allocation, and structured backend design with REST APIs.',
    tech: ['ASP.NET Core', 'React.js', 'SQL'],
    featured: true,
    impact:
      'Designed database architecture and implemented backend APIs ensuring clean integration with frontend and reliable data flow.',
  },

  {
    title: 'Perfumes Inventory (AI-Powered System)',
    description:'AI-powered inventory management platform that automates product registration using image recognition and price prediction, eliminating manual product entry workflows.',
    tech: [
        'FastAPI',
        'React',
        'MongoDB',
        'GridFS',
        'TensorFlow',
        'Scikit-Learn',
    ],
    github: 'https://github.com/aliialzein/Perfume-Inventory',
    live: 'https://perfume-inventory-demo.netlify.app',
    featured: true,
    impact:'Designed and integrated image classification and price prediction pipelines into a full-stack inventory system with real-time updates and AI-assisted product management.',
    },

    {
    title: 'PsyConnect',
    description:'Session management platform for psychotherapists that centralizes scheduling, online consultations, payments, and AI-assisted workflows.',
    tech: [
        'ASP.NET Core MVC',
        'Stripe',
        'OpenAI API',
        'Zoom API',
        'SMTP',
    ],
    github:'https://github.com/aliialzein/PsyConnect',
    featured: true,
    impact:'Integrated external services and AI capabilities into a unified healthcare workflow, reducing administrative effort and simplifying patient interaction.',
    },

  {
    title: 'Plant Disease Detection',
    description:'Deep learning application that detects plant diseases from uploaded leaf images and visualizes prediction reasoning using Grad-CAM explainability.',
    tech: [
        'Python',
        'TensorFlow',
        'MobileNetV2',
        'Streamlit',
        'Grad-CAM',
    ],
    github:'https://github.com/aliialzein/Plant-Disease-Detection',
    impact:'Fine-tuned MobileNetV2 and integrated explainable AI visualization to improve prediction transparency and usability.',
    },

    {
    title: 'Teleco',
    description:'End-to-end web, Android, and IOS application design focused on telecom service workflows, account management, and user-centered interaction design.',
    tech: [
        'Figma',
        'UI/UX',
        'Design System',
        'Prototyping',
    ],
    live: 'https://www.figma.com/design/ysqHK1ehP6TjSxqQnPRcLf/Teleco?node-id=0-1&t=RMt1ZySlgiWb7Qmq-1',
    impact:'Designed a structured mobile experience emphasizing usability, visual consistency, and scalable component-based design.',
    }
]

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Web Intern',
    company: 'Integrated Digital Systems (IDS)',
    period: 'Jun 2025 – Aug 2025',
    location: 'Lebanon',
    summary:
      'Worked in a two-person team to develop a Smart Room Management system with full-stack architecture and database design.',
    achievements: [
      'Designed relational database schema and ER diagrams ensuring data integrity and scalability.',
      'Implemented ASP.NET Core backend APIs for room management and authentication systems.',
      'Integrated backend services with React.js frontend via REST APIs.',
    ],
  },

]

export const education = {
  degree: 'Bachelor of Engineering in Computer and Communications Engineering',
  school: 'Antonine University',
  period: '2022 – Present',
}

export type Certification = {
  title: string
  organization: string
  description: string
  skills: string[]
}

export const certifications: Certification[] = [
  {
    title: 'Software Engineering Excellence',
    organization: 'SE²',
    description:
      'Structured engineering training focused on scalable architecture, maintainable code, and modern backend development practices.',
    skills: ['Clean Architecture', 'SOLID Principles', 'DevOps Fundamentals', 'Node.js', 'TypeScript'],
  },
  {
    title: 'CCNA',
    organization: 'Cisco',
    description:
      'Industry certification covering networking fundamentals, routing and switching, and core infrastructure services.',
    skills: ['Networking Basics', 'Routing & Switching', 'Infrastructure Services'],
  },
]