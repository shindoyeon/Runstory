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

// 나를 팔로우하고 있는 사람
const FollowingList= () => {
  const followings = [
    {
      author: 'tang_tang',
      profileImg: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d',
      content: '닉네임1'
    },
    {
        author: 'tang_tang',
        profileImg: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66ba2da8249bd9ffef143efb890203e009',
        content: '닉네임2'
    },
    {
        author: 'songheew',
        profileImg: 'https://bit.ly/dan-abramov',
        content: '닉네임3'
    },
    {
        author: 'doyeon__shin',
        profileImg: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a',
        content: '닉네임4'
    },
  ]
  const [arr] = React.useState(followings)
  return (
    <div className='followings-list'>
      {arr.map((item, idx) => {
        return (
        <>
        <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>
                <CardHeader>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={item.profileImg}
                        alt='Dan Abramov'
                        borderRadius={100}
                    />
                </CardHeader>
                <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                    {item.content}
                </CardBody>
                <CardFooter>
                    <div className='following-remove-btn'>
                        <p className='remove'>팔로우 해제</p>
                    </div>
                </CardFooter>
            </Card>
        </>)
            })}
    </div>
  );
}

export default FollowingList;