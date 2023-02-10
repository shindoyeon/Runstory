import React from 'react';
import {
    ChakraProvider,
    theme,
    Box,
    Card,
} from '@chakra-ui/react';
import ProfileIdPhoto from './ProfileIdPhoto';
import ProfileStatus from './ProfileStatus';
import ProfileFollower from './ProfileFollower';
import ProfileFollowing from './ProfileFollowing';
import './Info.css'

// 개인피드페이지 유저데이터
// 일단 버튼클릭시 팔로우팔로워페이지로 이동하게
// 팔로우팔로워페이지에선 onoff 불가 

const Info = () => {
    return (
        <ChakraProvider theme={theme} style={{width: "90%"}}>
            <Box direction={{base: 'row'}} display='flex'>
                <ProfileIdPhoto></ProfileIdPhoto>
                <Card style={{width:"120%" ,boxShadow:'none'}} direction={{base: 'column'}}>
                    <ProfileStatus></ProfileStatus>
                    <Card mt='10px' pl='20px' ml='20px' style={{justifyContent:'space-around' , boxShadow:'none'}} direction={{base:'row'}}>
                        <ProfileFollower></ProfileFollower>
                        <ProfileFollowing></ProfileFollowing>
                    </Card>

                </Card>
            </Box>
        </ChakraProvider>

);
}

export default Info;
