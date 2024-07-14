import React from "react";
import { useState } from 'react'
import img1 from'../images/Aerosoc logo.jpg'
import uav from'../images/uav.jpg'
import aircrash from'../images/aircrash.jpg';
import Snapshots from '../components/Snapshots'
import ContactUs from '../components/Email'
import {Link,NavLink} from 'react-router-dom'
import workshop2 from './images/workshop2.jpg'

function Body(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return <>
    <div id="container" className=" text-white text-lg  bg-sky-600  bg-cover bg-center  w-full" >
    <div id="container" className=" text-white text-lg bg-white bg-[url('./images/Space.jpg')] bg-cover bg-center  w-full " >
       
       <div className=' flex flex-col justify-ar '>
       <div id="homepage   " className="flex flex-col justify-around h-[calc(100vh-60px)] text-white text-lg bg-[url('./images/Space.jpg')] bg-cover bg-center mt-[10vh] "  >
         <div className='flex justify-center md:text-[8vh] padding p-4 font-semibold sm:text-3xl m-auto w-[90%] text-3xl '>
           <div className=' padding pr-4'>AEROSPACE</div>
           <div className='text-sky-600'> SOCIETY</div>
           </div>
         <br />
         
         <div id="logo" className='flex justify-center'>
           <img  className=" size-[30vh] rounded-full"src={img1} />
         </div> 
         <br />
         <div className='flex justify-center text-2xl font-serif m-auto w-[90%] text-center items-center '>Where Passion for Flight Takes Wing !</div> 
         <br />
         <div className='flex justify-center'>
         <a href="#about"><button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:text-xl">Let's Begin !</button></a> 
         </div> 
         <br />
         <br />   
         </div>  
         </div>
       </div>
       <div id='about' className=' bg-sky-600  w-full text-white text-lg '>
         <div className=' text-5xl flex justify-center md:text-[10vh] h-[100px] padding  font-semibold items-center md:pt-[110px] '>
           <div className=' padding pr-4 text-slate-900 underline '>About</div>
           <div className=''> us</div>
           
           </div>
           
           <div className=''>
           <div id='content' className='flex-row md:flex justify-center items-center md:min-h-[calc(100vh-70px)] lg-pt-0 pt-7'>
             < img className=' flex justify-center  items-center m-auto md:w-[40%] w-[70%] object-cover rounded-full border-8 border-gray-300 shadow-2xl shadow-zinc-950  hover:scale-105' src={uav} alt="" />
           <div className=' md:w-2/4 w-full'>
             <p className='hidden md:block flex justify-center w-[70%]  items-center m-auto text-justify'>We are a group more than 30 motivated, inter-disciplinary engineering students of Birla 
              Institute of Technology, Mesra, who take on aerospace challenges and participates in 
              design competitions such as SAE Aero. The platform to showcase the extraordinary 
              talents of engineering students while encouraging them to develop innovative ideas 
              towards development of improved aerospace systems. The club is dedicated to the 
              design, construction, and operation of Unmanned Aerial Vehicles (UAVs). Our club is a 
              haven for aspiring aerospace engineers and enthusiasts who share a passion for 
              aviation and cutting-edge technology
               </p>
               <p className='block md:hidden flex justify-center md:w-[70%] w-[80%] items-center m-auto text-justify pt-7 md:pt-0'>The Aerospace Society is a dynamic and innovative college club dedicated to the design, construction, and operation of Unmanned Aerial Vehicles (UAVs). Our club is a haven for aspiring aerospace engineers and enthusiasts who share a passion for aviation and cutting-edge technology. We engage in hands-on projects that encompass the entire lifecycle of UAV development, from initial concept and design to fabrication, testing, and flight operations.
                 </p>
                 
           </div>
           
           
           </div>
           <div className='flex flex-row justify-center m-auto pb-10 pt-10 md:pt-0'>
           <NavLink to="/about" ><button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full text hover:text-xl ">Know More</button></NavLink>
           </div>
           </div>
           
         </div >
         
           <div id='events' className='bg-white bg-gradient-to-r from-slate-900 to-slate-800 ... rounded-3xl w-[99%] m-auto'>
         <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-semibold items-center md:pt-[50px] '>
           <div className=' padding pr-4  '>Upcoming</div>
           <div className='text-sky-400  underline'> Event</div>
           
           </div>
           <div className="pt-10 md:pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)]'>
           <div className="pt-6"> <img className='   flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop2} alt=""/></div>
           <img className='hidden md:block w-[30%] m-auto rounded-2xl hover:scale-105  shadow-xl  shadow-2xl shadow-cyan-300 'src={workshop2} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[6vh] font-bold text-sky-400 pt-6">UAV WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>With this UAV workshop we aim to to offer all our participants with a in depth expelation about UAV (Unmanned Aerial Vehicle),
              including design, operation and application of drones. Our objectives are to introduce to the UAV technology, the components of UAVs including airframes, propulsion systems 
              and flight control systems. We also will teach about UAV Design and Assembly like UAV design considerations, assembly techniques, and customization options.
              And also explain the application of UAVs such as aerial photography, agriculture, surveying, mapping, search and rescue, and environmental monitoring.
              You the participant of this workshop will benifit from this skill devlopment and can make advancements in this department pursuing in UAV operations, 
              aerial robotics, or related fields.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>With this UAV workshop we aim to to offer all our participants with a in depth expelation about UAV (Unmanned Aerial Vehicle),
              including design, operation and application of drones. Our objectives are to introduce to the UAV technology, the components of UAVs including airframes, propulsion systems 
              and flight control systems. We also will teach about UAV Design and Assembly like UAV design considerations, assembly techniques, and customization options.
              And also explain the application of UAVs such as aerial photography, agriculture, surveying, mapping, search and rescue, and environmental monitoring.
              You the participant of this workshop will benifit from this skill devlopment and can make advancements in this department pursuing in UAV operations, 
              aerial robotics, or related fields.</p>
              
              <div className='flex flex-row justify-center m-auto pb-10 pt-10 md:pt-6'>
           <NavLink to="https://unstop.com/p/cfd-symposium-birla-institute-of-technology-mesra-1069516" ><button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full text hover:text-xl ">Register</button></NavLink>
           </div>
             </div>
           </div>
           </div>
           </div>
         </div>
         <div id='events' className=' bg-sky-600  w-full text-white text-lg  '>
         <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-semibold items-center md:pt-[110px] '>
           <div className=' padding pr-4  '>Our</div>
           <div className='  text-slate-900 underline'> Events</div>
           
           </div>
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] '>
           <img className='  pt-8 flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={aircrash} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle; it's about gaining a deeper understanding of aviation safety and the meticulous procedures used to prevent future tragedies.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle.</p>
             </div>
             <div className='flex flex-row justify-center m-auto pb-10 pt-10 '>
             <NavLink to="/events" ><button className=" hover: bg-blue-600 text-white font-bold py-2 px-[5vh] rounded-full text hover:text-xl">See more events!</button></NavLink>
           </div>
           </div>
             <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={aircrash} alt=""/>
             

           </div>
         </div>
         <div  id='snapshots' className='bg-white bg-gradient-to-r from-slate-900 to-slate-800 ... rounded-3xl w-[99%] m-auto ' >
         <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-semibold items-center md:pt-[50px] '>
           
           <div className='text-sky-400   underline'> Snapshots</div>
           
           </div>
           <div id='contents' className='flex-row flex justify-center items-center  md:min-h-[calc(100vh-100px)]  pt-8 md:pt-10 '>
             <Snapshots className=''/>
             </div>

             <div className='flex flex-row justify-center m-auto pb-10 pt-10 '>
            
           <button className=" hover: bg-slate-900 text-white font-bold py-2 px-[5vh] rounded-full text hover:text-slate-900 md:hidden">See more !</button> 
           </div>

         </div>
         <div id='contact' className=' bg-sky-600  w-full text-white text-lg  '>
         <div className=' text-2xl m flex justify-center md:text-[8vh] h-[70px] padding  font-semibold items-center md:pt-[50px] '>
           
           <div className='  text-slate-900 pt-3 md:pt-0 md:underline flex justify-center text-center md:hidden'>
             <p></p>Connect with us for
             <br  /> Collaborations/Donations!</div>
             <div className='  text-slate-900 pt-3 md:pt-0 md:underline flex justify-center text-center hidden md:block'>
             <p></p>Connect with us for
              Collaborations/Donations!</div>
           
           </div>
           
           
           <div id='contents' className=' flex md:min-h-[calc(100vh-70px)]  pt-8 md:pt-0 '>
              <ContactUs/>
             </div>
         </div>
         </div>
    </>
}

export default Body