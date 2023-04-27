import { Iproject } from "./components/Project";

export const projects: Iproject[] = [
  {
    thumbnail: "frontend",
    category: ["frontend"],
    title: "portfolio",
    description:
      "My portfolio is a dynamic and responsive website created using React. It showcases my skills, experience, and projects in an organized and visually appealing manner. The website is easy to navigate and provides visitors with a comprehensive overview of my work. With its sleek design and smooth functionality, my portfolio is a testament to my proficiency in React development.",
    url: "https://github.com/mohamedelewasy/portfolio",
  },
  {
    thumbnail: "api",
    category: ["api"],
    title: "Blog-API",
    description: `Simple social media application, allows user to register and log in. User can post and interact 
    with others' posts by like, dislike or write a comment. User can follow, unfollow or block 
    other users. User can know who visits his profile.`,
    url: "https://github.com/mohamedelewasy/Blog",
  },
  {
    thumbnail: "api",
    category: ["api", "frontend"],
    title: "Q-Notes",
    description: `Simple application can serve documents from admin user and give access for logged user to 
    download these documents.`,
    url: "https://github.com/mohamedelewasy/Q-Notes",
  },
  {
    thumbnail: "api",
    category: ["api", "frontend"],
    title: "Udacity-Udagram",
    description: `Social media app for posting photos like instagram. This application is related to Udacity 
    advanced web nano-degree for training on hosting using amazon AWS.`,
    url: "https://github.com/mohamedelewasy/udagram-udacity",
  },
  {
    thumbnail: "design",
    category: ["design"],
    title: "Leon html template",
    description: `This basic HTML page is designed for training purposes and includes CSS and JS elements. It features a simple layout with a header, navigation menu, main content section, and footer. The CSS styling adds visual appeal with font choices, colors, and spacing. The JS functionality allows for interactive elements such as dropdown menus or pop-up windows. This page serves as a foundation for learning HTML, CSS, and JS coding skills.`,
    url: "https://github.com/mohamedelewasy/leon-html-template",
  },
  {
    thumbnail: "api",
    category: ["api"],
    title: "streaming-API",
    description: `Egypt-FWD T3C16 Web Developer Nanodegree group teams activity repository.`,
    url: "https://github.com/mohamedelewasy/streaming-API",
  },
];
export const skills = [
  { title: "TypeScript", range: 90 },
  { title: "JavaScript", range: 90 },
  { title: "Node.js", range: 90 },
  { title: "Express.js", range: 90 },
  { title: "postgreSQL", range: 90 },
  { title: "mongoDB", range: 90 },
  { title: "RESTful APIs", range: 90 },
  { title: "GIT", range: 90 },
  { title: "GitHub", range: 90 },
  { title: "OOP", range: 95 },
  { title: "Data Structures", range: 95 },
  { title: "Jasmine", range: 90 },

  { title: "Python", range: 70 },
  { title: "React", range: 70 },
  { title: "HTML", range: 70 },
  { title: "CSS", range: 70 },
  { title: "Bootstrap", range: 70 },
  { title: "Docker Basics", range: 60 },
  { title: "Circle CI", range: 60 },
  { title: "Amazon AWS EC2", range: 70 },
  { title: "Amazon AWS EB", range: 70 },
  { title: "Amazon AWS S3", range: 70 },
  { title: "Amazon AWS RDS", range: 70 },
];
