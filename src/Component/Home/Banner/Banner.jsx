import React from 'react'
import './Banner.css'
import data from '../../../Backend/banner.json'
function Banner() {
  return (
    <div className='background'>
        <div className='banner_content'>
            <div className='div_grp'>
                <div className='div_grp_first'>
                <div className='title1'> {data.title.split(" ")[0]}</div> 
                <div className='title2'> {data.title.split(" ")[1]}</div>
                </div>
                <div>
                <div className='title3'> {data.title.split(" ")[2]}</div>
                </div>
              </div>
            <p className='banner_discription'>{data.description}</p>
            <button><a href={"https://wa.me/7033432213"}>{data.buttonName}</a></button>
        </div>
    </div>
  )
}

export default Banner