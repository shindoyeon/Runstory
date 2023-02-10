import React from 'react'
import {
  ChakraProvider,
  Card,
} from '@chakra-ui/react';
import './ProfileFollower.css'

// 나를 팔로워하는 사람들
const Profilefollower = () => {

  // const ProFollower :  
  return (
    <ChakraProvider>
    <Card style={{ boxShadow:'none'}} direction={{base:'column'}}>
      <div>
      팔로워
      </div>
      0 명
    </Card>
    </ChakraProvider>
    )
  }

export default Profilefollower;