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
// import FeedSearchResult from './FeedSearchResult'
import UserSearchResult from './UserSearchResult'

function Search() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
        <SearchPageMsg></SearchPageMsg>
        <SearchBar></SearchBar>
        <SearchResultMsg></SearchResultMsg>
        {/* <FeedSearchResult></FeedSearchResult> */}
        <UserSearchResult></UserSearchResult>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default Search;

