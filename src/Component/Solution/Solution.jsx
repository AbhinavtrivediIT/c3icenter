import React, { useState } from 'react'
import data from "../../Backend/solution.json"
import './Solution.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Banner = ()=>{
    return <div className="banner_container">
       <div>
       <p className='solution_headind'>{data.title}</p>
        <img src={data.lineImage}/>
       </div>
       <p className='solution_word'>{data.title}</p>

    </div>
}

const SolutionDevelopment = () => {
  const [openStates, setOpenStates] = useState(Array(data.solutiontitle.length).fill(false));

  function handleClick(index) {
    setOpenStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];
      return newStates;
    });
  }


  const [showContent,setShowContent] = useState(null)
    return <div className="solution_development_main_container">
         
         
    <div className='story_line'>
        <div className='heading'> 
          <div className='side_word'> {data.heading.split(" ")[0]}</div> 
          <div className='middle'> {data.heading.split(" ")[1]}</div>
        </div>
        <img src={data.largelineImage}/>
    </div>

    {data.solutiontitle.map((item, index) => (
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
            handleClick(index)
          }} key={index} className="solution_box">
          <h3 className='solution_drop'>{item.title}</h3>
          {openStates[index] ? <ArrowDropDownIcon className='icon' /> : <ArrowDropUpIcon className='icon' />}  
          
           
          </div>
          {
            showContent === index ?

            <div className="content_main_container">
            <div key={index} >
            <h3>{item.content.heading}</h3>
            <img className='lineimg' src={data.solutionlineima}/>
            <p className='intro'>Introduction</p>
            <p className='describe'> {item.content.describe}</p>
            <ul className='list'>
              {item.content.list.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>{listItem}</li>
              ))}
            </ul>
            <div className='system_feature_image_container'>
              <div className='system_feature'>
                <p className='system_heading'>{item.content.systemheading}</p>
                <p className='system_info'>{item.content.systeminfo}</p>
                <p className='system_heading'>{item.content.features}</p>
                <p className='system_info'>{item.content.featureinfo}</p>
              </div>
              <div>
                <div className='solution_img_div'>
                  <img className='solution_img' src={item.content.solutionimg}/>
                </div>
              </div>
            </div>
          </div> 
          </div>: ""
          }




</>


      ))}
    </div>
}







const Solution = () => {
  return (<>
  <Banner/>
  <SolutionDevelopment/>
  {/* <Content/> */}
  </>
  )
}

export default Solution