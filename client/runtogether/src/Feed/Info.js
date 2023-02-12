import React,{ useState, useEffect }  from 'react';
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
import axios from 'axios';

// 개인피드페이지 유저데이터
// 일단 버튼클릭시 팔로우팔로워페이지로 이동하게
// 팔로우팔로워페이지에선 onoff 불가 

const Info = (props) => {

    const userSeq = 16;
    // const [nickname, setNickname] = useState("");
    // const [nickname, setNickname] = useState("");

    useEffect(() => {
        (async () => {
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/feed/followstatus/" + userSeq
            );
            console.log(data.data.data)
            // setLevel(data.data.data.level);
            // setNickname(data.data.data.userNickName);
            // setPhoto({photoUrl:data.data.data.profileImgFilePath,photoName:data.data.data.profileImgFileName});
        })();
    }, []);
    
    return (
        // <ChakraProvider theme={theme}>
            <Box direction={{base: 'row'}} display='flex'>
                <ProfileIdPhoto photo={props.photo}></ProfileIdPhoto>
                <Card style={{width:"150%" ,boxShadow:'none'}} direction={{base: 'column'}}>
                    <ProfileStatus level={props.level} nickname={props.nickname}></ProfileStatus>
                    <Card mt='10px' ml='20px' mr='10px' style={{justifyContent:'space-around' , boxShadow:'none'}} direction={{base:'row'}}>
                        <ProfileFollower></ProfileFollower>
                        <ProfileFollowing></ProfileFollowing>
                    </Card>

                </Card>
            </Box>
        // </ChakraProvider>

);
}

export default Info;
