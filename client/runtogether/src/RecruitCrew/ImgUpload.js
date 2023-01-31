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
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = event => {
        var preview = new Image();
        preview.src = event.target.result;
        preview.style.width = '90%';
        preview.style.height = '50vh';
        preview.style.margin = '0 auto';
        preview.style.marginBottom = '3%';
        preview.style.objectFit = 'fill';
        preview.style.borderRadius = '10px';
        preview.style.border = '1px solid #616161';
        var previewBox = document.getElementById('preview-box');
        previewBox.style.display = 'inline';
        previewBox.appendChild(preview);
      }
    };
  return (
    <React.Fragment>
      <div className='preview-box' id='preview-box' style={{display: 'none'}}></div>
      <div className='upload-box' id='upload-box' onClick={handleButtonClick}><FontAwesomeIcon icon={faPlusCircle} /></div>
      <input type="file"
            accept="image/*"
            ref={fileInput}
            onChange={handleChange}
            style={{ display: "none" }} />
    </React.Fragment>
  )
}

export default ImgUpload;