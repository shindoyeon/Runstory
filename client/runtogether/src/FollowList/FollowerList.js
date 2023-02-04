import React from 'react';
import ImageFile from './권태윤.png'
import {
  Card,
  Image,
  CardBody, 
  CardFooter, 
  CardHeader
} from '@chakra-ui/react';
import "./FollowerList.css"

// 나를 팔로우하고 있는 사람
const FollowerList= () => {
  const followers = [
    {
      author: 'tang_tang',
      profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
      content: '닉네임1'
    },
    {
        author: 'tang_tang',
        profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
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
  const [arr] = React.useState(followers)
  return (
    <div className='followers-list'>
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
                    <div className='follower-remove-btn'>
                        <p className='remove'>팔로우 해제</p>
                    </div>
                </CardFooter>
            </Card>
        </>)
            })}
    </div>
  );
}

export default FollowerList;