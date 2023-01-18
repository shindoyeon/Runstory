import React, { useState } from 'react';
import './ArticleForm.css';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const ArticleForm = () => {
    const [value, setValue] = useState('1'); // 공개 범위 (1: 전체공개, 2: 친구공개, 3: 비공개)
    const [content, setContent] = useState(""); // 피드 내용
    const fileInput = React.useRef(null); // 사진

    const handleContentChange = ({ target: { value } }) => setContent(value); // 글 작성 시 content 설정

    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        alert(`작성된 내용: ${content}, 공개범위: ${value}, IMG: ${fileInput.name}`); // 데이터 잘 들어왔는지 확인용!!!
    };


    const goToHome = () => { // 취소 버튼 클릭 시 confirm창 띄우기

        if (window.confirm("작성 중이던 글이 모두 삭제됩니다. 정말 취소하시겠습니까?")) { // 확인 클릭 시
          alert("홈으로 돌아갑니다."); // 홈으로 돌아감
          
        } else { // 그렇지 않으면
            // 아무 것도 하지 않음
        }
    };

    const handleButtonClick = e => {
        fileInput.current.click();
    };
      
    const handleImgChange = e => {
        console.log(e.target.files[0]);
    };

    return (
        <form className='article-form' onSubmit={handleSubmit}>
            <div className='upload-box'  onClick={handleButtonClick}><FontAwesomeIcon icon={faPlusCircle} /></div>
      <input type="file"
            ref={fileInput}
            onChange={handleImgChange}
            style={{ display: "none" }} />
            <div className='content-and-range'>
            <div className='content' type='text'>CONTENT</div>
                <div className='range'>
                    <RadioGroup onChange={setValue} value={value} className='radio-range'>
                        <Radio size='sm' value='1' mx={1} fontSize='5px'>전체 공개</Radio>
                        <Radio size='sm' value='2' mx={1}>일부 공개</Radio>
                        <Radio size='sm' value='3' mx={1}>비공개</Radio>
                    </RadioGroup>
                </div>
            </div>
            {/* <input className='title-input' placeholder='제목을 입력해주세요' type='text'></input> */}
            <textarea className='content-input' name='content' value={content} onChange={handleContentChange} placeholder='내용을 입력해주세요' rows="6"></textarea>
            {/* <div className='location' id='location'>LOCATION</div>
            <input className='location-input' placeholder='위치를 입력해주세요' type='text'></input>
            <button type='button' onClick={openPostCode} className='search-zip-btn'>위치 검색</button>
            <div id='popupDom' className='popup'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                        <div>{loc}</div>
                    </PopupDom>
                )}
            </div> */}
            <div className='submit-and-cancel'>
                <button className='submit-btn' type='submit'><p>등록</p></button>
                <button className='cancel-btn' onClick={goToHome}><p>취소</p></button>
            </div>
        </form>
    );
}

export default ArticleForm;