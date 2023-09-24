import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            The following projects are various software application that I am developing or currently developing in an entrepreneurial and exploratory manner. Each project has links with code repositories live demos included. These projects reflect my ability to solve problems, work with different technologies, and manage projects effectively. In my continued pursuit of knowledge, I know my unwavering drive will help me land my first role in the Tech Industry.
          </motion.p>
      </div>
    </>
  );
};

export default Works;
