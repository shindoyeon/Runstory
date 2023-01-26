import React from 'react';
import {
    ChakraProvider,
    theme,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Map from './Map';

function DrawMap() {
    return (
        <ChakraProvider theme={theme}>
          <div>
            <Header></Header>
            <Map></Map>
            <Footer></Footer>
          </div>
        </ChakraProvider>
      );
}

export default DrawMap;
