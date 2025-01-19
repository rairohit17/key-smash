import React from 'react'
import phone from '../assets/pone.png'
import gradient from "../assets/gradient.png";
import {motion} from "framer-motion"

const LandingPage = () => {
  
  return (
    <div className="flex sm:flex-row flex-col">
      <div className="pt-5 mt-[50px] pl-6 sm:w-[65%] w-full">
        <motion.div 
        initial={{y:50 ,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5}}
        className="stroke text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] transition duration-100 lg:text-[7rem] font-bold cursor-pointer">
          track your crypto
        </motion.div>
        <motion.div 
        initial={{y:50 ,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className="text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-bold text-[var(--green)]">
          Live and Clear.
        </motion.div>
      </div>
      
      <div className="  relative py-[50px] ml-2 mb-5">
        <div className="relative">
          <motion.img  
            initial={{y:10}}
            animate={{y:-10}}
            transition={{  type:"smooth",duration:2 , repeat:Infinity,repeatType:"mirror",ease:"easeInOut" }}
            className="h-[450px] md:h-[600px] absolute sm:relative 
            right-10 sm:left-0 z-0" 
            src={phone} 
            alt="Phone" 
          />
          <motion.img 
            className="h-[400px] md:h-[530px]  top-16
            sm:top right-10 -b  absolute sm:-bottom-12   sm:right-0 w-[190px] md:w-[250px] -z-10" 
            src={gradient} 
            alt="Gradient" 
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;