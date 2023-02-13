import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../common/axios';
import Signup from './Signup'
const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  getUser();
  async function getUser(){
    try {
      var code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
      const response = await axios.get(`http://localhost:8080/api/auth/login/kakao?code=${code}`);
      const ACCESS_TOKEN = response.data.data.accessToken;
      localStorage.setItem("access-token", ACCESS_TOKEN);
      navigate("/");
    } catch (error) {
      console.error(error);
    } 
  }
};

export default OAuth2RedirectHandler;
