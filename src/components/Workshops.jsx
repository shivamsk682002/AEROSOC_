import React from "react";
import workshop1 from './images/workshop1.jpg'
import workshop2 from './images/workshop2.jpg'
import workshop3 from './images/workshop3.jpg'
import {Link,NavLink} from 'react-router-dom'
function Workshops(){
    return (
        <>
        <div id="container" className="pt-[70px] text-white text-lg  bg-sky-600  bg-cover bg-center  w-full pb-10" >
            <div className=" ">
            <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-bold items-center  '>
           
           <div className=' text-slate-900 '>WORKSHOPS</div>
           </div>

           <div className="pt-10 md:pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <div className="pt-6"> <img className='   flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop2} alt=""/></div>
           <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={workshop2} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[6vh] font-bold text-slate-900 pt-6">UAV WORKSHOP</div>
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

           <div className="pt-3">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(90vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <div className="pt-8"><img className='  flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop1} alt=""/></div>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="pt-3 md:pt-0 flex justify-center text-center md:text-[5vh] font-semibold text-slate-900">3D PRINTING WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>With the 3D printing workshop, we aim to teach the participants about fascinating world of additive manufacturing.
              We have well equiped lab environment, these workshops cater to beginners as well as those with some prior 
              knowledge of 3D printing technology. The objectives of this workshop are- Introduction to 3D Printing Technology, Hands-On Experience,
              Design and Creation. And with this we allow the participants to benifit from from what we have, this workshop does not limit to only 
              aeronautics design. By the end of this workshop you will be able to design anything you think of imagine be it of any field.
            </p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>With the 3D printing workshop, we aim to teach the participants about fascinating world of additive manufacturing.
              We have well equiped lab environment, these workshops cater to beginners as well as those with some prior 
              knowledge of 3D printing technology. The objectives of this workshop are- Introduction to 3D Printing Technology, Hands-On Experience,
              Design and Creation. And with this we allow the participants to benifit from from what we have, this workshop does not limit to only 
              aeronautics design. By the end of this workshop you will be able to design anything you think of imagine be it of any field.</p>
              
             </div> 
           </div>
             <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={workshop1} alt=""/>
           </div>
           </div>
           
           

           <div className="pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <img className='  pt-8 flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop3} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[5vh] font-semibold text-slate-900">CAN-SAT WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>A CanSat is a type of sounding rocket payload used to teach space technology. It is similar to the technology used in miniaturized satellites. 
              And with this CAN-SAT workshop we want our paricipants to explore the world of rocketry though our short course. In this we will introduce our participants to Satellite Technology
              like communication systems, sensors, power supply, and structural design. We will also show a Hands-On Construction to design, build, and test CanSats. We will also discuss about
              Payload Development and how we specific mission payload into their CanSat. And finally we will lauch it then collect and analyze data transmitted by their satellites during flight.
              By taking this workshop you will taking a step into the vast world of Rockets and Sattelites and joining us in this woundeful journey.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>A CanSat is a type of sounding rocket payload used to teach space technology. It is similar to the technology used in miniaturized satellites. 
              And with this CAN-SAT workshop we want our paricipants to explore the world of rocketry though our short course. In this we will introduce our participants to Satellite Technology
              like communication systems, sensors, power supply, and structural design. We will also show a Hands-On Construction to design, build, and test CanSats. We will also discuss about
              Payload Development and how we specific mission payload into their CanSat. And finally we will lauch it then collect and analyze data transmitted by their satellites during flight.
              By taking this workshop you will taking a step into the vast world of Rockets and Sattelites and joining us in this woundeful journey.</p>
             </div> 
           </div>
             <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={workshop3} alt=""/>
           </div>
           </div>
           
            </div>
        </div>
        </>
    )
}

export default Workshops