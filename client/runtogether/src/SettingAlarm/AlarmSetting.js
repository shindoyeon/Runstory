import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AlarmSettingMsg from './AlarmSettingMsg';
import Alarm from './AlarmSettingBody';
import {
  ChakraProvider,
} from '@chakra-ui/react';

const AlarmSetting = () => {
  return (
    <ChakraProvider>
      <Header></Header>
      <div className='alarm-intro-title'>
          알림설정
      </div>
      <Alarm></Alarm>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default AlarmSetting;
