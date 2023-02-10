import React from 'react';
import {
    Image, Card, CardBody, CardFooter, CardHeader
  } from '@chakra-ui/react';
import './UserSearchResult.css'

const UserSearchResult = ({userResult}) => {
    return (
        <div className="user-search-result">
                {userResult.map((item) => {
                    return(
                    <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>      
                    <CardHeader>
                        <Image
                            boxSize='50px'
                            objectFit='contain'
                            object-position='top'
                            src={item.img}
                            alt='no image'
                            borderRadius='50%'
                        />
                    </CardHeader>
                    <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                        {item.nickName}
                    </CardBody>
                    <CardFooter>
                        <div className='follow-btn'>
                            <p className='follow'>팔로우</p>
                        </div>
                    </CardFooter>
                </Card>)
                })}
                
           {/* <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>      
                <CardHeader>
                    <Image
                        boxSize='50px'
                        objectFit='contain'
                        object-position='top'
                        src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                        alt='no image'
                        borderRadius='50%'
                    />
                </CardHeader>
                <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                    tang_tang
                </CardBody>
                <CardFooter>
                    <div className='follow-btn'>
                        <p className='follow'>팔로우</p>
                    </div>
                </CardFooter>
            </Card>
            <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>
                <CardHeader>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                        alt='no image'
                        borderRadius={100}
                    />
                </CardHeader>
                <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                    tang_tang
                </CardBody>
                <CardFooter>
                    <div className='follow-btn'>
                        <p className='follow'>팔로우</p>
                    </div>
                </CardFooter>
            </Card>
            <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>
                <CardHeader>
                    <Image
                         boxSize='50px'
                         objectFit='cover'
                         src='https://image.ajunews.com/content/image/2022/09/08/20220908144348563350.png'
                         alt='no image'
                         borderRadius={100}
                    />
                </CardHeader>
                <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                    tang_tang
                </CardBody>
                <CardFooter>
                    <div className='follow-btn'>
                        <p className='follow'>팔로우</p>
                    </div>
                </CardFooter>
            </Card> */}
        </div>
    );
}

export default UserSearchResult;