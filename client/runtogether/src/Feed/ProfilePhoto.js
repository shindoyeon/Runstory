import React from 'react';
import { Image } from '@chakra-ui/react';
import imgfile from './권태윤.png';
// import './Profile.css';
// import Pro from "Users\SSAFY\Desktop\S08P12A806\client\runtogether\src\Feed\권태윤.png";

const ProfilePhoto = () => {
  return(
    <div>
      <Image
        // className= "image-bg"
        borderRadius='full'
        boxSize='120px'
        ml='10px'
        src={imgfile}
        alt='Tae yoon'  
      />
    </div>  
  )
}
export default ProfilePhoto;