import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import RunningCrewList from './RunningCrewList/RunningCrewList';
import CreateFeed from './CreateFeed/CreateFeed';
import RecruitCrew from './RecruitCrew/RecruitCrew';
import Search from './Search/Search';
import Profile from './Feed/Feed';
import FollowPage from './FollowList/FollowList';
import SettingIntro from './SettingIntro/SettingIntro';
import AlarmSetting from './SettingAlarm/AlarmSetting';
import UserBlockList from './SettingBlock/SettingBlock';
import MyPage from './SettingMyPage/SettingMyPage';
import Login from './User/Login';
import Register from './User/Signup';
import FindPwd from './User/FindPassword';
import RegisterHashtag from './User/SignupHashtag'
import Notice from './Notice/Notice';
import DrawMap from './DrawMap/DrawMap';
import Chatting from './Chatting/Chatting'
// import Feed from './Feed/Feed';

import "./App.css";

function App() {
    return (
        <ChakraProvider theme={theme} className='body'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/user/login' element={<Login />} />
                    <Route path='/user/signup' element={<Register />} />
                    <Route path='/user/signup/hashtag' element={<RegisterHashtag />} />
                    <Route path='/user/findpassword' element={<FindPwd />} />
                    <Route path='/create-feed' element={<CreateFeed />} />
                    <Route path='/running-crew-list' element={<RunningCrewList />} />
                    <Route path='/create-running-crew' element={<RecruitCrew />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/feed' element={<Profile />} />
                    <Route path='/feed/follow' element={<FollowPage />} />
                    <Route path='/setting-intro' element={<SettingIntro />} />
                    <Route path='/setting-alarm' element={<AlarmSetting />} />
                    <Route path='/setting-block' element={<UserBlockList />} />
                    <Route path='/user' element={<MyPage />} />
                    <Route path='/notice' element={<Notice />} />
                    <Route path='/draw-map' element={<DrawMap />} />
                    {/* <Route path='/feed' element={<Feed />} /> */}
                    <Route path='/chatting' element={<Chatting />} />
                </Routes>
            </BrowserRouter>
            {/* <MainPage></MainPage> */}
            {/* <RunningCrewList></RunningCrewList> */}
            {/* <CreateFeed></CreateFeed> */}
            {/* <RecruitCrew></RecruitCrew> */}
        </ChakraProvider>
    );
}

export default App;
