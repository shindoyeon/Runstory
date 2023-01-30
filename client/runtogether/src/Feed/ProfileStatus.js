import React from 'react';
import {Card, Image, Text} from '@chakra-ui/react';
import img from './고무신.png';

const ProfileName = () => {
  return (
    <div>
      <Card direction={{base: 'row'}}>  
       <Image
         borderRadius='base'
         boxSize='50px'
         src={img}
         ml='10px'
         alt='gomusin'
         />
        <Text
         fontWeight='extrabold'  
         fontSize='2xl'   
         >
         멀캠15층날다람쥐
        </Text>
       </Card>
    </div>
  )
}

export default ProfileName;