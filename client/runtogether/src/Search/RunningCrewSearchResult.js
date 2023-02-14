import React, { useEffect, useState } from 'react';
import './FeedSearchResult.css';
import {
    Image,
    useDisclosure,
    Card,
    CardHeader,
    CardBody
  } from '@chakra-ui/react';
import axioswithH from '../api/axios';


const RunningCrewSearchResult = ({keyword}) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [runningCrewResult, setRunningCrewResult] = useState([]);

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
                    type: 2, keyword: keyword, lastId: 1000
                },
                header: {
                    Authorization: localStorage.getItem('access-token')
                }
            });
            setRunningCrewResult(data.data.data);
          }
    
          if (runningCrewResult.length === 0) {
            return;
          }
        })();
      }, [keyword]);
    // function createTable(feedResult) {
    //     var table_value = new Array();
    //     var html = '<table>';
    //     for(var result in feedResult) {
    //         table_value.push(result);
    //     }
    //     for(var idx in table_value) {
    //         if(idx%3===0) {
    //             html += '<tr>';
    //             html += '<td>'+idx.filePath+'</td>';
    //         }
    //         if(idx%3===1) {
    //             html += '<td>'+idx.filePath+'</td>';
    //         }
    //         if(idx%3===2) {
    //             html += '<td>'+idx.filePath+'</td>';
    //             html += '</tr>'
    //         }
    //     }
    //     html += '</table>'
    //     var container = document.getElementById('feed-search-result');
    //     container.append(html);
    // }

    // useEffect(() => {
    //     createTable(feedResult);
    // }, [])


    return (
        <div className="user-search-result">
                {runningCrewResult.map((item) => {
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
        // <div className="feed-search-result">
        //     <table border="1" className='imgs-table'>
        //         <tr>
        //             <td>
        //                 <Image
        //                     boxSize='120px'
        //                     objectFit='cover'
        //                     src='https://bit.ly/dan-abramov'
        //                     alt='Dan Abramov'
        //                     borderRadius={5}
        //             /></td>
        //             <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //         <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //         </tr>
        //         <tr>
        //             <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //             <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //         <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //         </tr>
        //         <tr>
        //             <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //             <td><Image
        //             boxSize='120px'
        //             objectFit='cover'
        //             src='https://bit.ly/dan-abramov'
        //             alt='Dan Abramov'
        //             borderRadius={5}
        //         /></td>
        //         </tr>
        //     </table>
        // </div>
    );
}

export default RunningCrewSearchResult;