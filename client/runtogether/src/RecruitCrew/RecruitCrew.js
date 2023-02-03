import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import RecruitCrewPageMsg from './RecruitCrewPageMsg';
import ImgUpload from './ImgUpload';
import HashTag from '../CreateFeed/HashTag';
import ArticleForm from './ArticleForm';
import axios from 'axios';

const getHashtag = async () => {
  const res = await axios.get(
    "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/hashtag"
  );
  return res.data;
};

function RecruitCrew() {
  const [hashtags, setHashtags] = useState([]);
    useEffect(() => {
      (async () => {
        const data = await getHashtag();
        setHashtags(data.data);
      })();
    }, []);


  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
        <RecruitCrewPageMsg></RecruitCrewPageMsg>
        <ImgUpload></ImgUpload>
        <HashTag hashtags={hashtags}></HashTag>
        <ArticleForm></ArticleForm>
        <BetweenBodyFooter></BetweenBodyFooter>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default RecruitCrew;
