import React, {useEffect, useState} from 'react';
import './Feed.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare, faHeart, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"; // 공유 버튼
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
    Input,
    Button,
    CardBody,
  } from '@chakra-ui/react';

function Comment({comments}) {
    const [comment, setComment] = useState([]);

    const handleCommentChange = ({ target: { value } }) => setComment(value); // 댓글 작성 시 내용 설정
  
    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        alert(`작성된 내용: ${comment}`); // 데이터 잘 들어왔는지 확인용!!!
        // 여기서 댓글 POST
    };
    return (
        <>
        <ModalOverlay />
                <ModalContent>
                <ModalHeader size='xs'>댓글</ModalHeader>
                <ModalCloseButton />
                <ModalBody border='2px' borderColor='gray.200'>
                    <div className="comments">
                        {comments.map((item, idx) => {
                        return(
                            <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px'>
                                <CardBody alignItems='center'>
                                    <div className='card-header-left'>
                                        <Image
                                            borderRadius='full'
                                            boxSize='30px'
                                            src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                            alt='Dan Abramov'
                                        />
                                        <div className='comment-nickname'>{item.userNickname}</div>
                                    </div>
                                    <div className='comment-content'>{item.content}</div>
                                </CardBody>
                            </Card>
                            )
                        })}    
                    </div>
                </ModalBody>
                <ModalFooter>
                    <form margin='0 auto' className='comment-form'
                    onSubmit={handleSubmit}>
                        <Input className='comment-input' placeholder='댓글을 입력해주세요' type='text' size='xs' width={'80%'}
                        name='comment'
                        value={comment}
                        onChange={handleCommentChange}></Input>
                        <Button className='submit-btn' type='submit' margin-left='2%' size='xs'><p>등록</p></Button>
                    </form>
                </ModalFooter>
                </ModalContent>
        </>
    );
}

export default Comment;