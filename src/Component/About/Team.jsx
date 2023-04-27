import React from 'react'
import './About.css'
import data from "../../Backend/about.json"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 725 },
      items: 3
    },
    minitablet: {
      breakpoint: { max: 725, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Team() {
  return (
    <div className="team_container">
    
    <div className='team'> 
         <div className='side_word'> {data.team.split(" ")[0]}</div> 
         <div className='middle'> {data.team.split(" ")[1]}</div>      
   </div>
     <img  src={data.lineImage}/>
     <div className='teamimage_name'>
   <Carousel
      swipeable={true} showDots={true} responsive={responsive}>
        {data.teammember.map((item, index) => (
        <div key={index} className='img_name'>
        <img className="individual_img" src={item.image}/>
        <p  className='individual_name'>{item.name}</p>
    </div>
     ))}
    </Carousel>
 
   </div>
   </div>
  )
}

export default Team