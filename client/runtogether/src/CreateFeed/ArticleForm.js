import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ArticleForm.css';
import { Img, Radio, RadioGroup } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ImgUpload from '../RecruitCrew/ImgUpload';
import HashTag from './HashTag.js';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react';
import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const ArticleForm = () => {
    const [value, setValue] = useState('1'); // 공개 범위 (1: 전체공개, 2: 친구공개, 3: 비공개)
    const [content, setContent] = useState(""); // 피드 내용
    const [selectedHashtagsId, setSelectedHashtagsId] = useState(new Set()); // 해시태그
    const [selectedHashtagsName, setSelectedHashtagsName] = useState(new Set()); // 해시태그

    // const [files, setFiles] = useState<File[]>([]);
    // const fileInput = React.useRef(null); // 사진
    const { isOpen, onOpen, onClose } = useDisclosure();
    

    const handleContentChange = ({ target: { value } }) => setContent(value); // 글 작성 시 content 설정

    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        alert(`작성된 내용: ${content}, 공개범위: ${value}`); // 데이터 잘 들어왔는지 확인용!!!
        axios.get('http://i8a806.p.ssafy.io/api/user', {}, 
        {
          headers: {
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaXNzIjoic3NhZnkuY29tIiwiZXhwIjoxNjc2NzA5NTE2LCJpYXQiOjE2NzU0MTM1MTZ9.3SEuTifJa-8arsuzUPbckWYr4Eqe4jnWZMXBo0eDyNk0-M-HBkWiiXgCqZXQ7WB4CqS4TtAaTUida6pKUH5MCg"
          }
        }
      )
    };

    // const handleButtonClick = e => {
    //     fileInput.current.click();
    // };
      
    // const handleImgChange = e => {
    //     console.log(e.target.files[0]);
    // };

    const navigate = useNavigate();
 
    const navigateHome = () => {
      navigate("/");
    };

    return (
        <form className='article-form' onSubmit={handleSubmit}>
            <ImgUpload></ImgUpload>
            <HashTag selectedHashtagsId={selectedHashtagsId} selectedHashtagsName={selectedHashtagsName}></HashTag>
            <div className='content-and-range'>
            <div className='content' type='text'>CONTENT</div>
                <div className='range'>
                    <RadioGroup onChange={setValue} value={value} className='radio-range'>
                        <Radio size='sm' value='1' mx={1}>전체 공개</Radio>
                        <Radio size='sm' value='2' mx={1}>일부 공개</Radio>
                        <Radio size='sm' value='3' mx={1}>비공개</Radio>
                    </RadioGroup>
                </div>
            </div>
            <textarea className='content-input' name='content' value={content} onChange={handleContentChange} placeholder='내용을 입력해주세요' rows="6"></textarea>
            <div className='submit-and-cancel'>
                <button className='submit-btn' type='submit'><p>등록</p></button>
                <button className='cancel-btn' type='button' onClick={onOpen}><p>취소</p></button>
            </div>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' className='modal'>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>경고</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                작성중인 글이 모두 지워집니다. 그래도 나가시겠습니까?
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onClose}>
                    취소
                  </Button>
                  <Button variant='ghost' onClick={navigateHome}>확인</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </form>
        
    );
}

export default ArticleForm;
