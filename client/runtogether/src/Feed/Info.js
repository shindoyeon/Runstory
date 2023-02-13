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

    const accessToken = localStorage.getItem("access-token");
    
    const [following, setFolloweing] = useState(0);
    const [follower, setFollower] = useState(0);
    const [followingStatus, setFolloweingStatus] = useState(false);
    const [followId , setFollowId] = useState(null);    
    const [isMypage, setIsMypage] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/user",{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                }
            );
            console.log(data.data.data)
            if(data.data.data.userSeq == props.user){
                setIsMypage(true);
            }   
        })();

        (async () => {
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/feed/followstatus/" + props.user, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log(data.data.data);
            setFollowId(data.data.data.followId);
            setFolloweing(data.data.data.follwingCnt);
            setFollower(data.data.data.follwerCnt);
            setFolloweingStatus(data.data.data.followStatus);
        })();
    }, [followingStatus]);

    const follow =  (async () => {
        //아직 팔로우 안 한 경우
        if(!followingStatus){
                console.log(`토큰이다 ${accessToken}`);
                const data = await axios.post(
                    "https://i8a806.p.ssafy.io/api/feed/follow/" + props.user, {},{
                        headers: {
                            Authorization: `Bearer ${accessToken}`

                        }
                    }
                );
                // followid 저장하기
                console.log(data.data.data);
                setFollowId(data.data.data);
        //이미 팔로우 한 경우
        }else{
            console.log("삭제해라 토큰이다"+accessToken);
                await axios.delete(
                    "https://i8a806.p.ssafy.io/api/feed/follow/" + followId
                );

                setFollowId(null);
        }
        


        setFolloweingStatus(!followingStatus);
    })
    
    return (
        // <ChakraProvider theme={theme}>
            <Box direction={{base: 'row'}} display='flex'>
                <ProfileIdPhoto isMypage={isMypage} photo={props.photo}></ProfileIdPhoto>
                <Card style={{width:"150%" ,boxShadow:'none'}} direction={{base: 'column'}}>
                    <ProfileStatus level={props.level} nickname={props.nickname}></ProfileStatus>
                    <Card mt='10px' ml='20px' mr='10px' style={{justifyContent:'space-around' , boxShadow:'none'}} direction={{base:'row'}}>
                        <ProfileFollower follower={follower}></ProfileFollower>
                        <ProfileFollowing following={following}></ProfileFollowing>
                    </Card>
                { !isMypage && !followingStatus && <button onClick={follow}>팔로우</button> }
                { !isMypage && followingStatus && <button onClick={follow}>언팔로우</button> }

                </Card>
            </Box>
        // </ChakraProvider>

);
}

export default Info;
