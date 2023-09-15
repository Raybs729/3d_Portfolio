import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'react-motion'

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles'
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
      <p className={styles.sectionSubText}>What I Have Done So Far</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work")