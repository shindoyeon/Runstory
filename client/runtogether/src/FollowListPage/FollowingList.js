import React from 'react';
import ImageFile from './권태윤.png'
import {
  Card,
  Image,
  CardBody, 
  CardFooter, 
  CardHeader
} from '@chakra-ui/react';
import "./FollowingList.css"
import {NavLink} from "react-router-dom";

// 나를 팔로우하고 있는 사람
const FollowingList= ({followList}) => {
  const followings = followList;
  const basePath = "https://i8a806.p.ssafy.io/runstory/user/";

  return (
    <div className='followings-list'>
      {followings.map((item, idx) => {
        return (
        <>
        <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>
                
                <CardHeader>
                <NavLink to={"/feed/" + item.userId} width='100%'> 
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={basePath+item.profileImgFileName}
                        alt='Dan Abramov'
                        borderRadius={100}
                    />
                </NavLink>
                </CardHeader>
                <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                    {item.userNickname}
                </CardBody>
                  {/* <CardFooter>
                      <div className='following-remove-btn'>
                          <p className='remove'>팔로잉 해제</p>
                      </div>
                  </CardFooter> */}
            </Card>
        </>)
            })}
    </div>
  );
}

export default FollowingList;