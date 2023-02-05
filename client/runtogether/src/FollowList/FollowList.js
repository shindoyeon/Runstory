import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';  
import Followers from './FollowerList';
import Followings from './FollowingList';
import FollowListPageMsg from './FollowListPageMsg';
import { 
  ChakraProvider,
  Tabs,
   TabList,
   TabPanels, 
   Tab, 
   TabPanel } from '@chakra-ui/react'
  
const FollowPage= () => {
  return (
    <ChakraProvider>
      <Header></Header>
      <FollowListPageMsg></FollowListPageMsg>
      <Tabs variant='enclosed'>
      <TabList>
        <Tab>팔로워</Tab>
        <Tab>팔로잉</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Followers/>
        </TabPanel>
        <TabPanel>
          <Followings/>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default FollowPage;

