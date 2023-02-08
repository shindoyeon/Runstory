import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import './ChattingPageMsg.css';
import {Card, CardHeader, Image} from '@chakra-ui/react';

const MsgByOther = ({msg}) => {
    return (
        <Card  width='100%' mt='10px' display='flex' variant='filled' backgroundColor="#FFF0F5" border="2px solid #FFE4E1">
            <CardHeader>
                <div className='other-info'>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                        alt='no image'
                        borderRadius={100}
                    />
                    <div className='chat-nickname other'>songheew</div>
                </div>
                <div className='chat-from-other'>{msg}</div>
            </CardHeader>
        </Card>
    );
}

export default MsgByOther;