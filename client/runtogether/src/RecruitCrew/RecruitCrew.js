import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import RecruitCrewPageMsg from './RecruitCrewPageMsg';
import ImgUpload from './ImgUpload';
import HashTag from './HashTag';
import ArticleForm from './ArticleForm';

function RecruitCrew() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
        <RecruitCrewPageMsg></RecruitCrewPageMsg>
        <ImgUpload></ImgUpload>
        <HashTag></HashTag>
        <ArticleForm></ArticleForm>
        <BetweenBodyFooter></BetweenBodyFooter>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default RecruitCrew;
