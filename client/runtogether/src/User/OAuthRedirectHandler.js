import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import axios from './api/axios';
const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [userResult, setUserResult] = useState([]);
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
 axios({
      method: "GET",
      url: `http://localhost:8080/api/auth/login/kakao?code=${code}`,
    })
    .then((res)=> {
      const data = res.data.data;
      console.log(isNaN(data.id));
      //이미 회원인 경우
      if(isNaN(data.id)){
        const ACCESS_TOKEN = data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN);
        setUserResult(data);
      }
      else {  //회원이 아닌 경우 회원가입으로 넘어감
          // navigate('/user/signup');
          setUserResult(data);
      }
    })
  return
};

export default OAuth2RedirectHandler;