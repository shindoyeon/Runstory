import React from 'react';
import './Feed.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons"; // 공유 버튼
import { faComment } from "@fortawesome/free-regular-svg-icons"; // 하트(좋아요), 댓글 버튼

import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    FormControl,
    Input,
    Button,
    CardBody,
  } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

const Feed = () => {
    const feeds = [
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [arr, setArr] = React.useState(feeds)

    const clickLike = i => {
          let copyArray = [...arr]; // 
          copyArray[i] = {author: copyArray[i].author, profileImg: copyArray[i].profileImg, content: copyArray[i].content, isLiked: !copyArray[i].isLiked,}
          setArr ( copyArray );
    }

    const [comment, setComment] = React.useState(""); // 댓글 내용
    
    const handleCommentChange = ({ target: { value } }) => setComment(value); // 댓글 작성 시 내용 설정

    
    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        alert(`작성된 내용: ${comment}`); // 데이터 잘 들어왔는지 확인용!!!
    };


    return (
        <div className='body'>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' className='modal' scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>댓글</ModalHeader>
                <ModalCloseButton />
                <ModalBody border='2px' borderColor='gray.200'>
                    <div className="comments">
                        <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' alignItems='left'>
                            <CardBody textAlign={'left'} alignItems='center'>
                                <div className='card-header-left'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='30px'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
                                    />
                                    <div className='nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                        <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' alignItems='left'>
                            <CardBody textAlign={'left'} alignItems='center'>
                                <div className='card-header-left'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='30px'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
                                    />
                                    <div className='nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                        <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' alignItems='left'>
                            <CardBody textAlign={'left'} alignItems='center'>
                                <div className='card-header-left'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='30px'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
                                    />
                                    <div className='nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                        <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' alignItems='left'>
                            <CardBody textAlign={'left'} alignItems='center'>
                                <div className='card-header-left'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='30px'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
                                    />
                                    <div className='nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                        <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' alignItems='left'>
                            <CardBody textAlign={'left'} alignItems='center'>
                                <div className='card-header-left'>
                                    <Image
                                        borderRadius='full'
                                        boxSize='30px'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
                                    />
                                    <div className='nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <form margin='0 auto' justifyContent={'space-evenly'} textAlign={'center'} className='comment-form'
                    onSubmit={handleSubmit}>
                        <Input className='comment-input' placeholder='댓글을 입력해주세요' type='text' size='xs' width={'80%'}
                        name='comment'
                        value={comment}
                        onChange={handleCommentChange}></Input>
                        <Button className='submit-btn' type='submit' margin-left='2%' size='xs'><p>등록</p></Button>
                    </form>
                </ModalFooter>
                </ModalContent>
            </Modal>
            {arr.map((item, idx) => {
                return (
                <>
                <Card className='card'>
                    {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
                    <CardHeader className='card-header'> 
                        <div className='card-header-left'>
                            <Image
                                borderRadius='full'
                                boxSize='40px'
                                src={item.profileImg}
                                alt='Dan Abramov'
                            />
                            <div className='nickname'>{item.author}</div>
                        </div>
                        <div className='card-header-right'>
                            <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
                        </div>
                    </CardHeader>
                    {/* 피드 내용 */}
                    <div className='card-body'>
                        <div className='post-image'></div>
                            {/* 제목 */}
                            <div className='title'>오운완</div>
                            {/* 내용 */}
                            <div className='feed-content'>{item.content}</div>
                    <div className='like-comment feed-content'> 
                        {item.isLiked ?
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '25px', fontWeight: 'bold'}} onClick={()=> {
                            clickLike(idx)}}/> :	//꽉차있는 하트를 return
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '25px'}} onClick={()=> {
                            clickLike(idx)}}/>}
                        <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '25px'}} onClick={onOpen}/>
                    </div>
                </div>
                    {/* 좋아요 및 댓글 버튼 */}
            </Card>
        </>
                );
            })}
        </div>
    );
}

export default Feed;