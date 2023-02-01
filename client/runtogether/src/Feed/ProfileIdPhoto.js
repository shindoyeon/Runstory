import React, {useState, useRef} from 'react';
import { Card, IconButton } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'
import './ProfileIdPhoto.css';
    
// 이미지를 변경하는 버튼 구현  
// 버튼 클릭하면 이미지들 볼 수 있고,
// 입력하면 프로필에 이미지 등록
function ProfileIdPhoto(){
  const [selectedImage, setSelectedImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const fileInput = useRef(null)

  const handleButtonClick = e => {
    fileInput.current.click();
  };

  const onChangeProfile = e => {
    // console.log(e.target.files[0])
    e.preventDefault();
    const reader = new FileReader();
    var file = e.target.files[0];
    // console.log(file)
    reader.onload = () => {
        setSelectedImage(reader.result)
    }
    reader.readAsDataURL(file);
  }

    
  return (
    <React.Fragment>
    <Card derection={{base:'column'}}>
    <label>
      {/* <div className="img-wrap img-upload">
        {selectedImage && (
          <img alt="not found" ref={fileInput}/>)} 
      </div> */}
      <input type="file"
                  multiple
                  accept="image/"
                  ref={fileInput}
                  onChange={onChangeProfile}
                  style={{ display: "none" }} 
                  src={{selectedImage}}
        />
    </label>
      <IconButton 
      className="upload-button"
      icon={<SmallAddIcon/>} 
      onClick={handleButtonClick}/>
    </Card>
    </React.Fragment>
  );
};

export default ProfileIdPhoto;