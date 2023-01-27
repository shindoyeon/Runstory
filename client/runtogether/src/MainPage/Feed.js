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
    Input,
    Button,
    CardBody,
    ChakraProvider,
  } from '@chakra-ui/react';

const Feed = () => {
    const handleMoreBtn = i => {
        let copyArray = [...arr]; // 
        copyArray[i] = {author: copyArray[i].author, profileImg: copyArray[i].profileImg, content: copyArray[i].content, isLiked: copyArray[i].isLiked, contentClosed: !copyArray[i].contentClosed}
        setArr ( copyArray );
    }

    const feeds = [
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? ",
            isLiked: false,
            contentClosed: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? 오늘 운동어떄요? ",
            isLiked: false,
            contentClosed: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false,
            contentClosed: false
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


    const clickShare = i => {
        let text = "작성자: " + arr[i].author + "\n글내용: " + arr[i].content;
        console.log(text)
        // setFeedInfo(text);
        // console.log(feedInfo)
    }

    return (
        <div className='entire-feed'>
            <ChakraProvider height='5vh'>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' className='modal' scrollBehavior='inside' height={'10vh'}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader size='xs'>댓글</ModalHeader>
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
                                    <div className='comment-nickname'>songheew</div>
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
                                        src='https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625'
                                        alt='Dan Abramov'
                                    />
                                    <div className='comment-nickname'>songheew</div>
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
                                    <div className='comment-nickname'>songheew</div>
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
                                    <div className='comment-nickname'>songheew</div>
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
                                    <div className='comment-nickname'>songheew</div>
                                </div>
                                <div className='comment-content'>좋은 사진이네요~</div>
                            </CardBody>
                        </Card>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <form margin='0 auto' textAlign={'center'} className='comment-form'
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
            </ChakraProvider>
            {arr.map((item, idx) => {
                return (
                <div width='100%' margin='0 auto'>
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
                            <button className='share-btn'><FontAwesomeIcon icon={faShare} onClick={() => {clickShare(idx)}}/></button>
                        </div>
                    </CardHeader>
                    {/* 피드 내용 */}
                    <div className='card-body'>
                        <div className='post-image'></div>
                            {/* 내용 */}
                            <div className={item.contentClosed?'feed-content-open':'feed-content'} onClick={() => handleMoreBtn(idx)}>{item.content}</div>
                    <div className='like-comment feed-content'> 
                        {item.isLiked ?
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '20px', fontWeight: 'bold'}} onClick={()=> {
                            clickLike(idx)}}/> :	//꽉차있는 하트를 return
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '20px'}} onClick={()=> {
                            clickLike(idx)}}/>}
                        <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '20px'}} onClick={onOpen}/>
                    </div>
                </div>
                    {/* 좋아요 및 댓글 버튼 */}
            </Card>
        </div>
                );
            })}
        </div>
    );
}

export default Feed;