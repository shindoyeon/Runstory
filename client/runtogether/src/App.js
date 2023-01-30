import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage'
import RunningCrewList from './RunningCrewList/RunningCrewList'
import CreateFeed from './CreateFeed/CreateFeed';
import RecruitCrew from './RecruitCrew/RecruitCrew';
import Search from './Search/Search';
import Notice from './Notice/Notice';
import DrawMap from './DrawMap/DrawMap';
import Feed from './Feed/Feed';

import "./App.css";

function App() {
    return (
        <ChakraProvider theme={theme} className='body'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/create-feed' element={<CreateFeed />} />
                    <Route path='/running-crew-list' element={<RunningCrewList />} />
                    <Route path='/create-running-crew' element={<RecruitCrew />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/notice' element={<Notice />} />
                    <Route path='/draw-map' element={<DrawMap />} />
                    <Route path='/feed' element={<Feed />} />
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
