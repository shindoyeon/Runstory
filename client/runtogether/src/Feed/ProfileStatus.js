import React from 'react';
import {Card, Image, Text} from '@chakra-ui/react';
import img from './고무신.png';

const ProfileName = () => {
  return (
    <div>
      <Card style={{width:'100%' , boxShadow:'none'}} direction={{base: 'row'}} ml='10px' mt='10px'>  
       <Image
         boxSize='50px'
         src={img}
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