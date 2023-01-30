import React, {useRef} from 'react';
import { Image, Card, IconButton, Img } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'
import Imgfile from './권태윤.png';
import './ProfileIdPhoto.css';

const ProfileIdPhoto =({
  onChange,
  src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img for="photo-upload" src={Imgfile}/>
    </div>
    <IconButton 
      className='photo-upload'
      type="file" 
      icon={<SmallAddIcon/>} 
      onClick={onChange}/>
  </label>


// 이미지를 변경하는 버튼 구현  
// 버튼 클릭하면 이미지들 볼 수 있고,
// 입력하면 프로필에 이미지 등록
function ChangeProfileIdPhoto(){
  const photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
  }
  
  return(
    <React.Fragment>
    <Card derection={{base:'column'}}>
      <ProfileIdPhoto
        onChange={photoUpload} 
        src={Imgfile}
        alt='Tae yoon'  
      />
    </Card>
    </React.Fragment>
  )
}

export default ChangeProfileIdPhoto;