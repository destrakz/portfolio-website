import {
  ansible,
  aws,
  githublogo,
  mysql,
  premierepro,
  python,
  terraform,
  vagrant,
  godot,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  django,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  fatar,
  cloaksandcapes,
  cloudchallenge,
  automated,
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
    title: "Cloud Architect",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
 
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "githublogo",
    icon: githublogo,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ansible",
    icon: ansible,
  },
  {
    name: "vagrant",
    icon: vagrant,
  },
];

const experiences = [
  {
    title: "Intern Full Stack Developer",
    company_name: "FATAR SRL",
    icon: fatar,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Conception and development of a web application for computer aided maintenance management (CMMS) using React for the front and Django/PostgreSQL for back-end",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with other intern developers to ensure the functionality of the app.",
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
    name: "Cloaks & Capes",
    description:
      "Commercial solo developed game published on Steam with more than 2k sold copies and a 95% positive rating (22-1), still being updated and maintained to this day according to customer reviews satisfying their needs.",
    
      tags: [
      {
        name: "Godot",
        color: "blue-text-gradient",
      },
      {
        name: "GDscript",
        color: "green-text-gradient",
      },
      {
        name: "PremierePro",
        color: "pink-text-gradient",
      },
    ],
    image: cloaksandcapes,
    source_code_link: "https://store.steampowered.com/app/1637950/Cloaks_and_Capes/",
  },
  {
    name: "Cloud Resume Challenge",
    description:
      "This is a challenge made by cloud savant Forrest Brazeal that includes hosting my static resume website on the cloud. used Infrastructure As Code IAC with Terraform, lambda, S3, DynamoDB, CI/CD, source control and more as the challenge states ",
    
      tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "IAC",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "orange-text-gradient",
      },
    ],
    image: cloudchallenge,
    source_code_link: "https://github.com/destrakz/aws-cloud-resume-challenge-test",
  },
  {
    name: "automated",
    description:
      "Dockerized an application and automated the creation of 2 Virtual Machines using Ansible and Vagrant, one to automate building and testing, other for the deployment, all with a Github actions CI/CD pipeline. ",
    
      tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Ansible",
        color: "green-text-gradient",
      },
      {
        name: "Vagrant",
        color: "pink-text-gradient",
      },
      {
        name: "CI/CD",
        color: "orange-text-gradient",
      },
    ],
    image: automated,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
