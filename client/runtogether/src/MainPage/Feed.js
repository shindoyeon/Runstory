import React, {useEffect} from 'react';
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
    ChakraProvider,
    Spinner,
  } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Feed = () => {
    const handleMoreBtn = i => {
        let copyArray = [...arr]; // 
        copyArray[i] = {author: copyArray[i].author, profileImg: copyArray[i].profileImg, contentImg: copyArray[i].contentImg, content: copyArray[i].content, isLiked: copyArray[i].isLiked, contentClosed: !copyArray[i].contentClosed}
        setArr ( copyArray );
    }

    // 피드 끝까지 내려갔을 때 새로고침 버튼을 만들어주기 위함
    function refreshToHome() {
        window.location.replace("/")
      }

    // 3줄 이상 내용 피드를 관리
    const [isMore, setIsMore] = React.useState(true)

    var [feeds, setFeeds] = React.useState([
        {   
            id: 1,
            author: "tykwon_97",
            profileImg: "",
            contentImg: "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a",
            content: "CONTENT 1 (프로필 사진 없는 피드입니다)",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 2,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "",
            content: "CONTENT 2 (컨텐츠 사진 없는 피드입니다)",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 3,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIw4ODANanjYpQku16XgXC4qL71PJ1EfVTd9CePlnmA&s",
            content: "CONTENT 3",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 4,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 4",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 5,
            author: "tykwon_97",
            profileImg: "",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 5 (프로필 사진 없는 피드입니다)",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 6,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "",
            content: "CONTENT 6 (컨텐츠 사진 없는 피드입니다)",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 7,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 7",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 8,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 8",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 9,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 9",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 10,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 10",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 11,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 11",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 12,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            content: "CONTENT 12",
            isLiked: false,
            contentClosed: false
        },
        {   
            id: 13,
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13 CONTENT 13",
            contentImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBi3uBGrLaq6-jghD9lV-77z9J9eJvwsazdvrfEFp9N1eR4PPr1vvSLO9ql6rDG1N_HA&usqp=CAU",
            isLiked: false,
            contentClosed: false
        },
    ])

    const { isOpen, onOpen, onClose } = useDisclosure()
    var startIdx = 0;
    const [arr, setArr] = React.useState(Array.from(feeds.slice(startIdx, startIdx+3)))

    const clickLike = i => {
          let copyArray = [...arr]; // 
          copyArray[i] = {author: copyArray[i].author, profileImg: copyArray[i].profileImg, contentImg: copyArray[i].contentImg, content: copyArray[i].content, isLiked: !copyArray[i].isLiked, contentClosed: copyArray[i].contentClosed}
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
    }

    function fetchData() {
        startIdx = arr.length;
        var endIdx = startIdx + 3;
        if(arr.length === feeds.length) {
            setIsMore(false);
            return;
        }
        setTimeout(() => {
            setArr(arr.concat(Array.from(feeds.slice(startIdx, endIdx))));
        }, 1500);
      };

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
            <InfiniteScroll
                dataLength={arr.length}
                next={fetchData}
                hasMore={isMore}
                loader={<p style={{ textAlign: "center" }}><Spinner textAlign={'center'}/></p>}
                // width={50}
                endMessage={
                    <div style={{ textAlign: "center", fontWeight: "light"}}>
                        <p>
                            모든 피드를 확인했습니다
                        </p>
                        <FontAwesomeIcon className='refresh' icon={faArrowRotateRight} onClick={refreshToHome}></FontAwesomeIcon>
                    </div>
                }
            >
            {arr.map((item, idx) => {
                return (
                <div height="50vh" margin='0 auto' marginTop='5%' key={idx}>
                <Card className='card' variant='outline' boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'>
                    {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
                    <CardHeader className='card-header' > 
                        <div className='card-header-left'>
                            <Image
                                borderRadius='full'
                                boxSize='40px'
                                src={item.profileImg===""?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':item.profileImg}
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
                        <Image
                                border='1px solid #CBD9E7'
                                margin='0 auto'
                                marginTop='10px'
                                width='90%'
                                borderRadius='lg'
                                display={item.contentImg===""?'none':''}
                                src={item.contentImg}
                        />
                        {/* <div className='post-image' backgroundImage={item.contentImg}></div> */}
                            
                            {/* 내용 */}
                            <div className={item.contentClosed?'feed-content-open':'feed-content'} onClick={() => handleMoreBtn(idx)}>{item.content}</div>
                    <div className='like-comment'> 
                        {item.isLiked ?
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '25px', fontWeight: 'bold'}} onClick={()=> {
                            clickLike(idx)}}/> :    //꽉차있는 하트를 return
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '25px'}} onClick={()=> {
                            clickLike(idx)}}/>}
                        <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '25px'}} onClick={onOpen}/>
                    </div>
                </div>
                    {/* 좋아요 및 댓글 버튼 */}
            </Card>
        </div>
                );
            })}
        </InfiniteScroll>
        </div>
    );
}

export default Feed;