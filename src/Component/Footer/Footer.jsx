import React from 'react'
import './Footer.css'
import data from '../../Backend/footer.json'
function Footer() {
  return (
    <>
    <div className='footer_back'>
      <div className='footer_half'>
        <div className='logo_defi'>
          <img src={data.image}/>
          <div className='vl' ></div>
          <p>{data.title}</p>
        </div>
        <p className='footer_discription'>{data.discription}</p>
      </div>
      <div className='vl'></div>

      <div className='footer_half_second'>
        <div className='links'>      
        
        <h3 className='foot_heading'>Quick Links</h3>
      <ul className='ulist'>
        {data["Quick Links"].map((link, index) => (
          <li  className='listitem' key={index}><a className='listitem' href="https://chat.openai.com/">{link}</a></li>
        ))}
      </ul>

      </div>
      <div className='contact'>
      <h3 className='foot_heading'>Contact Us</h3>
      <ul className='ulist'>
        {data["Contact"].map((link, index) => (
          <li  className='listitem' key={index}>{link}</li>
        ))}
      </ul>
    
      {/* <div className='email_subscribe'>
        <input type='text' className='id' placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div> */}
      </div>


      
      </div>
      
    </div>
    <div className="copy_righ_div">
      <p>Copyright  2019-2022  All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer