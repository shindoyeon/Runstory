// import React, {useState, useEffect, useRef} from 'react';
// import {
//     Image, Card, CardBody, useDisclosure, CardHeader, CardFooter, Modal, 
//     ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalCloseButton,
//     ModalFooter, Button, Input
//   } from '@chakra-ui/react';
// import './ChattingRoomList.css';
// import * as StompJs from "@stomp/stompjs";
// import * as SockJS from "sockjs-client";
// // import SockJsClient from 'react-stomp';

// const ROOM_SEQ = 1;

// const ChattingRoomList = () => {
//     const client = useRef({});
//     const [chatMessages, setChatMessages] = useState([]);
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//       connect();
  
//       return () => disconnect();
//     }, []);
  
//     const connect = () => {
//       client.current = new StompJs.Client({
//         brokerURL: "ws://localhost:8080/ws-stomp", // 웹소켓 서버로 직접 접속
//         // webSocketFactory: () => new SockJS("/ws-stomp"), // proxy를 통한 접속
//         connectHeaders: {
//           "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWhpQG5hdmVyLmNvbSIsImlzcyI6InNzYWZ5LmNvbSIsImV4cCI6MTY3NzEzNzA0OCwiaWF0IjoxNjc1ODQxMDQ4fQ.jJqXZbSS1BA03_SvVuyVvwaNZ_dwsiy6JdsFuALjzTvqo1RR-6kj-ywgMxMFupnvMpxeclEJXqYCag6etccQ9Q",
//         },
//         debug: function (str) {
//           console.log(str);
//         },
//         reconnectDelay: 5000,
//         heartbeatIncoming: 4000,
//         heartbeatOutgoing: 4000,
//         onConnect: () => {
//           subscribe();
//         },
//         onStompError: (frame) => {
//           console.error(frame);
//         },
//       });
  
//       client.current.activate();
//     };
  
//     const disconnect = () => {
//       client.current.deactivate();
//     };
  
//     const subscribe = () => {
//       client.current.subscribe(`/sub/chat/room/1`, ({ body }) => {
//         setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
//       });
//     };
  
//     const publish = (message) => {
//       if (!client.current.connected) {
//         return;
//       }
  
//       client.current.publish({
//         destination: "/pub/sendMessage",
//         body: JSON.stringify({
//             type: "ENTER",
//             roomId: 1,
//             sender:"kkwwoonn",
//             message: message,
//             time:"지금"
//         }),
//       });
  
//       setMessage("");
//     }

//     // const { isOpen, onOpen, onClose } = useDisclosure();

//     // const chatting = [
//     //     {
//     //         author: 'tang_tang',
//     //         profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
//     //     },
//     //     {
//     //         author: 'tang_tang',
//     //         profileImg: 'https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad',
//     //     },
//     //     {
//     //         author: 'songheew',
//     //         profileImg: 'https://bit.ly/dan-abramov',
//     //     },
//     //     {
//     //         author: 'doyeon__shin',
//     //         profileImg: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a',
//     //     },
//     // ]
//     // const [arr] = React.useState(chatting)

//     // const [msg, setMsg] = useState([]);

//     // const handleCommentChange = ({ target: { value } }) => setMsg(value); // 댓글 작성 시 내용 설정
  
//     // const handleSubmit = (e) => { // 작성 버튼 클릭 시 이벤트 함수
//     //     alert(`작성된 내용: ${msg}`); // 데이터 잘 들어왔는지 확인용!!!
//     // };

//     // async function openChattingRoom() {
//     //     onOpen();
//     //     await document.getElementById('chat-modal').scrollTo(0, document.getElementById('chat-modal').scrollHeight);
//     // }

//     return (
//         <div className="chatting-list">
            
//             {arr.map((item, idx) => {
//                 return (
//                     <>
//                 <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center' onClick={openChattingRoom}>
//                     <CardHeader>
//                         <Image
//                             boxSize='50px'
//                             objectFit='cover'
//                             src={item.profileImg}
//                             alt='Dan Abramov'
//                             borderRadius={100}
//                         />
//                     </CardHeader>
//                     <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
//                         {item.author} 님과의 채팅
//                     </CardBody>
//                 </Card>
//                 </>)
//                 })}
//         </div>

        // <div>
        // {chatMessages && chatMessages.length > 0 && (
        //   <ul>
        //     {chatMessages.map((_chatMessage, index) => (
        //       <li key={index}>{_chatMessage.message}</li>
        //     ))}
        //   </ul>
        // )}
//     //     <div>
//     //       <input
            // type={"text"}
            // placeholder={"message"}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            // onKeyPress={(e) => e.which === 13 && publish(message)}
//     //       />
//     //       <button onClick={() => publish(message)}>send</button>
//     //     </div>
//     //   </div>
//     );
// }

// export default ChattingRoomList;