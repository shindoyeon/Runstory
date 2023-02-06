// import React from 'react';
// import {
//     ChakraProvider,
//     theme,
//     Box,
//     Card,
//     Avatar,
// } from '@chakra-ui/react';
// import Header from '../common/Header';
// import Footer from '../common/Footer';
// import GoSettingButton from './GoSettingButton';
// import FollowBtn from './FollowBtn'
// import ProfileIdPhoto from './ProfileIdPhoto';
// import ProfileStatus from './ProfileStatus';
// import ProfileFollow from './ProfileFollow';
// import ProfileFeeds from './ProfileFeeds';
// import './Info.css'

// // 피드페이지 
// // 본인이면 햄버거버튼만
// // 타인의 개인피드페이지면 팔로우 onoff 버튼 생성 + 햄버거버튼 삭제
// // 일단 버튼클릭시 팔로우팔로워페이지로 이동하게
// // 팔로우팔로워페이지에선 onoff 불가 

// const Info = () => {
//     return (
//         <ChakraProvider theme={theme} style={{width: "90%"}}>
//             <Header></Header>
//             <div>
//                 <GoSettingButton></GoSettingButton>
//                 <Box direction={{base: 'row'}} ms='10 %' mt='10px' display='flex'>
//                     <ProfileIdPhoto></ProfileIdPhoto>
//                     <Card direction={{base: 'column'}}>
//                         <ProfileStatus></ProfileStatus>
//                         <ProfileFollow></ProfileFollow>
//                         <FollowBtn></FollowBtn>
//                     </Card>
//                 </Box>
//             </div>
//             <div>
//                 <ProfileFeeds></ProfileFeeds>
//             </div>
//             <Footer></Footer>
//         </ChakraProvider>

// );
// }

// export default Info;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {Avatar} from '@chakra-ui/react'

const Info = () => {
    const {id} = useParams()
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState([])

    useEffect(() => {
        if(id===auth.user._id){
            setUserData([auth.user])
        }
    }, [id,auth.user])

    return (
        <div className="info">
        {
            userData.map(user => (
                <div className="info_container" key={user._id}>
                    <Avatar src={user.avatar} size="supper-avatar" />
                    <div className="info_content">
                        <div className="info_content_title">
                            <h2>{user.username}</h2>
                            <button className="btn btn-outline-info">Edit Profile</button>
                        </div>
                        <div className="follow_btn">
                            <span className="mr-4">
                                {user.followers.length} 팔로우
                            </span>
                            <span className="ml-4">
                                {user.following.length} 팔로잉
                            </span>
                        </div>

                        <h6>{user.fullname} {user.mobile}</h6>
                        <p className="m-0">{user.address}</p>
                        <h6>{user.email}</h6>
                        <a href={user.website} target="_blank"  rel="noreferrer">{user.website}</a>
                        <p>{user.story}</p>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Info;