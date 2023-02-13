import React, {useState, useEffect} from 'react';
import './ProfileFeed.css';
import {Image ,ChakraProvider} from '@chakra-ui/react'
import Imgfile from './이미지1.png';
import {NavLink} from "react-router-dom";

const ProfileFeeds = () => {
  return (
    // <ChakraProvider>
    <div className='wrapper'>
      <table border="1" className='imgs-table'>
        <tr>
            <td>
              <NavLink to={"/detail/"}>
                <img src={Imgfile} alt="Lights" style={{"width":"100%"}}/>
              </NavLink>
            </td>
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
  
export default ProfileFeeds;