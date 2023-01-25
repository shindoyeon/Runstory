import React from 'react';
import {
    Image, Card, CardBody, CardFooter, CardHeader
  } from '@chakra-ui/react';
import './UserSearchResult.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const UserSearchResult = () => {
    return (
        <div className="user-search-result">
           <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>
                <CardHeader>
                    <Image
                                        boxSize='50px'
                                        objectFit='cover'
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
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
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
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
                                        src='https://w.namu.la/s/40cc83425a4a01e5438c620e76e401e3a633852d65e19254fc99a840c013674ec1565de5b0426fc4c83402b4ef9e3a3dcf963ee0d69684de9305c7c9504d10ffcdc88bfe22624226d9a85b2976abed1f19b59aadee927a4c369d41825ebcf2ad'
                                        alt='Dan Abramov'
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
        </div>
    );
}

export default UserSearchResult;