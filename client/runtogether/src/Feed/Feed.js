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


// 개인프로필페이지 
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