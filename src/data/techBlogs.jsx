import CookieIcon from "../components/icons/CookieIcon";
import ReactIcon from "../components/icons/ReactIcon";
import RockIcon from "../components/icons/RockIcon";
import SpringBootStarterIcon from "../components/icons/SpringBootStarterIcon";
import StyledComponentIcon from "../components/icons/StyledComponentIcon";

const techBlogs = [
  {
    title: "Spring Security with HttpOnly cookie",
    url: "#",
    icon: <CookieIcon />,
    text: "Step by step guide on how to set up a Spring Boot web app with the HttpOnly cookie security feature. Example code provided.",
  },
  {
    title: "Styled components with React JS",
    url: "#",
    icon: <StyledComponentIcon />,
    text: "Learn how to style your React applications efficiently using Styled Components. Includes dynamic theming and best practices.",
  },
  {
    title: "SOLID principles",
    url: "#",
    icon: <RockIcon />,
    text: "Understand the SOLID principles in software development and how they improve code maintainability and scalability.",
  },
  {
    title: "React Router basics",
    url: "#",
    icon: <ReactIcon />,
    text: "A beginner-friendly guide to React Router, covering navigation, route parameters, and protected routes with practical examples.",
  },
  {
    title: "Spring Boot Starter - initial setup",
    url: "#",
    icon: <SpringBootStarterIcon />,
    text: "Learn how to create a custom Spring Boot Starter to simplify dependency management and project setup.",
  },
];

export default techBlogs;
