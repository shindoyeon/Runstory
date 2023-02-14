import React, {useState, useEffect} from 'react';
import './ProfileFeed.css';
import {Image ,ChakraProvider} from '@chakra-ui/react'
import Imgfile from './이미지1.png';
import axioswithH from '../api/axios';
import {NavLink} from "react-router-dom";

const ProfileFeed = (props) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [feedResult, setFeedResult] = useState([]);
    const [arr, setArr] = useState([]);
    useEffect(() => {
        (async () => {
          // const data = null;
          if (localStorage.getItem("access-token") === null) {  //비회원 조회 시
            alert("로그인이 필요한 페이지입니다.")
          }
          else { //회원 조회 시
            const data = await axioswithH({
                url: '/feed/'+(props.userId),
                method: "GET"
            });
            // console.log("data : "+data.data.data[0].content)
            var temp = sliceFeedResult(data.data.data);
            setFeedResult(temp);
          }
    
          if (feedResult.length === 0) {
            return;
          }
        })();
      }, []);

    // feed result 3개씩 slice
    function sliceFeedResult(data) {
      const tempArr = [];
      for(let i = 0; i < data.length; i+=3) {
        tempArr.push(data.slice(i, i+3))
      }
      return tempArr;
    }

  return (
    // <ChakraProvider>
    <div className='wrapper' style={{maxHeight: '60vh', overflow: 'scroll' ,float: 'right'}}>
      <table border="1" className='imgs-table'>
      {feedResult.map((item, idx) => {
            return(
              <tr>
              {item.map((i) => {
                //피드 상세 주소로 다시 맞춰줘야됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                return(
                  <td>
                    <NavLink to={"/feed/detail/" + i.feedId}> 
                    <Image
                    boxSize='100px'
                    objectFit='cover'
                    overflow='none'
                    src={`https://i8a806.p.ssafy.io/runstory/feeds/`+i.feedFiles[0].filePath}
                    alt='x'
                    borderRadius={5}/>
                    </NavLink>
                  </td>
                )
              })}
              
              </tr>
            )
          })}
    </table>
    </div>
    // </ChakraProvider>
    )
};
export default ProfileFeed;