import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import './ChattingPageMsg.css';
import {Card, CardHeader, Image} from '@chakra-ui/react';

const MsgByMe = ({msg}) => {
    return (
        <Card width='100%' mt='10px' display='flex' variant='filled' backgroundColor='#F0F8FF' border='2px solid #CDE5FF'>
            <CardHeader>
                <div className='my-info'>
                    <div className='chat-nickname me'>tang_tang</div>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                        alt='no image'
                        borderRadius={100}
                    />
                </div>
                <div className='chat-from-me'>{msg}</div>
            </CardHeader>
        </Card>
    );
}

export default MsgByMe;