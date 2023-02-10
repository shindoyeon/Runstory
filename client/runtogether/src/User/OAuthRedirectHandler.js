import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import axios from './api/axios';
import Signup from './Signup'
const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  // const [userResult, setuserResult] = useState('');
  getUser();
  async function getUser(){
    try {
      var code = new URL(window.location.href).searchParams.get("code");
      const response = await axios.get(`http://localhost:8080/api/auth/login/kakao?code=${code}`);
      const data = response.data.data
      console.log(data);
      //이미 회원인 경우
      if(isNaN(data.id)){
        const ACCESS_TOKEN = data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN);
        // setuserResult(data);
        console.log("회원");
        navigate("/");
      }
      else {  //회원이 아닌 경우 회원가입으로 넘어감
        // setuserResult(data);
        var userResult = data;
        console.log("비회원");
        return <Signup userResult={userResult}></Signup>
      }
    } catch (error) {
      console.error(error);
    } 
  }
    // if(userResult.id===null){
    //   navigate("/");
    // }
    // else{
    //   return <Signup userResult={userResult}></Signup>
    // }
};

export default OAuth2RedirectHandler;