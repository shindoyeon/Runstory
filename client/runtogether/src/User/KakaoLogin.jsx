import React from 'react';
import {Image} from '@chakra-ui/react';

const {Kakao} = window;
// const loginWithKakao = () =>{
//   console.log("hello");
//   Kakao.Auth.authorize({
//     redirectUri: 'https://developers.kakao.com/tool/demo/oauth'
//   })
// }
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=0cff5728182aa5eebe52ef3c23e4c210&redirect_uri=http://localhost:8080/auth/login/kakao`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={kakaoLogin}>
        <Image
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          style={{width : '50%' , margin: '0 auto'}}
        />  
      </a>
    </div>
  );
};

export default KakaoLogin;