import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { fadeIn } from '../variants';


const Services = () => {
  const Service = [
    {
      name:'Front-end Web Engineer',
      description: 'Full-Stack React + Java focus on Front-End today I am responsible for developing new components and maintaining existing codes. consuming GOV APi according to the proposed system design',
      Link: 'Learn More'
    },

    {
      name:'Mobile Engineer',
      description: 'l Currently focused on Mobile development, I currently have 2 React Native projects developed, one of them consuming the weather API, to manipulate data with axius and display it on the screen with React Native',
      Link: 'Learn More'
    }

  ]
  return (
    <section className='section mb-[70px]'  id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text & img/*/}
            <motion.div 
                  variants={fadeIn ('left',0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.3}}
                  className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
              <h2 className='h2 text-accent mb-6'>What I do.</h2>
              <h3 className='h3 max-w-[455px] mb-16'>
              I develop in react .js for web applications,
               I am currently dedicated to Mobile development
                in React Native swift and kotlin.
              </h3>
              <button className='btn btn-sm'>See my Work</button>
            </motion.div>
              
              {/*services /*/}
               <div className='flex-1'>
                 {/*service list/*/}
                 <div>
                 
                  {Service.map((service, index)=> {
                    const {name, description , Link} = service;
                      return (
                        
                        <div className='border-b border-white/20 h-[146px mb-[38px] flex]' key={index}>
                           
                           <div className='max-w-[476px]'>
                           <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name}</h4> 
                           <p className='font-secondary leading-tight'>{description}</p>
                           </div>
                          
                          <div className='flex flex-col flex-1 items-end '>
                            <a href='https://github.com/Kevintavares33' className='bnt w-9 h-9 mb-[42px] flex justify-center items-center'>
                              <BsArrowUpRight/>
                            </a>
                            <a href='https://www.linkedin.com/in/kevin-tavares-473091199/' className='text-gradient'>{Link}</a>
                          </div>
                        </div>
                      )
                  })}
                 </div>
               </div>
        </div>

      </div>

    </section>
  )
}

export default Services;
