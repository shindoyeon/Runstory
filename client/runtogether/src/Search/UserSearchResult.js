import React, {useState, useEffect} from 'react';
import {
    Image, Card, CardBody, CardHeader, Spinner
  } from '@chakra-ui/react';
import './UserSearchResult.css';
import axioswithH from '../api/axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from 'react-infinite-scroll-component';

const UserSearchResult = ({keyword}) => {
    // console.log(userResult)
    const [userResult, setUserResult] = useState([]);
    
    useEffect(() => {
        (async () => {
          // const data = null;
          if (localStorage.getItem("access-token") === null) {  //비회원 조회 시
            alert("로그인이 필요한 페이지입니다.")
          }
          else { //회원 조회 시
            const data = await axioswithH({
                url: '/search',
                method: "POST",
                data: {
                    type: 0, keyword: keyword, lastId: 1000
                },
                header: {
                    Authorization: localStorage.getItem('access-token')
                }
            });
            setUserResult(data.data.data);
          }
          var noResultMsg = document.getElementById('no-result')
          console.log(userResult.length)
          if(userResult.length===0) {
            noResultMsg.style.display = 'block';
          }
          else {
            noResultMsg.style.display = 'none';
          }
        })();
      }, [keyword]);

    // async function getUserSearchResult(keyword) {
    //     const data = await axioswithH({
    //         url: '/search',
    //         method: "POST",
    //         data: {
    //             type: 0, keyword: keyword, lastId: 1000
    //         },
    //         header: {
    //             Authorization: localStorage.getItem('access-token')
    //         }
    //     });
    //     return data.data.data;
    // }

    return (
        <div className="user-search-result">
                <p id='no-result' style={{display: 'none'}}>검색 결과가 없습니다.</p>
                {userResult.map((item) => {
                    return(
                        <Card direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex' justifyContent='center' alignItems='center'>      
                        <CardHeader>
                            {console.log(item)}
                            {item.profileImgFileName===null?
                            <Image
                            boxSize='50px'
                            objectFit='cover'
                            object-position='top'
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt='no image'
                            borderRadius='50%'
                            />
                            :
                            <Image
                                boxSize='50px'
                                objectFit='cover'
                                object-position='top'
                                src={`https://i8a806.p.ssafy.io/runstory/user/`+item.profileImgFileName}
                                alt='no image'
                                borderRadius='50%'
                            />}
                            
                            
                        </CardHeader>
                        <CardBody display='flex' textAlign={'left'} fontWeight={'bold'}>
                            {item.userNickname}
                        </CardBody>
                    </Card>)
            })}
        </div>
    );
}

export default UserSearchResult;