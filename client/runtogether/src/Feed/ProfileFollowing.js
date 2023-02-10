import React from 'react'
import {
  ChakraProvider,
  Card,
} from '@chakra-ui/react';
import './ProfileFollowing.css'

// 내가 팔로워하는 사람들
const Profilefollowing = () => {

  return (
    <ChakraProvider>
    <Card style={{boxShadow:'none' }} direction={{base:'column'}}>
      <div>
      팔로워
      </div>
      0 명
    </Card>
    </ChakraProvider>
    )
  }

export default Profilefollowing;