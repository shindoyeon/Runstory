import React from 'react';
import ImageFile from './권태윤.png'
import {
  ChakraProvider,
  Card,
  Image,
} from '@chakra-ui/react';

const Followers= () => {
  return (
    <ChakraProvider>
      <Card>
        <Image 
          className='item'
          src={ImageFile}/>
      </Card>
      <br/>
      <hr/>
      <br/>
      <Card>
        <Image 
          className='item'
          src={ImageFile}/>
      </Card>
      <br/>
      <hr/>
      <br/>
      <Card>
        <Image 
          className='item'
          src={ImageFile}/>
      </Card>
    </ChakraProvider>
  )

}

export default Followers;