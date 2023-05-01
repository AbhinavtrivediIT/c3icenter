import React from 'react'
import './About.css'
import data from "../../Backend/about.json"
import Team from './Team'
import LabTour from './LabTour'
function About() {
  return (
    <div>
      <div className='about_back'>
      <div>
        <h3 className='about_headind'>{data.title}</h3>
        <img src={data.lineImage}/>
      </div>
      </div>
      <div className='story_line'>
        <div className='heading'> 
          <div className='side_word'> {data.heading.split(" ")[0]}</div> 
          <div className='middle'> {data.heading.split(" ")[1]}</div>
          <div className='middle'> {data.heading.split(" ")[2]}</div> 
          <div className='side_word'> {data.heading.split(" ")[3]}</div>
          <div className='side_word'> {data.heading.split(" ")[4]}</div>
        
        </div>
        <img src={data.largelineImage}/>
      </div>
     
     
     <div className='story'>
     <div className='pera_image'>
        <p className='pera_one'>{data.peraone}</p>
       <div className="about_story_img">
       <img className='frame' src={data.frame}/>
       </div>
      </div>
      <div className='pera_two'>{data.peratwo}</div>
     </div>
    </div>
  )
}

export default About