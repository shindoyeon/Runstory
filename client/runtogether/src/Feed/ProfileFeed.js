import React, {useState, useEffect} from 'react';
import './ProfileFeed.css';
import {Image ,ChakraProvider} from '@chakra-ui/react'
import Imgfile from './이미지1.png';

const ProfileFeed = () => {
  return (
    // <ChakraProvider>
    <div className='wrapper' style={{maxHeight: '60vh', overflow: 'scroll'}}>
      <table border="1" className='imgs-table'>
        <tr>
            <td>
                <Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
            /></td>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        </tr>
        <tr>
            <td>
                <Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
            /></td>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        </tr>
        <tr>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        </tr>
        <tr>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
            <td><Image
            boxSize='120px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius={5}
        /></td>
        </tr>
    </table>
    </div>
    // </ChakraProvider>
  )
  };
  
export default ProfileFeed;