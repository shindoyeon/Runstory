import React, { useEffect } from 'react';
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
  } from '@chakra-ui/react'


const ArticleForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // 모달창을 위한 변수

    const navigate = useNavigate(); // navigate 변수 생성
 
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

    return (
        <form className='article-form'>
            <div className='title'>TITLE</div>
            <input className='title-input' placeholder='제목을 입력해주세요' type='text'></input>
            <div className='content' type='text'>CONTENT</div>
            <textarea className='content-input' placeholder='내용을 입력해주세요' rows="5"></textarea>
            <div className='location'>LOCATION</div>
            <input className='location-input' placeholder='위치를 입력해주세요' type='text'></input>
            <div className='people'>PEOPLE</div>
            <div className='people-input'>
                <div className='man-input'>
                    <FontAwesomeIcon icon={faPerson} className='man-icon' />
                    <HStack>
                      <div className='man-number' style={{width: '70px'}}>&nbsp;남자 수</div>
                      <Button {...decMan} size='xs' variant='link'>-</Button>
                      <Input {...inputMan} size='xs' textAlign={'center'} width='30%'/>
                      <Button {...incMan} size='xs' variant='link'>+</Button>
                    </HStack>
                    {/* <input placeholder='남자 수' className='man-number' type="number"></input> */}
                </div>
                <div className='woman-input'>
                    <FontAwesomeIcon icon={faPersonDress} className='woman-icon' />
                    <HStack>
                      <div className='woman-number' style={{width: '70px'}}>&nbsp;여자 수</div>
                      <Button {...decWoman} size='xs' variant='link'>-</Button>
                      <Input {...inputWoman} size='xs' textAlign={'center'} width='30%'/>
                      <Button {...incWoman} size='xs' variant='link'>+</Button>
                    </HStack>
                </div>
                <div className='whoever-input'>
                    <FontAwesomeIcon icon={faQuestion} className='whoever-icon' />
                    <HStack>
                      <div className='whoever-number' style={{width: '70px'}}>&nbsp;성별 무관 수</div>
                      <Button {...decWhoever} size='xs' variant='link'>-</Button>
                      <Input {...inputWhoever} size='xs' textAlign={'center'} width='30%'/>
                      <Button {...incWhoever} size='xs' variant='link'>+</Button>
                    </HStack>
                </div>
            </div>
            <div className='time'>TIME</div>
            <div className='time-input'>
                <div className='date'>날짜</div>
                <input className='start-date-input' type='date' id='start-date-input'></input>
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