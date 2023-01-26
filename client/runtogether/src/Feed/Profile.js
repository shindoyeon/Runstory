import React from 'react';
import { Image } from '@chakra-ui/react';
// import Pro from "Users\SSAFY\Desktop\S08P12A806\client\runtogether\src\Feed\권태윤.png";
// import './Profile.css';

const Profile = () => {
  return(
    <div>
      <Image
        borderRadius='full'
        boxSize='120px'
        ml='10px'
        src= 'https://upload.wikimedia.org/wikipedia/commons/7/7c/%ED%94%84%EB%A1%9C%ED%95%84%28%EC%A0%95%EB%A9%B4%29.jpg'
        alt='Dan Abramov'   
      />
      
    </div>  
  )
}
export default Profile;