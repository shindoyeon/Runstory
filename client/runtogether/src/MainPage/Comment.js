import React, {useState} from 'react';
import './Feed.css';
import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    CardBody,
    CardFooter,
    useDisclosure
  } from '@chakra-ui/react';
import axios from 'axios';

function Comment({comments, feedId}) {
    const [comment, setComment] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    // 댓글 작성
    async function postComment() {
        await axios.post("http://i8a806.p.ssafy.io/api/comment", {
            feedId: feedId,
            content: comment
        });
    }

    // 댓글 삭제
    async function deleteComment(commentId) {
        await axios.delete("http://i8a806.p.ssafy.io/api/comment/"+commentId, {
            commentId: commentId
        });
    }

    // 댓글 수정
    // async function putComment(commentId) {
    //     await axios.post(""+, {
    //         commentId: commentId,
    //         content: comment
    //     });
    // }


    const handleCommentChange = ({ target: { value } }) => setComment(value); // 댓글 작성 시 내용 설정
  
    const handleSubmit = (e) => { // 작성 버튼 클릭 시 이벤트 함수
        alert(`피드번호: ${feedId}, 작성된 내용: ${comment}`); // 데이터 잘 들어왔는지 확인용!!!
        postComment(comment);
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
                            <Card direction={{base: 'row'}} width='100%' margin='0 auto' mt='10px' key={idx}>
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
                                    {/* <div style={{marginTop: '10px', fontSize: '12px'}}>답글 보기</div> */}
                                </CardBody>
                                <CardFooter>
                                    {/* <div className='comment-modify-btn'>수정</div> */}
                                    <div className='comment-delete-btn' onClick={onOpen}>삭제</div>
                                    <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' className='modal'>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>댓글 삭제</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                            댓글을 삭제하시겠습니까?
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button colorScheme='red' mr={3} onClick={onClose}>
                                                    취소
                                                </Button>
                                                <Button variant='ghost' onClick={()=>{deleteComment(item.feedCommentId)}}>확인</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>                                
                                </CardFooter>
                                {item.feedRecomments.map((item2, idx2) => {
                                    return(
                                        <>{item2.user}{item2.content}</>
                                    )
                                })}
                            </Card>
                            )
                        })}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <form margin='0 auto' className='comment-form'
                    onSubmit={(e)=>{handleSubmit(e)}}>
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