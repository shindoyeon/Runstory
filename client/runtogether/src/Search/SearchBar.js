import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react';
import axios from 'axios';

const SearchBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [searchKeyword, setSearchKeyword] = useState();
    const [userResult, setUserResult] = useState([]);
    const [feedResult, setFeedResult] = useState([]);
    const [runningCrewResult, setRunningCrewResult] = useState([]);

    const handleKeywordChange = ({ target: { value } }) => setSearchKeyword(value); // 검색어 가지고 있기

    const handleSubmit = (event) => { // 검색 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        // console.log(searchKeyword)
        onClose()
        search(searchKeyword)
    };

    function search(keyword) {
        console.log(keyword)
        setUserResult(getUserSearchResult(keyword));
        setFeedResult(getFeedSearchResult(keyword));
        setRunningCrewResult(getRunningCrewSearchResult(keyword));
    }

    async function getUserSearchResult(keyword) {
        const data = await axios.get("", {
            type: 0,
            keyword: keyword,
            lastId: 0
        });
        return data.data;
    }

    async function getFeedSearchResult(keyword) {
        const data = await axios.get("", {
            type: 1,
            keyword: keyword,
            lastId: 0
        });
        return data.data;
    }

    async function getRunningCrewSearchResult(keyword) {
        const data = await axios.get("", {
            type: 2,
            keyword: keyword,
            lastId: 0
        });
        return data.data;
    }

    const [hashtags, setHashtags] = useState([]);
  
    useEffect(() => {
        (async () => {
        const data = await axios.get(
        "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/hashtag"
    );
        setHashtags(data.data.data.hashtags);
        })();
    }, []);

    return (
    <div className="search-input">
        <Modal isOpen={isOpen} onClose={onClose} size='sm' isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>검색창</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form className="search-input" onSubmit={handleSubmit}>
                            <Input width='50%' size='m' variant='flushed' placeholder='검색어를 입력해주세요' value={searchKeyword} textAlign='center' ms={3} onChange={handleKeywordChange} />
                            <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </form>
                        <div className="hashtag-description" style={{textAlign: 'center', marginTop: '20px', marginBottom: '10px', fontSize: '13px'}}>피드 검색은 해시태그를 기반으로 이루어집니다. 해시태그 목록은 다음과 같습니다.</div>
                        {hashtags.map((item, idx) => {
                            return (
                            <div style={{display: 'inline-block'}}>
                                <button
                                value={item.hashtagId}
                                key={idx}
                                type='button'            
                                className="hashtag-selected"
                                >
                                # {item.hashtagName}
                                </button>
                            </div>
                            );
                        })}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Input readOnly width='50%' size='m' variant='flushed' placeholder='검색하러가기' textAlign='center' ms={3} onClick={onOpen} />
            <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            {userResult.map((item, idx) => {
                console.log("HI")
            })}
            </div>
    );
}

export default SearchBar;