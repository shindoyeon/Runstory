import React from 'react'
import {
  ChakraProvider,
  Card,
} from '@chakra-ui/react';
import 'ProfileFollowing.css'

// 나를 팔로워하는 사람들
const Profilefollwer = () => {

  // const ProFollower :  
  return (
    <ChakraProvider>
    <Card style={{}} direction={{base:column}}>
      <div>
      팔로워
      </div>``
      <br/>
      0 명
    </Card>
    </ChakraProvider>
    )
  }

export default Profilefollwer;