import React from 'react';
import {Image} from '@chakra-ui/react';

const {Kakao} = window;
const loginWithKakao = () =>{
  console.log("hello");
  Kakao.Auth.authorize({
    redirectUri: 'https://developers.kakao.com/tool/demo/oauth'
  })
}

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <Image
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          style={{width : '50%' , margin: '0 auto'}}
        />  
      </a>
    </div>
  );
};

export default KakaoLogin;