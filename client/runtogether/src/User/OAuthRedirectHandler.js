import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import axios from './api/axios';
import MainPage from '../MainPage/MainPage'
const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [userResult, setUserResult] = useState([]);
  // 인가코드
  var code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
 axios({
      method: "GET",
      url: `https://i8a806.p.ssafy.io/api/auth/login/kakao?code=${code}`,
    })
    .then((res)=> {
      const data = res.data.data;
      console.log(isNaN(data.id));
      //이미 회원인 경우
      if(isNaN(data.id)){
        const ACCESS_TOKEN = data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN);
        setUserResult(data);
        navigate("/");
      }
      else {  //회원이 아닌 경우 회원가입으로 넘어감
        setUserResult(data);
        navigate('/user/signup');
      }
    })
};

export default OAuth2RedirectHandler;