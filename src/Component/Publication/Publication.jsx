import React, { useState } from 'react'
import data from "../../Backend/Publications.json"
import './Publication.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pop_publication from './Pop_publication';


const Banner = ()=>{
    return <div className="banner_container">
       <div>
       <p className='publication_headind'>{data.title}</p>
        <img src={data.lineImage}/>
       </div>
       <p className='publication_word'>{data.title}</p>

    </div>
}

const SolutionDevelopment = () => {
  const [openStates, setOpenStates] = useState(Array(data.publicationtion.length).fill(false));
  const [showContent,setShowContent] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
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

return <div className="solution_development_main_container">
         
         
<div className='story_line'>
  <div className='heading'> 
      <div className='side_word'> {data.heading.split(" ")[0]}</div> 
      <div className='middle'> {data.heading.split(" ")[1]}</div>
    </div>
    <img src={data.largelineImage}/>
</div>

{data.publicationtion.map((item, index) => (
    <>
    <div onClick={()=>{
        if(showContent == index)
        {
          setShowContent(null)
        }
        else
        {
          setShowContent(index)
        }
      }} key={index} className="publication_box">
      <h3 className='publication_drop'>{item.title}</h3>
      {openStates[index] ? <ArrowDropDownIcon className='icon' /> : <ArrowDropUpIcon className='icon' />}  
      
        
      </div>
      {
        showContent === index ?

  <div className="content_main_container">
  <div key={index} >
  <Carousel swipeable={true} showDots={true} responsive={responsive}>
  {item.publicationdetail.map((item, index1) => (
    <div
      key={index1}  // Changed 'index' to 'index1' to avoid a potential issue
      className="publication_block"
      onClick={() => {
        setSelectedItem(item);
        setShowPopup(true);
      }}
    >
      <img src={data.courceimage} />
      <div className="">
        <p>{item.intro}</p>
      </div>
    </div>
  ))}
</Carousel>
{showPopup && (
        <Pop_publication item={selectedItem} onClose={() => setShowPopup(false)} />
      )}
</div>
</div>: ""
}

</>

    ))}
  </div>
}



const Publication = () => {
  return (<>
  <Banner/>
  <SolutionDevelopment/>
  {/* <Content/> */}
  </>
  )
}

export default Publication