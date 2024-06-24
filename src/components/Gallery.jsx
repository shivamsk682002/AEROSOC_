import React from "react";
import photo1 from "./gallery/photo1.jpg"
import photo2 from "./gallery/photo2.jpg"
import photo3 from "./gallery/photo3.jpg"
import photo4 from "./gallery/photo4.jpg"
import photo5 from "./gallery/photo5.jpg"
import photo6 from "./gallery/photo6.jpg"
import photo7 from "./gallery/photo7.jpg"
import photo8 from "./gallery/photo8.jpg"
import photo9 from "./gallery/photo9.jpg"
import photo10 from "./gallery/photo10.jpg"
import photo11 from "./gallery/photo11.jpg"
function Gallery(){
    return (
        <>
        <div id="container" className="pt-[70px] text-white text-lg  bg-sky-600  bg-cover bg-center  w-full" >
            <div className=" ">
            <div className=' text-5xl flex justify-center md:text-[10vh] h-[75px] padding  font-semibold items-center  '>
           <div className=' text-slate-900 '>Gallery</div>
           </div>

            </div>
            <div class='p-5 md:p-10'>
                <div className=" columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                    <img className=" rounded-2xl hover:scale-105" src={photo1}></img>
                    <img className=" rounded-2xl  hover:scale-105" src={photo2}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo3}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo4}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo5}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo6}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo7}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo8}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo9}></img>
                    <img className=" rounded-2xl hover:scale-105" src={photo10}></img>
                    <img className=" rounded-2xl hover:scale-105 "  src={photo11}></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Gallery