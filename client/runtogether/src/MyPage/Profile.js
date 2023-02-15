import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar, Progress, Divider, useDisclosure,
  Modal, ModalOverlay, ModalHeader, ModalBody,
  ModalFooter, ModalContent, ModalCloseButton,
  Button, Input, Stack, Radio, Slider,
  SliderTrack, SliderFilledTrack,
  Tooltip, SliderThumb, RadioGroup
} from '@chakra-ui/react';
import axioswithH from '../api/axios'

function UpsideProfile() {
  const {isOpen: isModifyOpen, onOpen: onModifyOpen, onClose: onModifyClose} = useDisclosure();  

  const [file, setFile] = useState();
  const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [userId, setUserId] = useState();
  const [level, setLevel] = useState();
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();
  const [experience, setExperience] = useState();
  const [gender, setGender] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();
  const [fileUrl, setFileUrl] = useState();
  const fileInput = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access-token") === null) { // 비회원 -> 로그인
        navigate("/user/login");
    }

    (async () => { // 피드 주인
      const data = await axioswithH({
          url: '/user',
          method: "GET"
      });
      console.log(data.data.data)
      setUserId(data.data.data.userId)
      setNickname(data.data.data.userNickname)
      setName(data.data.data.userName)
      setLevel(data.data.data.level)
      setExperience(data.data.data.experience)
      setGender(data.data.data.gender)
      setPhoneNum(data.data.data.phoneNum)
      setAddress(data.data.data.address)
      setAge(data.data.data.age)
      setFileUrl("http://i8a806.p.ssafy.io/runstory/user/"+data.data.data.profileImgFileName)
    })();
  }, []);

  function modify() {

  }

  // 프로필 사진 변경
  const imgChange = (e) => {
    if(e.target.files[0]){
        setFile(e.target.files[0])
    } else{ //업로드 취소할 시
        setProfileImg("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
        return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
            setProfileImg(reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])
    console.log(e.target.files[0])
  }

  return (
    <div>
      <Modal isOpen={isModifyOpen} onClose={onModifyClose} size='xs' scrollBehavior='inside' isCentered>
          <ModalOverlay />
          <ModalContent>
              <ModalHeader>정보 수정</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form>
              <div style={{textAlign: 'center'}}>
                <Avatar 
                    src={profileImg}
                    isCentered
                    size={'xl'} 
                    onClick={()=>{fileInput.current.click()}}/>
                <input 
                    type='file' 
                    style={{display:'none'}}
                    accept='image/jpg,impge/png,image/jpeg' 
                    name='profile_img'
                    onChange={imgChange}
                    ref={fileInput}/>
            </div>
            <div style={{textAlign: 'center', marginBottom: '10px'}}>프로필 사진을 설정해보세요!</div>
            <div style={{textAlign: 'left'}}>이메일</div>
            {/* <div style={{marginLeft: '10%', textAlign: 'center', border: '1px solid #6A6A6A', width: '35%', color: '#6A6A6A', display: 'none'}} id='auth-email'></div> */}
            <Input required id='email-input' border='1px solid #6A6A6A' width="100%" size='xs' variant='outline' readOnly ps={2} mb={3} value={userId}/>
            {/* <div style={{marginLeft: '10%', textAlign: 'left'}}>비밀번호</div>
            <Input border='1px solid #6A6A6A'  width='80%' size='xs' variant='outline' placeholder='비밀번호' value={password} ps={2} mb={3} onChange={handlePasswordChange} /> */}
            <div style={{textAlign: 'left'}}>이름</div>
            <Input border='1px solid #6A6A6A' width='100%' size='xs' variant='outline' placeholder='이름' value={name} ps={2} mb={3}/>
            <div style={{textAlign: 'left'}}>닉네임</div>
            <Input border='1px solid #6A6A6A' width='100%' size='xs' variant='outline' placeholder='닉네임' value={nickname} ps={2} mb={3}/>
            <div style={{textAlign: 'left'}}>전화번호</div>
            <Input border='1px solid #6A6A6A' type='number' width='100%' size='xs' variant='outline' placeholder='전화번호' value={phoneNum} ps={2} mb={3}/>
            <div style={{textAlign: 'left'}}>성별</div>
            <RadioGroup onChange={setGender} value={gender} mb={2}>
                <Stack direction='row' style={{marginTop: '5px', marginLeft: '10%'}}>
                    <Radio value='1' size='sm' colorScheme={"pink"}>남성</Radio>
                    <Radio style={{marginLeft: '10px'}} value='2' size='sm' colorScheme={"pink"}>여성</Radio>
                </Stack>
            </RadioGroup>
            <div style={{textAlign: 'left'}}>주소</div>
            <Input border='1px solid #6A6A6A' width='100%' size='xs' variant='outline' value={address} ps={2} mb={3} />
            <div style={{marginLeft: '10%', textAlign: 'left'}}>나이</div>
            <div style={{marginLeft: '10%', textAlign: 'left'}} id='current-age'></div>
            <Slider
                w='100%'
                textAlign={'left'}
                id='slider'
                defaultValue={0}
                min={0}
                max={100}
                colorScheme='pink'
                value={age}
                onChange={(v) => setAge(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    label={`${age} 세`}
                >
                <SliderThumb />
                </Tooltip>
            </Slider>
            {/* <div id='current-age'></div> */}
            </form>
              </ModalBody>

              <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onModifyClose}>
                      닫기
                  </Button>
                  <Button>
                      수정하기
                  </Button>
              </ModalFooter>
          </ModalContent>
      </Modal>
      <div style={{display: 'flex', margin: '0 auto', height: '15vh'}}>
        <div style={{textAlign: 'left', width: "30%", marginLeft: "5%", lineHeight: '15vh'}}>
          <Avatar 
              src={fileUrl}
              isCentered
              size={'xl'} />
        </div>
        <div style={{display: 'block', width: "60%"}}>
          <div style={{display: "flex", justifyContent: "start", width: "100%", marginLeft: "5%", height: '40%', marginTop: '5%'}}>
            <div style={{fontSize: "19px", marginTop: '5%'}}>
              {userId}
            </div>
            <div style={{marginLeft: "4%" ,fontSize: "14px", marginTop: '7%'}}>
              Lv.{level}
            </div>
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div>Exp. </div>
            <Progress hasStripe size='lg' value={experience/1000} colorScheme={'pink'} style={{width: '70%', borderRadius: '10px', marginTop: '2.5%', marginLeft: '3%'}}/>
          </div>
          <div style={{textAlign: 'right', marginRight: '10%', fontSize: '12px'}}>{experience} / 100000 </div>
        </div>
      </div>
      <Divider style={{marginTop: '3%', marginBottom: '7%', width: '90%', marginLeft: '5%'}}></Divider>
      <div style={{marginLeft: '5%', marginRight: '5%'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>아이디</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{userId}</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>닉네임</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{nickname}</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>이름</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{name}</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '22%', textAlign: 'left'}}>성별</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{gender===1?"남자":"여자"}</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>나이</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{age} 세</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>핸드폰 번호</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{phoneNum}</div>
        </div>
        <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '20%', textAlign: 'left'}}>주소</div>
          <div style={{width: '40%', marginLeft: '15%'}}>{address}</div>
        </div>
      <Divider style={{marginTop: '3%', marginBottom: '3%', width: '100%'}}></Divider>
      </div>
      <div style={{marginTop: "3%"}}>
        <div className="del-btn" style={{marginRight: '5%'}}>회원 탈퇴</div>
        <div className="save-btn" type='button' onClick={onModifyOpen}>회원 정보 수정하기</div>
      </div>
    </div>
  );
}

export default UpsideProfile;
