import React, {useState, useEffect} from 'react';
import './ProfileFeed.css';
import {Image ,ChakraProvider} from '@chakra-ui/react'
import Imgfile from './이미지1.png';

const ProfileFeeds = () => {
  return (
    // <ChakraProvider>
    <div className='wrapper'>
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'a
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
      <Image
        className='item'
        src={Imgfile}
        alt='Tae yoon'  
        />
    </div>
    // </ChakraProvider>
  )
  };
  
export default ProfileFeeds;