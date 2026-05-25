import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { web, mobile, backend, creator } from "../assets";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-16 h-16 object-contain" 
          />
        
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3> 
         
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <section id="about" className="relative z-0">

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
         I’m a Software Developer transitioning into an AI Engineer, with strong experience in TypeScript, JavaScript, and modern frameworks like React and Node.js. I build scalable, high-performance web applications and integrate intelligent systems to solve real-world problems.<br />

        Currently, I’m developing end-to-end AI solutions using FastAPI, machine learning, and deep learning models—including real-time applications involving computer vision and data-driven decision systems. My work combines backend engineering, model development, and deployment, making me comfortable across the full AI product lifecycle.<br />

        I have hands-on experience with tools like PyTorch, Scikit-learn, and REST API development, and I’m actively building production-ready AI projects that demonstrate practical impact.<br />

        I’m a fast learner who enjoys tackling complex challenges, collaborating with teams, and turning ideas into efficient, user-friendly products.<br />

        Let’s build something impactful.<br />
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Tilt
            key={service.title}
            className="xs:w-[250px] w-full"
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            scale={1}
            transitionSpeed={450}
          >
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "About"); // ✅ normal export