import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import imageperfil from '../assets/image.png';
import { fadeIn } from '../variants';
const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
     <div className='container mx-auto'>
    
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20'>

      {/* img*/ }
      <motion.div
      variants={fadeIn ('right',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='items-center' >
       
        <img className='flex-1 bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top ' src={imageperfil} alt='about' />
      </motion.div>
      
      {/* text*/ }
      <motion.div 
       variants={fadeIn ('left',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.3}}
      
      className='flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>
          I'm a Software Engineer , specialist in front-end development certified by Meta (Facebook). 
        </h3>
        <p className='mb-6'>
        I am currently a Full-Stack Engineer in a government agency in my country, <br/>
         where we serve around 2 thousand monthly accesses.
        </p>
       {/* stats*/ }
       <div className='flex '>
           <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
                <CountUp start={0} end={4} duration={5}/>  : null}
            </div>

            <div className='font-primary text-sm tracking-[2px]'>Projects Freelancer in<br/> 
            Production 
            </div>
            <div className='flex gap-x-8 items-center ]'>
              <button className='btn btn-lg mt-[20px]'>contact Me</button>
              <a href='#' className='text-gradient btn-link mt-[14px]'>
                My Portifolio
              </a>
            </div>
           </div>
       </div>
      </motion.div>
    </div>
  </div>
    </section>
  )
};

export default About;
