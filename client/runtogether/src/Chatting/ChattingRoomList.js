import React, {useState, useRef} from 'react';
import {
    Image, Card, CardBody, useDisclosure, CardHeader, CardFooter, Modal, 
    ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalCloseButton,
    ModalFooter, Button, Input
  } from '@chakra-ui/react';
import './ChattingRoomList.css';
import SockJsClient from 'react-stomp';;

const ChattingRoomList = () => {
    // const client = new StompJs({
    //     brokerURL: "",
    //     connectHeaders: {
    //         login: "user",
    //         passcode: "password"
    //     },
    //     debug: function(msg) {
    //         console.log("에러발생: "+msg);
    //     },
    //     reconnectDelay: 5000,
    //     heartbeatIncoming: 4000,
    //     heartbeatOutgoing: 4000,
    // });

    // client.onConnect = function (frame) {
    //     console.log("연결 성공!!")
    // }

    // client.onSteomError = function (frame) {
    //     console.log('Broker reported: '+frame.headers)
    // }

    // client.active();

    // function sendMessage(msg) {
    //     client.publish({
    //         destination: "/topic/general",
    //         body: msg,
    //         headers: {priority: '9'},
    //     });
    // }

    // const subscription = client.subscribe('/queue/test', callback);



    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const [msg, setMsg] = useState([]);

    const handleCommentChange = ({ target: { value } }) => setMsg(value); // 댓글 작성 시 내용 설정
  
    const handleSubmit = (e) => { // 작성 버튼 클릭 시 이벤트 함수
        alert(`작성된 내용: ${msg}`); // 데이터 잘 들어왔는지 확인용!!!
    };

    return (
        <div className="chatting-list">
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size='sm'
                scrollBehavior='inside'
                trapFocus='false'
                id='chat-modal'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>songheew 님과의 채팅방</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                    <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor='#F0F8FF' border='2px solid #CDE5FF'>
                        <CardHeader>
                            <div className='my-info'>
                                <div className='chat-nickname me'>tang_tang</div>
                                <Image
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                                    alt='no image'
                                    borderRadius={100}
                                />
                            </div>
                            <div className='chat-from-me'>안녕하세요! 처음뵙겠습니다!!!</div>
                        </CardHeader>
                    </Card>
                    <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor="#FFF0F5" border="2px solid #FFE4E1">
                        <CardHeader>
                            <div className='other-info'>
                                <Image
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                                    alt='no image'
                                    borderRadius={100}
                                />
                                <div className='chat-nickname other'>songheew</div>
                            </div>
                            <div className='chat-from-other'>안녕하세요! 저도 만나서 반가워요!!</div>
                        </CardHeader>
                    </Card>
                    <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor="#FFF0F5" border="2px solid #FFE4E1">
                        <CardHeader>
                            <div className='other-info'>
                                <Image
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                                    alt='no image'
                                    borderRadius={100}
                                />
                                <div className='chat-nickname other'>songheew</div>
                            </div>
                            <div className='chat-from-other'>먼저 연락주셔서 감사합니다!! 탕탕특공대 좋아하시나봐요? 주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리</div>
                        </CardHeader>
                    </Card>
                    <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor="#FFF0F5" border="2px solid #FFE4E1">
                        <CardHeader>
                            <div className='other-info'>
                                <Image
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                                    alt='no image'
                                    borderRadius={100}
                                />
                                <div className='chat-nickname other'>songheew</div>
                            </div>
                            <div className='chat-from-other'>먼저 연락주셔서 감사합니다!! 탕탕특공대 좋아하시나봐요? 주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리</div>
                        </CardHeader>
                    </Card>
                    <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor="#FFF0F5" border="2px solid #FFE4E1">
                        <CardHeader>
                            <div className='other-info'>
                                <Image
                                    boxSize='30px'
                                    objectFit='cover'
                                    src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                                    alt='no image'
                                    borderRadius={100}
                                />
                                <div className='chat-nickname other'>songheew</div>
                            </div>
                            <div className='chat-from-other'>먼저 연락주셔서 감사합니다!! 탕탕특공대 좋아하시나봐요? 주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리주저리</div>
                        </CardHeader>
                    </Card>
                    </ModalBody>

                    <ModalFooter>
                    <form margin='0 auto' className='comment-form' onSubmit={(e)=>{handleSubmit(e)}}>
                        <Input className='comment-input' placeholder='채팅을 입력해주세요' type='text' size='xs' width={'80%'}
                        name='comment'
                        value={msg}
                        onChange={handleCommentChange}></Input>
                        <Button className='submit-btn' type='submit' margin-left='2%' size='xs'><p>전송</p></Button>
                    </form>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {arr.map((item, idx) => {
                return (
                    <>
            <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center' onClick={onOpen}>
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