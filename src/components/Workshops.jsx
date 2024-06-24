import React from "react";
import workshop1 from './images/workshop1.jpg'
import workshop2 from './images/workshop2.jpg'
import workshop3 from './images/workshop3.jpg'
function Workshops(){
    return (
        <>
        <div id="container" className="pt-[70px] text-white text-lg  bg-sky-600  bg-cover bg-center  w-full pb-10" >
            <div className=" ">
            <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-bold items-center  '>
           
           <div className=' text-slate-900 '>WORKSHOPS</div>
           </div>
           <div className="pt-3">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(90vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <img className='  pt-8 flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop1} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[5vh] font-semibold text-slate-900">3D PRINTING WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle; it's about gaining a deeper understanding of aviation safety and the meticulous procedures used to prevent future tragedies.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle.</p>
             </div> 
           </div>
             <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={workshop1} alt=""/>
           </div>
           </div>
           
           <div className="pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <img className='  pt-8 flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop2} alt=""/>
           <img className='hidden md:block w-[33%] m-auto rounded-2xl hover:scale-105  shadow-xl shadow-black'src={workshop2} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[5vh] font-semibold text-slate-900">UAV WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle; it's about gaining a deeper understanding of aviation safety and the meticulous procedures used to prevent future tragedies.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle.</p>
             </div>
           </div>
           </div>
           </div>

           <div className="pt-10">
           <div id='contents' className='flex-row md:flex justify-center items-center  md:min-h-[calc(100vh-70px)] shadow-2xl shadow-slate-900 w-[90%] m-auto bg-sky-700 rounded-2xl '>
           <img className='  pt-8 flex justify-center items-center md:hidden w-[60%] rounded-2xl hover:scale-105 m-auto  shadow-2xl shadow-cyan-300'src={workshop3} alt=""/>
           <div className='md:w-2/4 flex-row md:space-y-[10vh] '> 
           <div>
            <div className="flex justify-center text-center md:text-[5vh] font-semibold text-slate-900">CAN-SAT WORKSHOP</div>
             <p className='hidden md:block pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto md:m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle; it's about gaining a deeper understanding of aviation safety and the meticulous procedures used to prevent future tragedies.</p>
             <p className='md:hidden pt-7 lg-pt-0 flex justify-center md:w-[90%] items-center text-justify m-auto w-[80%]'>Put your detective skills to the test at the Aerospace Society's "Air Crash Investigation" event!  This thrilling simulation throws you into the heart of an airplane disaster. Analyze flight recorder data, decipher cryptic weather reports, and interview virtual witnesses.  Piece by piece, you'll unravel the mystery behind the crash, using your knowledge of aerodynamics and human factors to identify the cause.  This immersive event isn't just about solving a puzzle.</p>
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