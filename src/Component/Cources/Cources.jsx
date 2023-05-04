import React from 'react'
import data from '../../Backend/cources.json'
import './Cources.css'

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
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 725 },
      items: 2
    },
    minitablet: {
      breakpoint: { max: 725, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner = ()=>{
    return <div className="banner_container">
       <div>
       <p className='solution_headind'>{data.title}</p>
        <img src={data.lineImage}/>
       </div>
       <p className='solution_word'>{data.title}</p>
    </div>
}
const Learn = ()=>{
    return   <div className='lets_learn'>
    <div className='heading'> 
      <div className='side_word'> {data.heading.split(" ")[0]}</div> 
      <div className='middle'> {data.heading.split(" ")[1]}</div>
    </div>
    <img src={data.lineImage}/>
   <Carousel
      swipeable={true} showDots={true} responsive={responsive}>
        {data.cources.map((item, index) => (
        <div key={index} className='cource_box'>
        <img  src={data.courceimage}/>
        <div className="courcetitle_pera_button">
        <p  className='cource_heading'>{item.heading}</p>
        <button className='Knowmore'>{data.knowbutton}</button>
        </div>
    </div>
     ))}
    </Carousel>
 
</div>
}
 
 



const Cources = () => {
    return (<>
    <Banner/>
    <Learn/>
    {/* <Content/> */}
    </>
    )
  }
  
  export default Cources


