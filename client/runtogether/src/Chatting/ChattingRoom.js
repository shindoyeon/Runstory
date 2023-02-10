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
import MsgByMe from './MsgByMe'
import MsgByOther from './MsgByOther'

const ChattingRoom = () => {
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    // useEffect(() => {
    //   connect();
  
    //   return () => disconnect();
    // }, []);

    const userSeq = 1;
    const roomId = 4;
    const userNickname = "날다람쥐222";
  
    const connect = () => {
      client.current = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws-stomp", // 웹소켓 서버로 직접 접속
        connectHeaders: {
          "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWhpQG5hdmVyLmNvbSIsImlzcyI6InNzYWZ5LmNvbSIsImV4cCI6MTY3NzEzNzA0OCwiaWF0IjoxNjc1ODQxMDQ4fQ.jJqXZbSS1BA03_SvVuyVvwaNZ_dwsiy6JdsFuALjzTvqo1RR-6kj-ywgMxMFupnvMpxeclEJXqYCag6etccQ9Q",
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
          init();
          subscribe();
        },
        onStompError: (frame) => {
          console.error(frame);
        },
      });
      client.current.activate();
    };
    

    // 웹소켓 연결 끊기
    const disconnect = () => {
        setChatMessages([]);
        client.current.deactivate();
    };
    
    // 메시지 수신
    const subscribe = () => {
      client.current.subscribe(`/sub/chat/room/`+roomId, ({ body }) => {
        setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
      });
    };
    
    // 메시지 발신
    const publish = (message) => {
        if (!client.current.connected) {
            return;
        }
        let date = new Date();
        client.current.publish({
        destination: "/pub/sendMessage",
        body: JSON.stringify({
                type: "ENTER",
                userSeq:userSeq,
                roomId: roomId,
                sender:userNickname,
                message: message,
                time:date
            }),
        });
        setMessage("");
    }

     // 이전 메시지 가져오기
    const init = () => {
      if (!client.current.connected) {
          return;
      }
      client.current.publish({
      destination: "/pub/enterUser",
      body: JSON.stringify({
              type: "TALK",
              userSeq:userSeq,
              roomId: roomId,
              sender:userNickname,
              message: "",
              time:""
          }),
      });
  }


    // 모달 닫기
    function closeModal() {
        disconnect();
        onClose();
    }

    // 모달 열기
    function openModal() {
        connect();
        onOpen();
    }

    return (
        <>
        <Button onClick={openModal} marginLeft="50px" marginTop="100px" >채팅창 열기</Button>
        <Modal
                isCentered
                onClose={closeModal}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size='sm'
                scrollBehavior='inside'
                trapFocus='false'
                id='chat-modal'>
                    
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{userNickname} 님과의 채팅방</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                    {chatMessages && chatMessages.length > 0 && (
                        <>
                            {chatMessages.map((_chatMessage, index) => (
                                _chatMessage.userSeq===userSeq?<MsgByMe msg={_chatMessage.message} sender={_chatMessage.sender}></MsgByMe>
                            :
                            <MsgByOther msg={_chatMessage.message} sender={_chatMessage.sender}></MsgByOther>
                                
                            ))}
                        </>
                    )}
                    </ModalBody>

                    <ModalFooter>
                    <div margin='0 auto' className='comment-form'>
                        <Input className='comment-input' placeholder='채팅을 입력해주세요' size='xs' width={'80%'}
                        ttype={"text"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.which === 13 && publish(message)}
                        ></Input>
                        <Button className='submit-btn' onClick={() => publish(message)} margin-left='2%' size='xs'><p>전송</p></Button>
                    </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ChattingRoom;