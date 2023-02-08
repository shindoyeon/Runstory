import React from 'react';
import {
    ChakraProvider,
    theme,
    Box,
    Card,
} from '@chakra-ui/react';
import ProfileIdPhoto from './ProfileIdPhoto';
import ProfileStatus from './ProfileStatus';
// import FollowBtn from './FollowBtn'
// import ProfileFollow from './ProfileFollow';
import './Info.css'

// 피드페이지 유저데이터
// 일단 버튼클릭시 팔로우팔로워페이지로 이동하게
// 팔로우팔로워페이지에선 onoff 불가 

const Info = () => {
    return (
        <ChakraProvider theme={theme} style={{width: "90%"}}>
            <div>
                <Box direction={{base: 'row'}} ms='10 %' mt='10px' display='flex'>
                    <ProfileIdPhoto></ProfileIdPhoto>
                    <Card direction={{base: 'column'}}>
                        <ProfileStatus></ProfileStatus>
                        {/* <ProfileFollow></ProfileFollow> */}
                        {/* <FollowBtn></FollowBtn> */}
                    </Card>
                </Box>
            </div>
        </ChakraProvider>

);
}

export default Info;
