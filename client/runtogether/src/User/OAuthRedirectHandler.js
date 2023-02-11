import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Signup from './Signup'
const OAuthRedirectHandler = () => {
    const navigate = useNavigate();
    const [userResult, setUserResult] = useState();

    useEffect(() => {
        (async () => {
            var code = new URL(window.location.href).searchParams.get("code");
            const response = await axios.get(`http://localhost:8080/api/auth/login/kakao?code=${code}`);
            setUserResult();
            if (isNaN(userResult.id)) {
                const ACCESS_TOKEN = userResult.accessToken;
                localStorage.setItem("access-token", ACCESS_TOKEN);
            }
            else {  //회원이 아닌 경우 회원가입으로 넘어감
                console.log(userResult);
                console.log("비회원");
                return(
                    <Signup userResult={userResult}></Signup>
                )
            }
        })();
        
    }, []);
};

export default OAuthRedirectHandler;
