// import React from 'react';
import './Feed.css';
import {
    ChakraProvider,
    theme,
    Box,
    Card,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import GoSettingButton from './GoSettingButton';
import ProfileIdPhoto from './ProfileIdPhoto';
import ProfileStatus from './ProfileStatus';
import ProfileFollow from './ProfileFollow';
import ProfileFeed from './ProfileFeed';

// 본인이면 햄버거버튼만
// 타인의 개인피드페이지면 팔로우 onoff 버튼 생성 + 햄버거버튼 삭제
// 일단 버튼클릭시 팔로우팔로워페이지로 이동하게
// 팔로우팔로워페이지에선 onoff 불가 

const Feed= () => {
    return (
        <ChakraProvider theme={theme} style={{width: "90%"}}>
            <Header></Header>
            <div>
                <GoSettingButton></GoSettingButton>
                <Box direction={{base: 'row'}} ms='10 %' mt='10px' display='flex'>
                    <ProfileIdPhoto></ProfileIdPhoto>
                    <Card direction={{base: 'column'}}>
                        <ProfileStatus></ProfileStatus>
                        <ProfileFollow></ProfileFollow>
                    </Card>
                </Box>
            </div>
            <div>
                <ProfileFeed></ProfileFeed>
            </div>
            <Footer></Footer>
        </ChakraProvider>

    );
}

export default Feed;