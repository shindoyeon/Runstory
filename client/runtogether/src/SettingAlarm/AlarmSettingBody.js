import React from 'react';
import './AlarmSettingBody.css';
import {
  theme,
  Card,
  Box,
  Switch,
  Divider,
} from '@chakra-ui/react';

const Alarm = () => {
  return(
    <>
    <Box className='alarm-all'>
    전체 알림
    <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='space-between' alignItems='center'>
      설정
      <Switch size='md'/>
    </Card>
    </Box>
    <Divider w='70%' ml='25%'/>    
    <Box className='alarm-content'>
      세부설정
      <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='space-between' alignItems='center'>
        팔로우
        <Switch size='md'/>
      </Card>
      <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='space-between' alignItems='center'>
        좋아요
        <Switch size='md'/>
      </Card >   
      <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='space-between' alignItems='center'>
        댓글
        <Switch size='md'/>
      </Card> 
      <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='space-between' alignItems='center'>
        친구의 새 피드
        <Switch size='md'/>
      </Card>
    </Box>
    </>
  );
}

export default Alarm;