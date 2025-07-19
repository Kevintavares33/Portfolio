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
            I'm a Software Engineer with a strong background in full-stack development, currently specializing in back-end systems using Java and scalable architectures.
        </h3>
        <p className='mb-6'>
            Throughout my journey, I've worked across critical domains like healthcare,
            social security, and payment systems, delivering robust solutions in both web and mobile platforms. I'm passionate about building efficient and secure systems, modernizing legacy platforms, and integrating with financial APIs, cloud services, and external systems.

            Certified as a Professional Front-End Developer by Meta (Facebook),
            I bring a complete engineering perspective — from intuitive UIs to resilient back-end services.
        </p>
       {/* stats*/ }
       <div className='flex '>
           <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
                <CountUp start={0} end={5} duration={5}/>  : null}
            </div>

            <div className='font-primary text-sm tracking-[2px]'>Projects Freelancer in<br/> 
            Production 
            </div>
            <div className='flex gap-x-8 items-center ]'>
             <a href='https://wa.me/556193030000'><button className='btn btn-lg mt-[20px]'>contact Me</button></a> 
              <a href='https://github.com/Kevintavares33' className='text-gradient btn-link mt-[14px]'>
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
