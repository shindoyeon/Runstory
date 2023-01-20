import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SearchPageMsg from './SearchPageMsg';
import SearchBar from './SearchBar';
import SearchResultMsg from './SearchResultMsg';
import FeedSearchResult from './FeedSearchResult'

function Search() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
        <SearchPageMsg></SearchPageMsg>
        <SearchBar></SearchBar>
        <SearchResultMsg></SearchResultMsg>
        <FeedSearchResult></FeedSearchResult>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default Search;

