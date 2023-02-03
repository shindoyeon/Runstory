import React from 'react';
import {
    ChakraProvider,
    theme,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BasicMap from './BasicMap';
import BetweenBodyFooter from '../common/BetweenBodyFooter'
// import BasicMap2 from './BasicMap2';
// import MapInWeb from './MapInWeb';

function DrawMap() {
    return (
        // <ChakraProvider theme={theme}>
          <div>
            <Header></Header>
            <BetweenBodyFooter></BetweenBodyFooter>
            <BasicMap></BasicMap>
            {/* <BasicMap2></BasicMap2> */}
            {/* <MapInWeb></MapInWeb> */}
            <Footer></Footer>
          </div>
        // </ChakraProvider>
      );
}

export default DrawMap;
