import React from 'react'
import Banner from '../Component/Home/Banner/Banner'
import Research from '../Component/Home/Research_domain/Research'
import NewsSlider from '../Component/Home/NewsSlider/NewsSlider'

function HomeView() {
  return (
    <div>
        <Banner/>
        <Research/>
        <NewsSlider/>
    </div>
  )
}

export default HomeView