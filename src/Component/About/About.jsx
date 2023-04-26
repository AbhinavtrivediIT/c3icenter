import React from 'react'
import './About.css'
import data from "../../Backend/about.json"
function About() {
  return (
    <div>
      <div className='about_back'>
      <div>
        <h3 className='about_headind'>{data.title}</h3>
        <img src={data.lineImage}/>
      </div>
      </div>
      <div>
        <div style={{display:'flex' , justifyContent:'center'}}> 
          <div className='side_word'> {data.heading.split(" ")[0]}</div> 
          <div className='middle'> {data.heading.split(" ")[1]}</div>
          <div className='middle'> {data.heading.split(" ")[2]}</div> 
          <div className='side_word'> {data.heading.split(" ")[3]}</div>
        </div>
        <img src={data.largelineImage}/>
      </div>
    </div>
  )
}

export default About