import React from 'react'
import './Research.css'
import reaseone from './reaseone.png'
import data from '../../../Backend/Researchdata.json'
function Research() {
  console.log(data);

  return (
    <div className='research'>
      <div className='research_line'>
        <div className='heading'> 
          <div className='side_word'> {data.title.split(" ")[0]}</div> 
          <div className='middle'> {data.title.split(" ")[1]}</div>
          <div className='side_word'> {data.title.split(" ")[2]}</div> 
        </div>
        <img src={data.researchline}/>
      </div>
      <p className='research_pera'>{data.description}</p>

      <div className='research_card_grp'>
      {data.domain.map((item, index) => (
        <div key={index} className='research_item'>
          <img src={item.image} className='research_image'/>
          <p className='research_title'>{item.title}</p>
          <p className='research_description'>{item.description}</p>
          <button className='research_btn'>{item.buttonName}</button>
        </div> 
    ))}
      </div>
    </div>
    
  )
}

export default Research