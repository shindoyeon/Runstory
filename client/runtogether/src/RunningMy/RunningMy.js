import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {HStack, Box, Button, Spacer, Heading, Stack, StackDivider, Text, Image, Divider, ButtonGroup} from '@chakra-ui/react';
import axios from '../api/axios'
import RunningCard from './RunningCard';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function RunningDetail(){
    const [mycrews, setMycrews] = useState([]);
    const [joincrews, setJoincrews] = useState([]);
    const [dibscrews, setDibscrews] = useState([]);
    const [pastcrews, setPastcrews] = useState([]);
    useEffect(() => {
        (async () => {
            const url = "running/mycrew/reservation";
            const data = await axios.get(url)
                .then(function(response) {
                    setMycrews(response.data.data[0].mycrew)
                    setJoincrews(response.data.data[1].joincrew)
                    setDibscrews(response.data.data[2].dibscrew)
                    setPastcrews(response.data.data[3].pastcrew)
                    console.log(response.data.data)
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패")
                })
        })();
    }, []);
    // var profileurl = "https://i8a806.p.ssafy.io/runstory/user/" + feeds.profileImgFileName;
    // var feedurl = "https://i8a806.p.ssafy.io/runstory/feeds/" + feedfiles.filePath;
    // var commenturl = "https://i8a806.p.ssafy.io/runstory/user/" + user.profileImgFileName;

    // function GotoComment() {
    //     const url = `running/${feedId}/comment`;
    //     axios.get(url)
    //         .then(function(response) {
    //             console.log("성공");
    //         })
    //         .catch(function(error) {
    //             console.log("실패");
    //         })
    // }
    
    return (
        <div style={{marginBottom: "15%"}}>
        <Header></Header>
        <div style={{marginTop: "20%"}}>
            <p style={{textDecoration:"underline"}}>내가 만든 크루</p>
            <div>
            {
                mycrews.map(function(mycrew){
                    return RunningCard(mycrew)
                })
            }
            </div>
            <div>
            <p style={{textDecoration:"underline"}}>내가 가입한 크루</p>
            {
                joincrews.map(function(joincrew) {
                    return RunningCard(joincrew)
                })
            }
            </div>
            <div>
            <p style={{textDecoration:"underline"}}>내가 찜한 크루</p>
            {
                dibscrews.map(function(dibcrew) {
                    return RunningCard(dibcrew)
                })
            }
            </div>
            <div>
            <p style={{textDecoration:"underline"}}>내가 뛴 크루</p>
            {
                pastcrews.map(function(pastcrew) {
                    return RunningCard(pastcrew)
                })
            }
            </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
