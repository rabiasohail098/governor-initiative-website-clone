
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Hero = () => {
  return (
   
  
          <div className="relative z-0 w-full overflow-hidden  bg-cover __className_092cb9nter" 
         style={{ backgroundImage: "url(/images/bg.png)" }}>  
      
      {/* Overlay */}
      <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>
    
      {/* Content */}
      <div className=" z-10 text-center flex justify-end items-end h-full">
       <div className='max-w-full mb-[20px]'> 
        <h2 className="font-bold text-[60px] text-blue-900">Governor Sindh</h2>
        <h2 className='text-slate-500 text-[40px] text-left mt-[-20px]'>Kamran Khan Tessori</h2>
        <br />
        <h3 className='text-blue-500 text-[40px] font-bold text-left'>Certified Cloud</h3>
        <h3 className='text-blue-500 text-[40px] font-bold text-left'>Applied Generative AI</h3>
        <h3 className='text-blue-500 text-[40px] font-bold text-left'>Engineer (GenEng)</h3>
        <p className='text-blue-800 text-[20px] font-bold text-left'>Earn up to 55.000 / month</p>
        <p className='text-blue-800 text-[20px] font-bold text-left'>Now admissions are open in <br />
        Hyderabad</p>
        <br />
        <div className='flex gap-10'>
          <Link href="/apply" className='bg-blue-700 p-3 text-white font-bold text-[15px] text-center w-[150px]'><button className=' text-center w-full'>APPLY NOW</button></Link>
          
          <button className='text-slate-400 text-[15px] font-semibold'><span className='text-blue-800 text-[20px] font-extrabold'>562,143 </span><br />Accepted Applications</button>
        </div>
        </div>
        <div className='img pt-[30px]'>
        <Image 
          src="/images/kmt.png"
          alt="K.K.T"
          width={700}
          height={800}
          className="h-full"
        />
        </div>
      </div>
  
      </div>
  );
};

export default Hero;
