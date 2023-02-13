import React, { useState, useEffect } from 'react'
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import Info from './Info'
import ProfileFeed from './ProfileFeed';
import ProfileMsg from './ProfileMsg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import './Feed.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 


// 개인피드페이지 -> 사용자 본인이면 햄버거 / 타인의 피드페이지면 햄버거x 팔로우, 차단버튼
// 개인피드페이지
// ~~의 페이지임을 명시
const Profile = () => {
    const user = 27; //해당 피드 주인 seq번호 (아마 받아오지 않을까...전 페이지에서.....???)
    const [nickname, setNickname] = useState("");
    const [photo, setPhoto] = useState({
        photoUrl: "",
        photoName: ""
    });
    const [level, setLevel] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access-token") === null) {
            navigate("/user/login");
        }

        (async () => {
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/feed/profile/" + user,
            );
            console.log(data.data.data)
            setLevel(data.data.data.level);
            setNickname(data.data.data.userNickName);
            setPhoto({ photoUrl: data.data.data.profileImgFilePath, photoName: data.data.data.profileImgFileName });
        })();
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <ChakraProvider theme={theme}>
                <div>
                    <Header></Header>
                    <ProfileMsg ></ProfileMsg>

                    <div className="profile"></div>
                    <Info user={user} level={level} nickname={nickname} photo={photo}></Info>
                    <ProfileFeed></ProfileFeed>
                    <BetweenBodyFooter></BetweenBodyFooter>
                    <Footer></Footer>

                </div>
            </ChakraProvider >
        </div >
    )
}

export default Profile;