import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from '../assets/moldura-perfil.png';
import { fadeIn } from '../variants';
const Banner = () => {
  return (
  
  <section  className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text*/ }
        
        <div className='flex-1 text-center font-secondary lg:text-left'>
        
          < motion.h1 variants={fadeIn('up',0.3)} initial='hidden' 
          whileInView={'show'} viewport={{once:false,amount:0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Kevin <span>DEV</span>
          </motion.h1>
        
          <motion.div variants={fadeIn('up',0.6)} initial='hidden' 
          whileInView={'show'} viewport={{once:false,amount:0.7}}  className='mb-6 text-[36px] lg;text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
        
            <TypeAnimation sequence={[
             'Front End Engineer',
          2000,
             'Mobile Engineer',
          2000,
             'Full-Stack Engineer',
          2000,
        ]}
        speed={50}
        className='text-accent'
        wrapper='span'
        repeat={Infinity}
        />
        
          </motion.div>
         
          <motion.p variants={fadeIn('up',0.5)} initial='hidden' 
          whileInView={'show'} viewport={{once:false,amount:0.7}} 
           className='mb-8 max-w-lg mx-auto lg:mx-0'>
          New Generation of Software Engineering.
           </motion.p>
           
           <motion.div variants={fadeIn('up',0.7)} initial='hidden' 
          whileInView={'show'} viewport={{once:false,amount:0.7}}  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
           <a href='https://wa.me/message/5T5KCG3OVEYSJ1'><button className='btn btn-lg'>Contact Me</button></a>  
             <a href='https://github.com/Kevintavares33' className='text-gradient btn-link'>My Portifolio</a>
           </motion.div>
        
        {/* social m*/ }
        <motion.div variants={fadeIn('up',0.8)} initial='hidden' 
          whileInView={'show'} viewport={{once:false,amount:0.7}} 
           className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          
         <a href='https://github.com/Kevintavares33'>
            <FaGithub/>
          </a>
          
          <a href='https://www.instagram.com/kevintavares_6/'>
            <FaInstagram/>
          </a>
          
          <a href='https://www.linkedin.com/in/kevin-tavares-473091199/'>
            <FaLinkedin/>
          </a>

          <a href='https://wa.me/message/5T5KCG3OVEYSJ1'>
            <FaWhatsapp/>
          </a>
        
        </motion.div>

        </div>
           {/* image*/ }
           <motion.div variants={fadeIn('down',0.5)} initial='hidden' 
          whileInView={'show'}   className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt='perfil-color ' className='w-[270px] h-[400px]'/>
           </motion.div>
      </div>
    </div>
  </section>
)};

export default Banner;
