import {
    javascript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
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
    sql,
    petflix,
    weather,
    fitality
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
      techUsed_or_companyName: "Three.js, Vite, React.js, TailwindCSS, Framer Motion",
      icon: newLogo,
      iconBg: "#FFFFFFFF",
      date: "August 2023 - October 2023",
      points: [
        "Created an interactive 3d portfolio with the goal to showcase my skillset to recruiters and hiring managers.",
        "Combined all my understanding of Three.js, React, and JavaScript to restructure page in a way to outlines my current journey towards a Tech Career.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Pull resouces from React Docs, JavaScript Docs, StackOverflow, and Youtube to debug and resolve issues.",
      ],
    },
    {
      title: "Petflix",
      techUsed_or_companyName: "React.js, Firebase Auth, TMDb API, TailwindCSS",
      icon: petflix_logo,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Designed a Netflix-clone application to better understand React.js and TailwindCSS",
        "Utilized Firebase authentication to store User emails and passwords.",
        "Incorporated TMBd API to populate webpage with movie thumbnails and categories.",
        "This project also features “trailers” of my pets, Ori and Cookie. Allowing me to add a personal touch to my learning experience.",
      ],
    },
    {
      title: "WeatherApp",
      techUsed_or_companyName: "HTML, CSS, JavaScript, WeatherAPI",
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
        "Ray is such a pleasure to work with. His attention to detail has helped immensely in laying the groundwork for various projects. His consideration for his peers and his work ethic are a pillar to any collaboration.",
      name: "Janice Lee",
      designation: "Supervisor",
      company: "Lowe's Home Improvement",
      image: "https://preview.redd.it/y758gcufnw681.jpg?auto=webp&s=61b39fed1065293163ac470c32d5a76c6e2d17f3",
    },
    {
      testimonial:
        "Ray demonstrates the key trait a Software Developer should have and thats perseverence. We could not have found fixes to multiple bugs if he didn't continue to search for work-arounds through multiple sleep-less nights.",
      name: "Jeremy Clark",
      designation: "Project Partner",
      company: "100Devs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNE2eav5fRZPSjesaqSxy32hP5y190HzBfug&usqp=CAU",
    },
    {
      testimonial:
        "Ray is so great at explaining concepts! He spent almost a whole afternoon explaining class topics in such a simple to understand manner and it ultimately got me past the initial learning curve of programming.",
      name: "Lisa Wang",
      designation: "Project Partner",
      company: "100Devs",
      image: "https://img.freepik.com/premium-photo/japanese-girl-tokyo_186382-8965.jpg",
    },
  ];
  //!NEED TO CHANGE BELOW
  const projects = [
    {
      name: "Petflix",
      description:
        "Web-based platform that  was built with the purpose of learning React.js and Firebase Authentication services. It allows users to view a Netflix-clone that also incorporates a personal aspect with video trailers and thumbnails of my pets Ori and Cookie.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: petflix,
      source_code_link: "https://github.com/Raybs729/Netflix-Clone",
    },
    {
      name: "WeatherApp",
      description:
        "A weather application that allows users to check the weather of any location and retrieve real-time weather data from WeatherAPI. The sub-goal of this project was to use this project as a learning experience for API integration.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Raybs729/WeatherApp",
    },
    {
      name: "Fitality",
      description:
        "A fitness companion app with PostgreSQL database to log members, workouts, and classes, with additional features for gym staff. This project was a collaboration by 7 other developers with the goal of presenting it to a product owner",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: fitality,
      source_code_link: "https://github.com/Raybs729/Fitness-Companion-App-Fitality-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };