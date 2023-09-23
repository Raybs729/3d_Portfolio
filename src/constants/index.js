import {
    creator,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    carrent,
    jobit,
    tripguide,
    threejs1,
    csharp,
    java,
    nextjs1,
    python,
    firebase,
    postgres,
    htmlcss,
    tech_elevator,
    newLogo,
    petflix_logo,
    weatherapp,
    sql
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
      title: "Java Developer",
      icon: java,
    },
    {
      title: "React Native Developer",
      icon: reactjs,
    },
    {
      title: "Next.js Framework",
      icon: nextjs1,
    },
    {
      title: "Three.js Framework",
      icon: threejs1,
    },
    {
      title: "SQL Database Experience",
      icon: sql,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Csharp",
      icon: csharp,
    },
    {
      name: "HTML & CSS",
      icon: htmlcss,
    },
    {
      name: "Next JS",
      icon: nextjs1,
    },
    {
      name: "Three JS",
      icon: threejs1,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Firebase",
      icon: firebase,
    },
  ];
  //= deleting or adding above will alter the balls
  const experiences = [
    {
      title: "3D Portfolio",
      techUsed_or_companyName: "Three.js, Vite, React.js, TailwindCss, Framer Motion",
      icon: newLogo,
      iconBg: "#FFFFFFFF",
      date: "August 2023 - September 2023",
      points: [
        "Created an interactive 3d portfolio with the goal to showcase my skillset to recruiters and hiring managers.",
        "Combined all my understanding of Three.js, React, and JavaScript to restructure page in a way to outlines my current journey towards a Tech Career.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Pull resouces from React Docs, JavaScript Docs, StackOverflow, and Youtube to debug and resolve issues.",
      ],
    },
    {
      title: "Petflix",
      techUsed_or_companyName: "React.js, Firebase Auth, TMDb API, TailwindCss",
      icon: petflix_logo,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Designed a Netflix-clone application to better understand React.js and TailwindCss",
        "Utilized Firebase authentication to store User emails and passwords.",
        "Incorporated TMBd API to populate webpage with movie thumbnails and categories.",
        "This project also features “trailers” of my pets, Ori and Cookie. Allowing me to add a personal touch to my learning experience.",
      ],
    },
    {
      title: "Web Developer",
      techUsed_or_companyName: "HTML, Css, JavaScript, WeatherAPI",
      icon: weatherapp,
      iconBg: "#383E56",
      date: "May 2023 - May 2023",
      points: [
        "Set a goal to understand API intergration by creating a weather service application.",
        "Implemented user input functionality and integrated an WeatherAPI service to deliver detailed, current weather information.",
        "Designed it for mobile services and created an interface that changes based on specified location's weather",
      ],
    },
    {
      title: "Full-Stack Java Developer Student",
      techUsed_or_companyName: "Tech Elevator",
      icon: tech_elevator,
      iconBg: "#FFFFFFFF",
      date: "January 2023 - April 2023",
      points: [
        "A full-stack coding boot camp using centralized around the Java programming language with 800+ hours of lecture and application",
        "Collaborating with cohort team members with rich and diverse backgrounds.",
        "Implemented Agile Methodologies to complete a variety of Capstone Projects.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };