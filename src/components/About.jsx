import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full lightblue-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-10 px-6"
      >
        As a software developer, my skills span back-end development, web
        development, and SQL data analytics. My journey began with Java
        programming, which I honed through Tech Elevator’s comprehensive Java
        Development Bootcamp. This experience significantly enhanced my
        full-stack development knowledge. Post-graduation, I expanded my skill
        set by building websites using JavaScript and frameworks like React,
        Next.js, and Three.js.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-10 px-6"
      >
        In the realm of back-end development, I collaborated with a team of Java
        developers to create a fitness app; this app leverages PostgreSQL for
        storing user workouts and authentication. On a personal learning
        venture, I developed a weather app that uses WeatherAPI to provide
        real-time weather data based on location; as another fun side-project, I created a
        Netflix clone named “Petflix” which Implemented TMBd movie database API.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-10 px-6"
      >
        With my relentless drive and curiosity, I am confident in securing a
        role in my dream career field.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} 
        className="py-5 mx-10 text-[25px]"
        to='https://docs.google.com/document/d/1dlHtZ5eFRFy4PAxnv3T_N85OzKdGoVurkIEOLAykVgg/edit?usp=sharing'
        alt='test'
        >
          <Link to='https://docs.google.com/document/d/1dlHtZ5eFRFy4PAxnv3T_N85OzKdGoVurkIEOLAykVgg/edit?usp=sharing'>My Resume📝</Link>
          
        </motion.p>
      <div className="py-1 mt-9 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      
    </>
  );
};
//= "...service" this syntax means to spread all properties coming from the service the program is looping over

export default SectionWrapper(About, "about");
