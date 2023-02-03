import react from 'react';
import axios from 'axios';
import { 
  ChakraProvider,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';  
import Followers from './FollowerList';
import Followings from './FollowingList';
import './FollowListPage.css';
  
const Follow= () => {
  return (
    <ChakraProvider>
      <Header></Header>
        <div className='follow-card'>
        <Tabs variant='enclosed'>
        <TabList>
          <Tab>팔로워</Tab>
          <Tab>팔로잉</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p><Followers/></p>
          </TabPanel>
          <TabPanel>
            <p><Followings/></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
        </div>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default Follow;

