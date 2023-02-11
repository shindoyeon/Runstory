import React from 'react'
import {
    ChakraProvider,
} from '@chakra-ui/react';
import Info from './Info'
import ProfileFeed from './ProfileFeed';
import ProfileMsg from './ProfileMsg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Feed.css'


// 개인피드페이지 -> 사용자 본인이면 햄버거 / 타인의 피드페이지면 햄버거x 팔로우, 차단버튼
// 개인피드페이지
// ~~의 페이지임을 명시
const Profile = () => {
    useEffect(()=>{
        if(localStorage.getItem("access-token")===null){
            navigate("/user/login");
        }
    },[]);
    return (
        <div style={{width: '90%'}}>
            <ChakraProvider>
                <Header></Header>
                <ProfileMsg></ProfileMsg>
                <div className="profile">
                    <Info></Info>
                    <ProfileFeed></ProfileFeed>
                    <Footer></Footer>
                </div>

            </ChakraProvider>
        </div>
    )
}

export default Profile;