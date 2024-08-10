import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import wall from '../assets/wallPaper.png'
import Navbar from './Navbar'
import img from '../assets/download.png'


function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <div className='flex flex-col'>
      <div className=''>
        <img className='absolute h-[90vh] w-[90vw] rounded-sm' src={img} alt="" />

        <div className='font-PlayfairDisplay py-5 border-l-4 border-custom-gray relative text-custom-gray ml-[3rem]  font-bold text-8xl tracking-tight mr-[3rem] mt-[8%] leading-none' > 
          <p className=' px-5'>
            <span className='bg-custom-gray rounded-r-full px-5 -mr-4 text-black '>Research</span> existing 
            </p>
          <p>

          <p className='px-5 my-5'>
            <span className='bg-custom-gray rounded-r-full px-5 text-black'>establishments</span>
          <br />
            </p>
            <p className='-mt-2'>

          <span className=' px-10'>anywhere...</span>
            </p>
          </p>
        <p className='mt-5'>
        <span className='border-b pb-5 relative outline-offset-2 outline-custom-gray text-3xl text-custom-gray tracking-tighter font-PlayfairDisplay font-thin' data-aos="zoom-in-down">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reliable helpers for your home, office or industry.</span>
        </p>
        </div>

      </div>
    </div>
  )
}

export default Home
