export const codeString = `
const developer = {
   name: "Văn Cường IT",
   title: "Full-Stack Developer",
   skills: {
       frontend: ["React", "Redux", "NextJS", "Material-UI"],
       backend: ["Java Spring", "Express", "NestJS"],
       database: ["MongoDB", "PostgreSQL", "MySQL"],
   },
   hardWorker: true,
   problemSolver: true,
   hireable: function() {
       return(
          this.hardWorker &&
          this.problemSolver &&
          this.skills.length === 100%
        );
    };
}
`;

export const projects = [
    {
        id: 1,
        title: "PixelArt Studio",
        image: "/images/project-1.jpg",
        description:
            "An innovative platform for creating and sharing pixel art. Users can collaborate in real-time and showcase their masterpieces to a global audience.",
    },
    {
        id: 2,
        title: "Foodie Finder",
        image: "/images/project-2.png",
        description:
            "A web application designed to help food lovers discover the best restaurants and hidden gems based on their preferences and location.",
    },
    {
        id: 3,
        title: "EcoShop Hub",
        image: "/images/project-3.png",
        description:
            "An e-commerce platform that promotes sustainable and eco-friendly products, connecting buyers with environmentally conscious sellers.",
    },
    {
        id: 4,
        title: "CodeConnect",
        image: "/images/project-4.png",
        description:
            "A social networking platform for developers to collaborate, share knowledge, and showcase their coding projects.",
    },
    {
        id: 5,
        title: "TravelTales",
        image: "/images/project-5.jpg",
        description:
            "A travel diary app that lets users document and share their travel experiences with stories, photos, and videos.",
    },
    {
        id: 6,
        title: "Fitness Tracker Pro",
        image: "/images/project-6.png",
        description:
            "A comprehensive fitness tracker that helps users monitor workouts, nutrition, and progress with personalized recommendations.",
    },
];

export const experiences = [
    {
        time: "Jan 2024 - Present",
        position: "Fullstack Developer",
        description: "Code and build something in everyday.",
    },
    {
        time: "Jun 2022 - Jan 2024",
        position: "Fullstack Developer",
        description: "Code and build something in everyday.",
    },
    {
        time: "July 2020 - Jun 2022",
        position: "Fullstack Developer",
        description: "Code and build something in everyday.",
    },
];

export const skills = [
    { name: "HTML", icon: "icons/html.png" },
    { name: "CSS", icon: "icons/css.png" },
    { name: "JavaScript", icon: "icons/javascript.png" },
    { name: "Typescript", icon: "icons/typescript.png" },
    { name: "Tailwind CSS", icon: "icons/tailwindcss.svg" },
    { name: "Material UI", icon: "icons/material-ui.svg" },
    { name: "React", icon: "icons/react.png" },
    { name: "NextJS", icon: "icons/nextjs.svg" },
    { name: "NestJS", icon: "icons/nestjs.png" },
    { name: "MongoDB", icon: "icons/mogodb.svg" },
    { name: "MySQL", icon: "icons/mysql.svg" },
    { name: "Firebase", icon: "icons/firebase.svg" },
    { name: "Git", icon: "icons/git.svg" },
    { name: "AWS", icon: "icons/aws.svg" },
    { name: "Docker", icon: "icons/docker.svg" },
    { name: "Go", icon: "icons/go.svg" },
    { name: "Nginx", icon: "icons/nginx.svg" },
    { name: "Strapi", icon: "icons/strapi.svg" },
];

export const socials = [
    {
        name: "facebook",
        url: "https://www.facebook.com/",
    },
    {
        name: "tik-tok",
        url: "https://www.tiktok.com/vi-VN/",
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
    },
];
