import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SplashPage.css';
import IamgeFile from './검흰흰누끼.png'
import {
  ChakraProvider, 
  Image }
  from '@chakra-ui/react';


const Landing = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setVisible(true);
  }, []);

  const timeout = () => {
    setTimeout(() => {
      navigate("/");

    }, 4000);
  };

  useEffect(() => {
    timeout();
    return () => {
      // clear 해줌
      clearTimeout(timeout);
    };
  });

  return (
    <ChakraProvider>
      <Image
        // className={visible ? IamgeFile["logo-main"] : IamgeFile["logo-main-hide"]}
        src={IamgeFile}
        justifyContent='center'
        mt='30%'
        ml='11%'
        width={300} height={450}
      />
    </ChakraProvider>
  ); 
}

export default Landing;



{/* <img
className={visible ? styles["logo-main"] : styles["logo-main-hide"]}
src={MainLogo}
/> */}