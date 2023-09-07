import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#05ebeb] outline-8 outline-double outline-white outline-offset-2" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-500 via-red-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, my name is{" "}
            <span className="drop-shadow-[0_3px_3px_#0a0101]">
              Ray.
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white drop-shadow-[0_3px_3px_#000000]`}
          >
            I am a determined Developer with skills ranging from<br className="lg:block hidden"/> Software Development, Web Development, and SQL Data-Analytics. <br className="lg:block hidden"/>With my
            everlasting drive, I hope to land my dream job in the Tech Industry.
          </p>
        </div>
      </div>

      <ComputersCanvas/>
    </section>
  );
};
//="via" keyword seems to initiate the gradient from the initial color | the "outline-8" creates a larger outline. "outline" utility class- This class takes two arguments: the width of the outline and the color of the outline.
export default Hero;
