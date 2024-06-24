import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faGripLines, faGripLinesVertical, faLocationDot, faPhone, faPieChart, faXmark,} from '@fortawesome/free-solid-svg-icons'
import img1 from'../images/Aerosoc logo.jpg'
import {Link,NavLink} from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return <div className=" text-white text-lg  bg-sky-600  bg-cover bg-center  w-full"><footer  className=' bg-black   text-white text-lg rounded-2xl w-[99%] m-auto'>
    <div className=' flex-row md:flex pb-2'>
  <div id="logo" className='flex flex-col justify-center text-center items-center md:w-[30%]  pt-[2vh] md:pt-[5vh] m-auto'>
    <img  className=" size-[20vh] rounded-full"src={img1} />
    
    <div className=' font-semibold font-serif mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>Where Passion for Flight Takes Wing !</div>
  </div>
  <div className='md:w-[60%] pt-[2vh] md:pt-[15vh] '>
    <ul className='  md:flex md:space-x-16 space-y-3 md:space-y-0 justify-center text-center'>
    <li ><NavLink  to="/" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>Home</NavLink></li>
      <li ><NavLink  to="/events" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>Events</NavLink></li>
      <li ><NavLink  to="/workshops" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>Workshops</NavLink></li>
      <li ><NavLink  to="/team" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>Team</NavLink></li>
      <li ><NavLink  to="/gallery" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>Gallery</NavLink></li>
      <li ><NavLink  to="/about" className={({isActive})=> `hover:text-sky-600 hidden md:block ${isActive?"text-sky-600":" hover:text-sky-600"}`}>About Us</NavLink></li>
      
    </ul>
  </div>
  
  </div>
  <div className='bg-blue-600 h-[1px] '></div>
  <div className='md:flex pb-2'>
    <div id='find us' className='md:w-[30%] m-auto flex-col justify-center items-center w-[80%] '>
      <div>< iframe className="h-[30vh]  pt-[4vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.3338333823535!2d85.43732607410095!3d23.412304978902526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1718652182424!5m2!1sen!2sin"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      <div className='flex pt-3 md:pt-0'>
      <div className=' text-2xl flex items-center pr-2'><FontAwesomeIcon icon={ faLocationDot} /></div>
      <div>
      <p  className=' text-blue-600 underline'>Find Us !</p>
      <p> Birla Institute of Technology, Mesra, Ranchi, Jharkhand, 835215</p>
      </div>
    </div>
    </div>
    <div id='contact' className='md:w-[30%] w-[80%] flex md:justify-center md:items-center  mx-auto md:mx-0 mt-[2vh] md:mt-[0vh] '>
      <div className='text-2xl pr-2'>
      <FontAwesomeIcon icon={faPhone} />
      </div>
      
      <div className='w-[30%] '> <p className=' text-blue-600 underline'>Call Us</p>
        <p>7004806766</p>
      </div>
    </div>
    <div id='email' className='md:w-[30%] w-[80%] flex md:justify-center md:items-center mx-auto md:mx-0 mt-[2vh] md:mt-[0vh]'>
      <div className='text-2xl pr-2'>
      <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className='w-[30%] '> <p className=' text-blue-600 underline'>Mail Us</p>
        <p>aerosoc@bitmesra.ac.in</p>
      </div>
    </div>
  </div>
  <div className='bg-blue-600 h-[1px]'></div>
  <div className='w-[90%] m-auto pt-2 pb-2 md:flex text-center'>
    <div className="md:w-[60%] ">
    <div className='hidden md:block'>Developed by Shivam | 2024 © Aerospace Society BIT MESRA</div>
    <div className='md:hidden'>Developed by Shivam</div>
    <div className='md:hidden'>2024 © Aerospace Society BIT MESRA</div>
    </div>
    <div className="w-[40%] m-auto">
      <ul className="flex justify-around">
        <a href="https://www.instagram.com/aerosoc_bitmesra/"><li className=" text-3xl"><FontAwesomeIcon icon={faInstagram} /></li></a>
        <a href="https://www.linkedin.com/company/aerospace-society-bit-mesra/"><li className=" text-3xl"><FontAwesomeIcon icon={faLinkedin} /></li></a>
        <li className=" text-3xl"><FontAwesomeIcon icon={faFacebook} /></li>
      </ul>
    </div>
    </div>
  </footer>
  </div>
}

export default Footer