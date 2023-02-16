import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const theme = {
    background: '#ffffff',
    headerBgColor: '#CBD9E7',
    headerFontColor: '#6a6a6a',
    headerFontSize: '15px',
    botBubbleColor: '#CBD9E7',
    botFontColor: '#6a6a6a',
    userBubbleColor: '#EEB6B6',
    userFontColor: '#6a6a6a',
  };
const ChattingBot = () => {
    return (
        <ThemeProvider theme={theme}>
        <ChatBot 
            botAvatar="https://t.pimg.jp/058/210/521/5/58210521.jpg" 
            botDelay="1300" 
            userAvatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            placeholder=""
            hideSubmitButton="true"
            headerTitle="RUNSTORY 챗봇 🏃‍♂️🏃‍♀️"
            steps={[
                {
                id: '1',
                message: 'RUNSTORY에 오신 것을 환영합니다! 무엇을 도와드릴까요?',
                trigger: 'help',
                },
                {
                id: 'help',
                options: [
                    {value: 'running-crew', label: '러닝 크루가 뭐야?', trigger: 'about-running-crew'},
                    {value: 'feed', label: '피드가 뭐야?', trigger: 'about-feed'},
                ]
                },
                {
                    id: 'about-running-crew',
                    message: '러닝 크루는 같이 산책하는 사람들을 말해요!',
                    trigger: 'about-running-crew2'
                },
                {
                    id: 'about-running-crew2',
                    message: 'RUNSTORY에서는 러닝 크루 모집글 작성을 통해 러닝 크루를 나이, 성별 별로 꾸릴 수 있어요!',
                    trigger: 'about-running-crew3'
                },
                {
                    id: 'about-running-crew3',
                    message: '참여하고 싶은 크루가 있다면 예약 버튼을 눌러 같이 뛰어보세요!',
                    trigger: 'anything-else'
                },
                {
                    id: 'about-feed',
                    message: '피드는 러닝 크루 모집글과는 조금 다른 개념이에요!',
                    trigger: 'about-feed2'
                },
                {
                    id: 'about-feed2',
                    message: '러닝 크루를 모집하는 목적이 아닌 모든 글은 피드로 작성할 수 있어요!',
                    trigger: 'about-feed3'
                },
                {
                    id: 'about-feed3',
                    message: '피드에서는 좋아요나 댓글을 남겨 사람들과 소통할 수 있어요!',
                    trigger: 'about-feed4'
                },
                {
                    id: 'about-feed4',
                    message: "여러 사람들과 소통하며 운동 취미 생활을 공유해보세요!",
                    trigger: 'anything-else'
                },
                {
                    id: 'anything-else',
                    message: '이외에 또 궁금한 것이 있으신가요?',
                    trigger: 'yes-or-no'
                },
                {
                    id: 'yes-or-no',
                    options: [
                        {value: 'yes', label: '있어!', trigger: 'help'},
                        {value: 'no', label: '없어!', end: true},
                    ]
                }
            ]}
        />
        </ThemeProvider>
    );
}

export default ChattingBot;
