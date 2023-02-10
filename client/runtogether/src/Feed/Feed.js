import React from 'react'
import {
    ChakraProvider,
    theme,
    Box,
    Card,
    Avatar,
} from '@chakra-ui/react';
import Info from './Info'
import ProfileFeed from './ProfileFeed';
import GoSettingButton from './GoSettingButton';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Feed.css'


// 개인피드페이지 -> 사용자 본인이면 햄버거 / 타인의 피드페이지면 햄버거x 팔로우, 차단버튼
// 개인피드페이지 
const Profile = () => {
    return (
        <ChakraProvider>
        <Header></Header>
        <div className="profile">
            <GoSettingButton></GoSettingButton>
            <Info/>
            <ProfileFeed></ProfileFeed>
        <Footer></Footer>
        </div>
        </ChakraProvider>

    )
}

export default Profile;