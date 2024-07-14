import React from "react";

import ach1 from "./gallery/ach1.jpg"
import ach2 from "./gallery/ach2.jpg"
import ach3 from "./gallery/ach3.jpg"


function About(){
    return (
        <>
        <div id="container" className=" bg-[url('./components/gallery/photo6.jpg')] max-w-full h-[500px] text-white text-lg bg-white  bg-cover bg-center bg-sky-500 w-full md:min-h-[calc(100vh)] md:bg-[url('./components/gallery/photo12.jpg')]" >
            <div className="flex justify-center text-center items-center text-[5vh] md:text-[10vh] pt-[20vh] text-slate-900 font-bold " style={{fontFamily:'Cairo Play'}}>ABOUT AEROSOC</div>          
        </div>
        <div className="bg-sky-600 text-white">
        <div className="pt-10">
           <div id='contents' className='flex md:flex justify-center items-center  md:min-h-[calc(90vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           
           <div className='md:w-[90%] flex-row md:space-y-[10vh] '> 
           <div className="w-[90%] m-auto flex justify-center text-[50px] pt-[10px] text-slate-900 font-semibold  md:text-[10vh] "  style={{fontFamily:'Cairo Play'}}>ACIEVEMENTS -</div>
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(90vh-70px)]  shadow-slate-900  m-auto pt-8'>
           <img className='   flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={ach1} alt=""/>
           <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={ach1} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center text-[2vh] md:text-[6vh] font-semibold text-slate-900">Best Aerodynamic Analysis in ADC 2022</div>
            
             </div>
           </div>
           </div>
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(90vh-70px)]  shadow-slate-900  m-auto pt-10'>
            
           <img className='   flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={ach2} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center text-[2vh] md:text-[6vh] font-semibold text-slate-900">Best Fabrication Report in ADC 2021</div>
             </div> 
           </div>
             <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={ach2} alt=""/>
           </div>
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(90vh-70px)]  shadow-slate-900  m-auto'>
           <div className="pt-8 md:hidden"><img className='   flex justify-center items-center  w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={ach3} alt=""/></div>
           <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={ach3} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[6vh] font-semibold text-[2vh] text-slate-900 pb-5">Exhibition in Defexpo 2022</div>
            
             </div>
           </div>
           </div>
           </div>
           
           
           </div>
           </div>
            <div className="pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           
           <div className='md:w-[90%] flex-row md:space-y-[10vh] '> 
           <div>
           <div className="w-[90%] m-auto flex text-center justify-center text-[50px] pt-[10px] text-slate-900 font-semibold"  style={{fontFamily:'Cairo Play'}}>HISTORY -</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[100%] items-center text-justify m-auto md:m-auto w-[80%] text-2xl pb-8'>The Aerospace Society at BIT Mesra, has a rich history that aligns with the institution's commitment to fostering innovation and excellence in the field of aerospace engineering. Here's a detailed history:

Establishment: The Aerospace Society at BIT Mesra was founded with the aim of providing a platform for students interested in aerospace and aeronautical engineering. The society's inception was driven by the increasing interest among students in aerospace technology and the need for a dedicated forum to nurture this interest.
<br></br>
<br></br>
Competitions and Conferences: The Aerospace Society at BIT Mesra has a history of actively participating in national. Teams from the society have competed in events such as the Aero Design Challenge, SAE Aero Design Competition. These competitions have provided a platform for students to showcase their skills and innovations.
<br></br>
<br></br>
Collaborations: Over the years, the society has established collaborations with various aerospace organizations and institutions. These partnerships have facilitated knowledge exchange, internships, and research opportunities for students. Notable collaborations include those with ISRO, DRDO, and leading aerospace companies.
 </p>
   <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%] pb-8'>The Aerospace Society at BIT Mesra, has a rich history that aligns with the institution's commitment to fostering innovation and excellence in the field of aerospace engineering. Here's a detailed history:

Establishment: The Aerospace Society at BIT Mesra was founded with the aim of providing a platform for students interested in aerospace and aeronautical engineering. The society's inception was driven by the increasing interest among students in aerospace technology and the need for a dedicated forum to nurture this interest.
<br></br>
<br></br>
Competitions and Conferences: The Aerospace Society at BIT Mesra has a history of actively participating in national. Teams from the society have competed in events such as the Aero Design Challenge, SAE Aero Design Competition. These competitions have provided a platform for students to showcase their skills and innovations.
<br></br>
<br></br>
Collaborations: Over the years, the society has established collaborations with various aerospace organizations and institutions. These partnerships have facilitated knowledge exchange, internships, and research opportunities for students. Notable collaborations include those with ISRO, DRDO, and leading aerospace companies.</p>
             </div>
           </div>
           </div>
           </div>
            
            
            </div>  
            
        </>
    )
}

export default About