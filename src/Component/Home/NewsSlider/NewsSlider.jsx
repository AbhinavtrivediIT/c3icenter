import React from 'react'
import './NewsSlider.css'
import data from '../../../Backend/NewsSlider.json'

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
function NewsSlider() {
  return (
   <div className='news_main'>
    <div style={{display:'flex' , justifyContent:'center'}}> 
        <div className='latest'> {data.title.split(" ")[0]}</div> 
        <div className='news'> {data.title.split(" ")[1]}</div>
    </div>
    <img src={data.image}/>
   <div style={{paddingInline:'1.5rem'}}>
   <Carousel
      swipeable={true}
      showDots={true} 
    responsive={responsive}>
    {data.slider.map((item, index) => (
        <div key={index} className='news_item'>
          <img src={item.image} className='news_image'/>
          <div className='news_content'>
          <p className='news_title'>{item.title}</p>
          <p className='news_description'>{item.description}</p>
          </div>
        </div> 
     ))}
    </Carousel>
    <div className='event_news'>
        <p>{data.events}</p>
        <button>{data.eventButton}</button>
        
    </div>
   </div>

   </div>

    
  )
}

export default NewsSlider