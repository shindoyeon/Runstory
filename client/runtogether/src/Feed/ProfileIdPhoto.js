import React, {useRef, useState} from 'react';
import { Card, IconButton } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'
import Imgfile from './권태윤.png';
import './ProfileIdPhoto.css';

const ProfileIdPhoto =({
})=>
<label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img for="photo-upload" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}/>
    </div>
    <IconButton className='photo-upload' type="file" icon={<SmallAddIcon/>} 
    onClick={fileInput.current.click()}/>
    </label>
    
    
    
    // 이미지를 변경하는 버튼 구현  
    // 버튼 클릭하면 이미지들 볼 수 있고,
    // 입력하면 프로필에 이미지 등록
function ChangeProfileIdPhoto(){
  const fileInput = useRef(null)
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const photoUpload = (e) =>{
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.onload = () => {
      setImage(reader.result)
    };
    reader.readAsDataURL(file);
  }
  
  return(
    <React.Fragment>
    <Card derection={{base:'column'}}>
      <ProfileIdPhoto
        onChange={photoUpload} 
        alt='Tae yoon'  
      />
    </Card>
    </React.Fragment>
  )
}

export default ChangeProfileIdPhoto;