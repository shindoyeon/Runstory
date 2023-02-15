import React, {useState, useEffect, useRef} from 'react';
import {
    Image, Card, CardBody, useDisclosure, CardHeader, CardFooter, Modal, 
    ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalCloseButton,
    ModalFooter, Button, Input
  } from '@chakra-ui/react';
import './ChattingRoomList.css';
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
// import SockJsClient from 'react-stomp';

import ChattingRoom from './ChattingRoom';

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
                    
                    <ChattingRoom></ChattingRoom>
                </Card>
                </>)
                })}
        </div>

//         <div>
//         {chatMessages && chatMessages.length > 0 && (
//           <ul>
//             {chatMessages.map((_chatMessage, index) => (
//               <li key={index}>{_chatMessage.message}</li>
//             ))}
//           </ul>
//         )}
//     //     <div>
//     //       <input
//             type={"text"}
//             placeholder={"message"}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={(e) => e.which === 13 && publish(message)}
//     //       />
//     //       <button onClick={() => publish(message)}>send</button>
//     //     </div>
//     //   </div>
    );
}

export default ChattingRoomList;