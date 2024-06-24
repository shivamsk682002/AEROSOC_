
import { useState } from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faGripLines, faGripLinesVertical, faLocationDot, faPhone, faPieChart, faXmark,} from '@fortawesome/free-solid-svg-icons'
import img1 from'./images/Aerosoc logo.jpg'
import img2 from'./images/Bitlogo.jpg'
import uav from'./images/uav.jpg'
import './App.css'
import Space from'./images/Space.jpg'
import aircrash from'./images/aircrash.jpg';
import Snapshots from './components/Snapshots'
import ContactUs from './components/Email'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <body className="  w-[100%] h-[100%] m-auto p-0 ">
        <Navbar ></Navbar>
        <Outlet/>
        <Footer/> 
    </body>
    
  </>
  )
}

export default App
