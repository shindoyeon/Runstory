import React from 'react';
import {
  ButtonGroup,
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { Button, Collapse, useDisclosure } from '@chakra-ui/react'
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGroup, faCirclePlus, faCompass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isOpen, onToggle } = useDisclosure()
    return (
        <ChakraProvider theme={theme}>
          
            <header className='footer'>
            
                <Link to='/'><div className='home'><FontAwesomeIcon icon={faHome} /></div></Link>
                <Link to='/running-crew-list'><div className='gather'><FontAwesomeIcon icon={faUserGroup} /></div></Link>
                {/* <Link to='/create-feed'> */}
                  <div className='post' onClick={onToggle}><FontAwesomeIcon icon={faCirclePlus} />
          
                  </div>
                  
                {/* </Link> */}
                <Link to="/search"><div className='navigate'><FontAwesomeIcon icon={faCompass} /></div></Link>
                <div className='my-page'><FontAwesomeIcon icon={faUser} /></div>
                <Collapse in={isOpen} animateOpacity className='collapse'>
                  <ButtonGroup className='btn-group'>
                      <Link to='/create-running-crew'>
                        <Button size='sm' className='running-crew-write' bg='#F4EBEB'>
                          러닝 크루 모집글 작성하기
                        </Button>
                      </Link>
                      <Link to='/create-feed'>
                        <Button size='sm' className='feed-write' bg='#F4EBEB'>
                          피드 작성하기
                        </Button>
                      </Link>
                      <Link to='/draw-map'>
                        <Button size='sm' className='map-draw' bg='#F4EBEB'>
                          지도 그리기
                        </Button>
                      </Link>
                    </ButtonGroup>
                </Collapse>
            </header>
        </ChakraProvider>
      );
}

export default Footer;