import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="w-5 h-5 rounded-full bg-[#05ebeb] outline-8 outline-double outline-white outline-offset-2" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-500 via-red-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, my name is{" "}
            <span className="drop-shadow-[0_3px_8px_#000000] text-white font-bold font-mono">Ray</span>.
          </h1>
          <p
            className={`${styles.heroSubText} text-white drop-shadow-[0_3px_8px_#000000]`}
          >
            I am a Software Developer with a passion to explore the world's ever-advancing technologies.
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[40px] h-[60px] rounded-full border-4 border-white flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
//="via" keyword seems to initiate the gradient from the initial color | the "outline-8" creates a larger outline. "outline" utility class- This class takes two arguments: the width of the outline and the color of the outline. "#about" notes that we will be scrolling to the about section
export default Hero;
