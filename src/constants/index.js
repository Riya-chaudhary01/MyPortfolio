const mobile = "/assets/mobile.png";
const backend = "/assets/backend.png";
const creator = "/assets/creator.png";
const web = "/assets/web.png";
const javascript = "/assets/tech/javascript.png";
const typescript = "/assets/tech/typescript.png";
const html = "/assets/tech/html.png";
const css = "/assets/tech/css.png";
const reactjs = "/assets/tech/reactjs.png";
const tailwind = "/assets/tech/tailwind.png";
const nodejs = "/assets/tech/nodejs.png";
const mongodb = "/assets/tech/mongodb.png";
const git = "/assets/tech/git.png";
const PaloAlto = "/assets/company/PaloAlto.png";
const Zscaler = "/assets/company/Zscaler.png";
const Microsoft = "/assets/company/Microsoft.png";
const Portfolio = "/assets/Portfolio.png";
const Aws = "/assets/company/Aws.png";
const threejs = "/assets/tech/threejs.svg";
const AmazonClone = "/assets/AmazonClone.png";
const Food = "/assets/Food.png";
const project1 = "/assets/project1.png"; // NOTE: remove spaces in file name if possible

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "Problem Solver", icon: mobile },
  { title: "Student", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "AWS cloud Intern",
    company_name: "Amazon Web Services",
    icon: Aws,
    iconBg: "#383E56",
    date: "September 2023 - November 2023",
    points: [
      "Gained hands-on experience with AWS services like EC2, S3, IAM, and VPC...",
      "Developed practical skills in cloud security...",
    ],
  },
  {
    title: "Networking Intern",
    company_name: "Zscaler",
    icon: Zscaler,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Gained hands-on experience in networking concepts...",
      "Configured and managed Zscaler cloud security solutions...",
    ],
  },
];

const education = [
  {
    name: "Class 10th",
    date: "2019-20",
    institutename: "Pt. M.R Inter College",
    points: ["", "Grade : 86%"],
    icon: "/assets/school.png",
  },
  {
    name: "Class 12th",
    date: "2021-22",
    institutename: "Pt. M.R Inter College",
    points: ["", "Grade : 83%"],
    icon: "/assets/school.png",
  },
  {
    name: "Bachelor of Technology",
    institutename: "G.L. Bajaj Institute of Technology and Management",
    date: "2022-26",
    points: ["", "Computer Science And Engineering", "CGPA: 8.4/10"],
    icon: "/assets/college.png",
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible...",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer...",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website...",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const myProfiles = [
  {
    title: "LinkedIn",
    image: "/assets/linkedin_profile.png",
    source_code_link: "www.linkedin.com/in/riya-chaudhary-1a111b320",
  },
  {
    title: "Leetcode",
    image: "/assets/leetcode_profile_copy.png",
    source_code_link: "https://leetcode.com/u/Riya_Chaudhary_1/",
  },
  {
    title: "Github",
    image: "/assets/github_profile.png",
    source_code_link: "https://github.com/Riya-chaudhary01",
  },
];

const projects = [
  {
    name: "AI Interior Designer",
    description: "Developed a fully responsive AI-powered interior design website...",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/Riya-chaudhary01/AI_interior_designer",
  },
  {
    name: "Amazon Clone",
    description: "I created a simple homepage of Amazon using HTML and CSS...",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: AmazonClone,
    source_code_link: "https://github.com/Riya-chaudhary01",
  },
  {
    name: "3D Portfolio",
    description: "Created a visually engaging 3D portfolio using React and Tailwind CSS...",
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Three js", color: "pink-text-gradient" },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/Riya-chaudhary01/Portfolio",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  myProfiles,
  education,
};
