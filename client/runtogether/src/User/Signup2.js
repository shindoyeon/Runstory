import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
// import axios from './axios';
import './Signup.css'
import {
    ChakraProvider,
    Button,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Address from './Address'
import { useNavigate } from "react-router-dom";
import imageCompression from 'browser-image-compression';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'https://i8a806.p.ssafy.io/api/user/signup';

// 아이디, 비밀번호, 비밀번호 확인, 이름, 성별, 나이, 닉네임, 주소, 전화 , 이미지 
const Signup2 = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [age, setAge] = useState();
    const [roleType, setRoleType] = useState();
    const [regType, setRegType] = useState();
    const [hashtags, setHashtags] = useState();
    const [profileImg, setProfileImg] = useState();
    
    return (
        <>
        <input placeholder='email'></input>
            HI
        </>
    )
}

export default Signup2;