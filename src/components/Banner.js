import React from 'react';
import Image from '../assets/banner2.png';

import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
  return (
  <section  className='section' id='home'>
  <div className='container mx-auto'>
    <div>

    {/* text*/ }
    <div> 
      <h1>
        Kevin <span>Dev</span>
      </h1>
    </div>
    <div className='mb-6 text-[36px] lg:text-[60px] front-secondary front-semibold uppercase leading-[1]'>
      <span className='text-white mr-2'>I am a</span>
      {/* animations */}
      <TypeAnimation sequence={[
        'Front-End Engineer ',
        2000,
        'Mobile Engineer',
        2000,
        'FullStack Engineer',
        2000
      ]}
      speed={50}
      className='text-accent'
      wrapper='span'
      repeat={Infinity}
      />
   
   </div>
     {/* IMG */ }
   
     <div>
    <img className='w-[250px] h-[300px]' src={Image}alt='foto-edit '/>
     </div>
    
    </div>

  </div>
  
  </section>
)};

export default Banner;
