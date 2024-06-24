import { useState } from 'react'
import team from './images/team.jpg'
import img1 from './images/snapshot1.jpg'
import img2 from './images/smapshot2.jpg'
import img3 from './gallery/photo7.jpg'
function Snapshots() {
  let a= [team,img1,img2,img3];
  const[count,setCount] = useState(0)
  
  
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide w-[80%] md:w-[60%]  ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner md:h-[70vh] h-[23vh] rounded-xl shadow-2xl shadow-zinc-950 border-8 border-gray-300 ">
    <div className="carousel-item active">
      <img src={a[count]} classNameName="d-block  flex justify-center w-full h-full object-contain border-2 border-black" alt="..."/>
    </div>
    
  </div>
  <button onClick={() => setCount(count===0?a.length-1:count-1)} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button onClick={() =>{setCount(count===a.length-1?0:count+1)  }} className="carousel-control-next  " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className=" carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </>
  )
}

export default Snapshots;