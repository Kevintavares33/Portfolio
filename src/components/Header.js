import React from 'react';
import logo from '../assets/logo.svg';
import Resume from '../assets/ResumeKevinTavares.pdf'
const Header = () => {
  return (
  <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href='#'>
  
          <img src={logo} alt='logo.svg'/>
        </a>
        {/* button */}
  
      <a href={Resume} download='Resume'> <button className='btn btn-sm'>Donwload Curriculum</button></a>
      </div>

    </div>
    
    </header>
)};

export default Header;
