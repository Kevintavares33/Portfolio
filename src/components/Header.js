import React from 'react';
import logo from '../assets/logo.svg';
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
  
      <a href='https://wa.me/message/5T5KCG3OVEYSJ1'> <button className='btn btn-sm'>Work with Me</button></a>
      </div>

    </div>
    
    </header>
)};

export default Header;
