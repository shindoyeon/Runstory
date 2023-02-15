import React, {useEffect, useState} from 'react';
import {
  ButtonGroup,
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { Button, Collapse, useDisclosure } from '@chakra-ui/react'
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGroup, faCirclePlus, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [isLogined, setIsLogined] = useState(false);
  const [userId, setUserId] = useState();
  function refreshToHome() {
    window.location.replace("/")
  }

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("access-token") === null) { // 비회원 -> 로그인
        setIsLogined(false);
      }
      else { // 회원
        setIsLogined(true)
        const data = await axios.get(
          "https://i8a806.p.ssafy.io/api/user",{
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("access-token")}`
              }
          }
        )
        setUserId(data.data.data.userSeq);
      }
    })();
  }, []);

    return (
        <ChakraProvider theme={theme}>  
            <header className='footer'>
                <div className='home'><FontAwesomeIcon icon={faHome} onClick={refreshToHome} /></div>
                <NavLink to='/running-crew-list'><div className='gather'><FontAwesomeIcon icon={faUserGroup} /></div></NavLink>
                {/* <Link to='/create-feed'> */}
                  <div className='post' onClick={onToggle}><FontAwesomeIcon icon={faCirclePlus} />
          
                  </div>
                  
                {/* </Link> */}
                <NavLink to="/search"><div className='navigate'><FontAwesomeIcon icon={faMagnifyingGlass} /></div></NavLink>
                <Collapse in={isOpen} animateOpacity className='collapse'>
                  <ButtonGroup className='btn-group'>
                      <NavLink to='/create-running-crew'>
                        <Button size='sm' className='running-crew-write' bg='#F4EBEB'>
                          러닝 크루 모집글 작성하기
                        </Button>
                      </NavLink>
                      <NavLink to='/create-feed'>
                        <Button size='sm' className='feed-write' bg='#F4EBEB'>
                          피드 작성하기
                        </Button>
                      </NavLink>
                      <NavLink to='/draw-map'>
                        <Button size='sm' className='map-draw' bg='#F4EBEB'>
                          지도 그리기
                        </Button>
                      </NavLink>
                    </ButtonGroup>
                </Collapse>
                {isLogined?
                <NavLink to={`/feed/${userId}`}> 
                  <div className='my-page'>
                  <FontAwesomeIcon icon={faUser} /></div>
                </NavLink>
                :
                <NavLink to='/user/login'> 
                  <div className='my-page'><FontAwesomeIcon icon={faUser} /></div>
                </NavLink>
                }
            </header>
        </ChakraProvider>
      );
}

export default Footer;