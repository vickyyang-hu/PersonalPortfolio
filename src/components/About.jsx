import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return ( 
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.7)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        <ul className="list-disc">
          <li className="max-w-4xl">
             Results-driven full stack web developer with an accounting/finance background, skilled in HTML, CSS, JavaScript, Node.js, MongoDB, and React. 
          </li>
          <li className="max-w-4xl">
             Strong team player with good communication skills demonstrated through interaction with clients and staffs at all levels across the organization
          </li>
          <li className="max-w-4xl">
             Aspire to help bring creative projects to life, contribute technical expertise, and deliver innovative solutions. 
          </li>
        </ul>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
