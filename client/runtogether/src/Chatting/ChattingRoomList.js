import React from 'react';
import {
    Image, Card, CardBody, CardFooter, CardHeader
  } from '@chakra-ui/react';

const ChattingRoomList = () => {
    const chatting = [
        {
            author: 'tang_tang',
            profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
        },
        {
            author: 'tang_tang',
            profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
        },
        {
            author: 'songheew',
            profileImg: 'https://bit.ly/dan-abramov',
        },
        {
            author: 'doyeon__shin',
            profileImg: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a',
        },
    ]
    const [arr] = React.useState(chatting)
    return (
        <div className="chatting-list">
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
                        {item.author} 님과의 채팅
                    </CardBody>
                </Card>
                </>)
                })}
        </div>
    );
}

export default ChattingRoomList;