import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';
import Signup from './Signup'
const OAuth2RedirectHandler = () => {
  // const data=null;
  const navigate = useNavigate();
  getUser();
  async function getUser(){
    try {
      var code = new URL(window.location.href).searchParams.get("code");
      const response = await axios.get(`https://i8a806.p.ssafy.io/api/auth/login/kakao?code=${code}`);
      const data = response.data.data;
      console.log(data);
      //이미 회원인 경우
      if(isNaN(data.id)){
        const ACCESS_TOKEN = data.accessToken;
        localStorage.setItem("access-token", ACCESS_TOKEN);
        console.log("회원");
        navigate("/");
      }
      else {  //회원이 아닌 경우 회원가입으로 넘어감
        console.log("비회원");
        // <Signup userResult={data}></Signup>
      }
    } catch (error) {
      console.error(error);
    } 
  }
  // return <Signup userResult={data}></Signup>
};

export default OAuthRedirectHandler;
