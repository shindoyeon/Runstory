import React from 'react';
import './ImgUpload.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ImgUpload = () => {
    const fileInput = React.useRef(null);
    const handleButtonClick = e => {
        fileInput.current.click();
      };
    const handleChange = e => {
        console.log(e.target.files[0]);
    };
  return (
    <React.Fragment>
      <div className='upload-box'  onClick={handleButtonClick}><FontAwesomeIcon icon={faPlusCircle} /></div>
      <input type="file"
            ref={fileInput}
            onChange={handleChange}
            style={{ display: "none" }} />
    </React.Fragment>
  )
}

export default ImgUpload;