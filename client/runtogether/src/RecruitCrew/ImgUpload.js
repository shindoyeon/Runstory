import React from 'react';
import './ImgUpload.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const ImgUpload = (props) => {
    const fileInput = React.useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };

    function deleteImg() {
      console.log("삭제")
    }

    const handleChange = e => {
      props.setImage([...(props.image), e.target.files[0]]);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = event => {
        var preview = new Image();
        preview.src = event.target.result;
        preview.style.width = '90%';
        preview.style.height = '50vh';
        preview.style.margin = '0 auto';
        preview.style.marginBottom = '10px';
        preview.style.objectFit = 'fill';
        preview.style.border = '1px solid #616161';
        preview.style.overflow = 'hidden';
        preview.style.borderRadius = '5%';
        var previewBox = document.getElementById('preview-box');
        previewBox.style.display = 'inline';
        previewBox.appendChild(preview);
        // var deleteImg = document.createElement('div')
        // deleteImg.textContent = '삭제';
        // deleteImg.id = preview.src;
        // deleteImg.style.borderRadius = "20px";
        // deleteImg.style.fontWeight = "bold";
        // deleteImg.style.backgroundColor = "#EEB6B6";
        // deleteImg.style.textAlign = "center";
        // deleteImg.style.width = "10%";
        // deleteImg.style.height = "20px";
        // deleteImg.style.lineHeight = "20px";
        // deleteImg.style.fontSize = "14px";
        // deleteImg.style.color = "#6A6A6A";
        // deleteImg.style.margin = "0 auto";
        // deleteImg.style.marginBottom = "20px";
        // deleteImg.onclick(deleteImg());
        // previewBox.appendChild(deleteImg);
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