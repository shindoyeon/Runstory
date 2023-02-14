import React, { useEffect, useState } from 'react';
import './ArticleForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    HStack,
    useNumberInput,
    Input
  } from '@chakra-ui/react';
import HashTag from '../CreateFeed/HashTag';
import ImgUpload from './ImgUpload';
import axios from 'axios';

const ArticleForm = () => {
    const accessToken = localStorage.getItem("access-token");
    const { isOpen, onOpen, onClose } = useDisclosure(); // 모달창을 위한 변수

    const [selectedHashtagsId, setSelectedHashtagsId] = useState(new Set()); // 해시태그
    const [selectedHashtagsName, setSelectedHashtagsName] = useState(new Set()); // 해시태그
    const [crewName, setCrewName] = useState(""); // 런닝 제목~
    const [content, setContent] = useState(""); // 런닝 내용~~!
    const [location, setLocation] = useState(""); // 런닝 내용~~!
    const [distance, setDistance] = useState(0); 
    const [date, setDate] = useState(""); 
    const [start, setStart] = useState(["","","",""]); //시작 시간, 위도, 경도, 시작 위치
    const [end, setEnd] = useState(["","","",""]); //종료 시간, 위도, 경도, 종료 위치
    const [image, setImage] = useState([]);
    const [manCount, setManCount] = useState(0);
    const [womenCount, setWomenCount] = useState(0);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);
    const [count, setCount] = useState(0); //성별 무관

    const navigate = useNavigate(); // navigate 변수 생성

    const handleCrewNameChange = ({ target: { value } }) => setCrewName(value);
    const handleContentChange = ({ target: { value } }) => setContent(value); 
    const handleLocationChange = ({ target: { value } }) => setLocation(value); 
    const handleDistanceChange = ({ target: { value } }) => setDistance(value); 
    const handleManCountChange = ({ target: { value } }) => setManCount(value); 
    const handleWomenCountChange = ({ target: { value } }) => setWomenCount(value); 
    const handleCountChange = ({ target: { value } }) => setCount(value); 
    const handleMinAgeChange = ({ target: { value } }) => setMinAge(value); 
    const handleMaxAgeChange = ({ target: { value } }) => setMaxAge(value); 
    const handleDateChange = ({ target: { value } }) => setDate(value); 
    
    const navigateHome = () => { // 취소 클릭 시 홈으로 가기 위함
      navigate("/");
    };

    // 남자 수 입력을 위한 부분
    const { getInputProps: manInput, getIncrementButtonProps: manInc, getDecrementButtonProps: manDec } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 50,
    });

    // 여자 수 입력을 위한 부분
    const { getInputProps: womanInput, getIncrementButtonProps: womanInc, getDecrementButtonProps: womanDec } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 50,
    });

    // 성별 무관 수 입력을 위한 부분
    const { getInputProps: whoeverInput, getIncrementButtonProps: whoeverInc, getDecrementButtonProps: whoeverDec } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 50,
    });

    // +클릭 시 1명 증가, -클릭 시 1명 감소, 그에 따른 input의 value 반영을 위한 부분
    const incMan = manInc();
    const decMan = manDec();
    const inputMan = manInput();
    const incWoman = womanInc();
    const decWoman = womanDec();
    const inputWoman = womanInput();
    const incWhoever = whoeverInc();
    const decWhoever = whoeverDec();
    const inputWhoever = whoeverInput();

    // TIME 입력 부분의 default 값 (placeholder)을 설정하기 위한 부분
    useEffect(() => { 
      var today = new Date(); 
      var year = today.getFullYear(); // 년도
      var month = today.getMonth() + 1;  // 월
      if(month < 10) { // 자릿수 조정
        month = '0' + month;
      }
      var date = today.getDate();  // 날짜
      if(date < 10) { // 자릿수 조정
        date = '0' + date;
      }

      var hour = today.getHours(); // 시
      var hour2 = today.getHours() + 1;
      if(hour < 10) { // 자릿수 조정
        hour = '0' + hour;
      }
      if(hour2 < 10) { // 자릿수 조정
        hour2 = '0' + hour2;
      }
      var minute = today.getMinutes();  // 분
      if(minute < 10) { // 자릿수 조정
        minute = '0' + minute;
      }

      var finalDate = year+"-"+month+"-"+date;
      var finalTime = hour+":"+minute;
      var finalTime2 = hour2+":"+minute;

      document.getElementById('start-date-input').value = finalDate;
      document.getElementById('start-time-input').value = finalTime;
      document.getElementById('end-time-input').value = finalTime2;
    })

    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
      event.preventDefault();
      var selectedHashTags = Array.from(selectedHashtagsId)
      // console.log(selectedHashTags)
      // alert(`작성된 내용: ${content}, 공개범위: ${value}, 해시태그: ${selectedHashTags}`); // 데이터 잘 들어왔는지 확인용!!!
      registerRunning(selectedHashTags);
    };

    async function registerRunning(selectedHashTags) {
      const formData = new FormData();
      // var temp = {'content': content, 'publicScope': value, 'selectedHashTags': selectedHashTags}
      console.log("이미지 : "+image)
      image.forEach((file)=>{
        console.log("file : "+file);
        formData.append('runningImg', file)
      })
      formData.append('crewName', crewName);
      formData.append('runningContent', content);
      formData.append('distance', distance);

      formData.append('man', manCount);
      formData.append('women', womenCount);
      formData.append('total', manCount+womenCount+count);
      
      formData.append('genderType', "All");
      // formData.append('hasDog', true);

      formData.append('minAge', minAge);
      formData.append('maxAge', maxAge);

      formData.append('startTime', date+"-"+start[0]);
      // formData.append('startLatitude', start[1]);
      // formData.append('startLongitude', start[2]);
      formData.append('startLocation', start[3]);
      
      formData.append('endTime', date+"-"+end[0]);
      // formData.append('endLatitude', end[1]);
      // formData.append('endLongitude', end[2]);
      formData.append('endLocation', end[3]);
      
      formData.append('hastag', selectedHashTags);

      console.log(crewName, content, location)
      const data = await axios({
        url: 'https://i8a806.p.ssafy.io/api/running',
        // url: 'http://localhost:8080/running',            
        method: "post", data: formData,
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` } });

        navigate("/running-crew-list");
    }

    return (
        <form className='article-form' onSubmit={handleSubmit}>
            <ImgUpload image={image} setImage={setImage}></ImgUpload>
            <HashTag selectedHashtagsId={selectedHashtagsId} selectedHashtagsName={selectedHashtagsName}></HashTag>
            <div className='title'>크루명</div>
            <input className='title-input' placeholder='제목을 입력해주세요' onChange={handleCrewNameChange} type='text'></input>
            <div className='content' type='text'>CONTENT</div>
            <textarea className='content-input' placeholder='내용을 입력해주세요' rows="5" onChange={handleContentChange}>{content}</textarea>
            <div className='location'>LOCATION</div>
            <input className='location-input' placeholder='위치를 입력해주세요' type='text' onChange={handleLocationChange}></input>

            <div className='title'>거리</div>
            <input className='title-input' placeholder='거리를 입력해주세요' onChange={handleDistanceChange} type='number'></input>
            <div className='title'>최소나이</div>
            <input className='title-input' placeholder='최소나이를 입력해주세요' onChange={handleMinAgeChange} type='number'></input>
            <div className='title'>최대나이`</div>
            <input className='title-input' placeholder='최대나이를 입력해주세요' onChange={handleMaxAgeChange} type='number'></input>
            
            <div className='people'>PEOPLE</div>
            <div className='people-input'>
                <div className='man-input'>
                    <FontAwesomeIcon icon={faPerson} className='man-icon' />
                    <HStack>
                      <div className='man-number' style={{width: '70px'}}>&nbsp;남자 수</div>
                      <Button {...decMan} size='xs' variant='link'>-</Button>
                      <Input {...inputMan} size='xs' textAlign={'center'} width='30%' onChange={handleManCountChange}/>
                      <Button {...incMan} size='xs' variant='link'>+</Button>
                    </HStack>
                    {/* <input placeholder='남자 수' className='man-number' type="number"></input> */}
                </div>
                <div className='woman-input'>
                    <FontAwesomeIcon icon={faPersonDress} className='woman-icon' />
                    <HStack>
                      <div className='woman-number' style={{width: '70px'}}>&nbsp;여자 수</div>
                      <Button {...decWoman} size='xs' variant='link'>-</Button>
                      <Input {...inputWoman} size='xs' textAlign={'center'} width='30%'onChange={handleWomenCountChange}/>
                      <Button {...incWoman} size='xs' variant='link'>+</Button>
                    </HStack>
                </div>
                <div className='whoever-input'>
                    <FontAwesomeIcon icon={faQuestion} className='whoever-icon' />
                    <HStack>
                      <div className='whoever-number' style={{width: '70px'}}>&nbsp;성별 무관 수</div>
                      <Button {...decWhoever} size='xs' variant='link'>-</Button>
                      <Input {...inputWhoever} size='xs' textAlign={'center'} width='30%'onChange={handleCountChange}/>
                      <Button {...incWhoever} size='xs' variant='link'>+</Button>
                    </HStack>
                </div>
            </div>
            <div className='time'>TIME</div>
            <div className='time-input'>
                <div className='date'>날짜</div>
                <input className='start-date-input' type='date' id='start-date-input' onChange={handleDateChange}></input>
                <input className='start-time-input' type='time' id='start-time-input'></input>
                <div className='between'>~</div>
                <input className='end-time-input' type='time' id='end-time-input'></input>
            </div>
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