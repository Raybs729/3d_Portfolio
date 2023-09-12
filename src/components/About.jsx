import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon})  => {
  return (
    <p>{title}</p>
  )
}

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
        As a software developer, my skills span back-end development, web development, and SQL data analytics. My journey began with Java programming, which I honed through Tech Elevator’s comprehensive Java Development Bootcamp. This experience significantly enhanced my full-stack development knowledge. Post-graduation, I expanded my skill set by building websites using JavaScript and frameworks like React, Next.js, and Three.js.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-10 px-6"
      >
        In the realm of back-end development, I collaborated with a team of Java developers to create a fitness app; this app leverages PostgreSQL for storing user workouts and authentication. On a personal learning venture, I developed a weather app that uses WeatherAPI to provide real-time weather data based on location; as a fun project, I created a Netflix clone named “Petflix”. This site not only uses the TMDb API to populate it with movies and shows but also features “trailers” of my pets, Ori and Cookie.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-10 px-6"
      >
        With my relentless drive and curiosity, I am confident in securing a role in my dream career field.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default About;
