import React from 'react'
import data from "../../Backend/Publications.json"
import './Publication.css'
import CloseIcon from '@mui/icons-material/Close';
const Pop_publication = ({ item, onClose }) => {
    return (
      <div className="popup">
        <div className="popup_content">
          <CloseIcon className="close_button" onClick={onClose} />
          <hr />
          <div className='pop_img_content'>
          <img src={data.courceimage} />
           <div className='content'>
           <p >{item.intro}</p>
           <p>{item.author}</p>
           <p>{item.name}</p>
           <p></p>
           </div>
            {/* Display other properties of the selected item */}
          </div>
        </div>
      </div>
    );
  };
  

export default Pop_publication