import React from "react";
import profile from './images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import priyanshu from "./gallery/priyanshu.jpg"
import vikram from "./gallery/vikram.jpg"
import khitiz from "./gallery/khitij.jpg"
import anant from "./gallery/anant.jpg"
import dewakar from "./gallery/dewakar.jpg"
import sahil from "./gallery/sahil.jpg"
import shashak from "./gallery/shashak.jpg"
import srishty from "./gallery/srishty.jpg"
import shantanu from "./gallery/shantanu.jpg"
import amartya from "./gallery/amartya.jpg"
import anurag from "./gallery/anurag.jpg"
import priyank from "./gallery/priyank.jpg"
import alia from "./gallery/alia.jpg"


function Team(){
    return (
        <>
        <div id="container" className="pt-[70px] text-white text-lg  bg-sky-600  bg-cover bg-center  w-full" >
            
           
           
           <div className='text-3xl flex justify-center md:text-[8vh] h-[75px] padding  font-bold items-center  text-slate-900 '>FACULTY ADVISOR</div>
           <div className="pt-[3vh]">
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={priyank}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Dr. Priyank Kumar</div>
                 <div>Professor-In-Charge</div>
                 <div>06512276444</div>
                 <div>priyankkumar@bitmesra.ac.in</div>
           </div>
            </div>
            <div className='text-3xl flex justify-center md:text-[8vh] h-[75px] padding  font-bold items-center  text-slate-900 pt-[3vh]'>SENIOR EXECUTIVE BODY</div>
            <div className="pt-[3vh] flex flex-wrap gap-y-6">
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={priyanshu}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Priyanshu Kumar</div>
                 <div>President</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/priyanshu_kumar_pk?igsh=MWs0ajhrNHo4NHhsbA=="><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/priyanshu-kumar-3728ba257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={vikram}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Vikram Verma</div>
                 <div>Vice President</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/_vikram.verma?igsh=MXF6cjV5MzdxYzMzbA=="><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/vikram-verma-20884425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={dewakar}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Deewakar Prasad</div>
                 <div>Vice President</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/deewakar?igsh=MzRlODBiNWFlZA=="><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/deewakar-prasad-674b90228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={anant}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Anant Ranjan</div>
                 <div>Aerodynamics and Aircrafts Head</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/s__h__i__v_a__m/"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shivam-kumar-3b0740258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={khitiz}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Kshitiz Jha</div>
                 <div>Avionics Head</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/s__h__i__v_a__m/"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shivam-kumar-3b0740258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           
            </div>
            <div className='text-3xl flex justify-center md:text-[8vh] h-[75px] padding  font-bold items-center  text-slate-900 pt-[3vh]'>JUNIOR EXECUTIVE BODY</div>
            <div className="pt-[3vh] flex flex-wrap gap-y-6">
            <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={anurag}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Anurag Sinha</div>
                 <div>General Secretary</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href=""><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/anurag-kumar-sinha-88b617260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={srishty}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Shristy Sonal</div>
                 <div>Joint Secretary</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/shristysonal?igsh=MTgwcDd5MDUwNGR5eA%3D%3D&utm_source=qr"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shristy-sonal-0709082b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={shantanu}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Shantanu</div>
                 <div>Head Treasurer</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/_shantanu2003?igsh=ZzFnYW1qdHp2eXUw"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shantanu-srivastav-38b067214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={amartya}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Amartya</div>
                 <div>Joint Treasurer</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/amartyaabhyankar?igsh=MW9leXVieTdrZnEyMg=="><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/amartya-abhyankar-9a4b29263"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={sahil}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Sahil</div>
                 <div>Joint Treasurer</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/notreallysahil?igsh=MWRyaTM3d2NveDBkcQ=="><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/sahil-kumar-641220267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={shashak}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Shashank Kumar</div>
                 <div>Manufacturing Head</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/shaw_shank.24?igsh=YTVjdTlhcDE1Mm9i"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shashank-kumar-906680272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={alia}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Alia Ehsan</div>
                 <div>Social & Sponsership Head</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/alia._.ehsan?igsh=MWxiejJnZHY4dWQxMA== "><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/aliah-ehsan-211602277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           <div className="w-[340px] shadow-2xl m-auto h-[380px] bg-sky-700 rounded-3xl flex-col justify-between items-center text-center space-y-3 hover:scale-105 ">
                <div className="flex justify-center items-center text-center pt-2">
                 <img className=" rounded-full h-[200px] flex justify-center items-center text-center" src={profile}/>
                 </div>
                 <div className="text-slate-900 font-bold text-2xl">Shivam Kumar</div>
                 <div>Web -Designer</div>
                 <div>shivamsk682002@gmail.com</div>
                 <div>
                 <ul className="flex justify-around ">
                <li ><a href="https://www.instagram.com/s__h__i__v_a__m/"><FontAwesomeIcon className="size-6" icon={faInstagram} /></a></li>
               <li><a href="https://www.linkedin.com/in/shivam-kumar-3b0740258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FontAwesomeIcon className="size-6" icon={faLinkedin} /></a></li>
               </ul>
                 </div>
           </div>
           
            </div>
        </div>
        </>
    )
}

export default Team