import React from 'react'
import data from "../../Backend/about.json"
import './About.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function LabTour() {
  return (
    <div className='lab_tour'>
       <div className='team'> 
            <div className='side_word'> {data.tour.split(" ")[0]}</div> 
            <div className='side_word'> {data.tour.split(" ")[1]}</div>  
            <div className='middle'> {data.tour.split(" ")[2]}</div>      
            <div className='side_word'> {data.tour.split(" ")[3]}</div>      
            <div className='middle'> {data.tour.split(" ")[4]}</div>      
            <div className='middle'> {data.tour.split(" ")[5]}</div>      
        </div>
        <img src={data.largelineImage}/>
  
  <div className='lab_image_container'>
   <Carousel
      swipeable={true} responsive={responsive}>
        {data.tourImage.map((item, index) => (
        <div key={index} className='img_name'>
        <img className='tour_images' src={item.image}/>
    </div>
     ))}
    </Carousel>
 </div>
   </div>
  )
}

export default LabTour