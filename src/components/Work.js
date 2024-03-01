import React from 'react';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portifolio-img3.png';
import Img4 from '../assets/portifolio-img4.png';
import Img5 from '../assets/portifolio-img5.png';
import Img6 from '../assets/portifolio-img6.png';
const Work = () => {
    return(
      <section className='section' id='work'>
          <div className='container mx-auto mt-[150px]'>
              <div className='flex flex-col lg:flex-row gap-x-10'>
                  <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                    {/* text*/}
                    <div>
                      
                      <h2 className='h2 leading-tight text-accent text-[30px]'>My<br/> Latest 
                      Work.
                      </h2>
                      <p className='max-w-sm mb-10 text-[17px]'> 
                      Web and Mobile App Development
                      </p>
                      <button className='btn btn-sm'>View all projects</button>
                      </div>
        
                     
                 
                  </div>

                  {/*imagens coladas inicia aqui*/}
                 <div className='grid grid-cols-2 gap-4'>
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                          {/*img*/}
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='port-foto1'/>
                            
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                            <a href='https://teste-insta-buy.vercel.app/'> <span className='text-gradient'>Front end Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                  <a href='https://teste-insta-buy.vercel.app/'><span className='text-3x1 text-white'> e-commerce InstaBuy</span></a>
                           </div>
                     
                     </div>
                    
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                          {/*img*/}
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='port-foto1'/>
                            
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                           <a href='https://travel-world-blue.vercel.app/'><span className='text-gradient'>Front End Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                               <a href='https://travel-world-blue.vercel.app/'> <span className='text-3x1 text-white'>Travel World</span></a>   
                           </div>
                     
                     </div>
                     
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                          {/*img*/}
                           <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt='port-foto1'/>
                          
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                 <a href='https://will-adv.vercel.app/'>  <span className='text-gradient'>Front End Engineer</span> </a> 
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                               <a href='https://will-adv.vercel.app/'><span className='text-3x1 text-white'>Dr Will Batista</span></a>
                           </div>
                     
                     </div>
                     
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                          {/*img*/}
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt='port-foto1'/>
                            
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                            <a href='https://churrascometro-sage.vercel.app/'> <span className='text-gradient'>Front End Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                  <a href='https://churrascometro-sage.vercel.app/'><span className='text-3x1 text-white'>Project Title</span></a>
                           </div>
                     
                     </div>

                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                          {/*img*/}
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img6} alt='port-foto1'/>
                            
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                            <a href='https://github.com/Kevintavares33/appSenhas'> <span className='text-gradient'>Mobile Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                  <a href='https://github.com/Kevintavares33/appSenhas'><span className='text-3x1 text-white'>App PassWords</span></a>
                           </div>
                     
                     </div>
                    
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl'>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                        </div>
                        
                          {/*img*/}
                           
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='port-foto1'/>
                          
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                           <a href='https://github.com/Kevintavares33/App-Weather-api'> <span className='text-gradient'>Mobile Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                <a href='https://github.com/Kevintavares33/App-Weather-api'>  <span className='text-3x1 text-white'>Weather API</span></a> 
                           </div>
                     
                     </div>
                    
                    {/*init*/}
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl '>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                        </div>
                        
                          {/*img*/}
                           
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='port-foto1'/>
                          
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                           <a href='https://github.com/Kevintavares33/App-Weather-api'> <span className='text-gradient'>Mobile Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                <a href='https://github.com/Kevintavares33/App-Weather-api'>  <span className='text-3x1 text-white'>Weather API</span></a> 
                           </div>
                     
                      </div>

                       {/*init*/}
                     <div className='group relative overflow-hidden border-2 
                     border-white/50 rounded-xl '>
                        {/*overlay*/}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                        </div>
                        
                          {/*img*/}
                           
                          <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='port-foto1'/>
                          
                            {/*pretittle*/}
                            
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 
                                            transition-all duration-500 z-50'> 
                           <a href='https://github.com/Kevintavares33/App-Weather-api'> <span className='text-gradient'>Mobile Engineer</span></a>
                            </div>
                            
                                 {/*tittle*/}
                                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                                                 transition-all duration-700 z-50'>
                                <a href='https://github.com/Kevintavares33/App-Weather-api'>  <span className='text-3x1 text-white'>Weather API</span></a> 
                           </div>
                     
                     </div>


                     

                </div>
              </div>
          </div>
      </section>
    
    )};

export default Work;
