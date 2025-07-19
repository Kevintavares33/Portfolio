import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { fadeIn } from '../variants';


const Services = () => {
  const Service = [
    {
      name:'Back-end Engineer',
      description: 'Development of robust microservices with Java, Spring Boot, Quarkus, and .NET 8\n' +
          '\n' +
          'Integration with payment APIs and POS systems (e.g., VERO, Mercado Livre)\n' +
          '\n' +
          'Event-driven architecture with Kafka and RabbitMQ\n' +
          '\n' +
          'Cloud-native solutions with Azure and AWS\n' +
          '\n' +
          'SQL performance optimization in PostgreSQL and SQL Server',
      Link: 'Learn More'
    },

    {
      name:'Front-end Engineer',
      description: 'Certified by Meta as a Professional Front-End Developer\n' +
          '\n' +
          'Built modern UIs with React.js, Vue.js (Quasar), and Tailwind CSS\n' +
          '\n' +
          'Experience with institutional design systems, accessibility, and responsive layouts',
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
                  I specialize in back-end development with a strong focus on microservices architecture — designing,
                  building, and maintaining scalable and reliable systems for high-demand environments...
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
