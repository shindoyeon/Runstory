import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SignupHashtagMsg from './SignupHashtagMsg';

function RegisterHashtag() {
  return (
    <ChakraProvider>
        <Header></Header>
        <div>
        <SignupHashtagMsg></SignupHashtagMsg>
        </div>
        <Footer></Footer>
    </ChakraProvider>
  );
}

export default RegisterHashtag;