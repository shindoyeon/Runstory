import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import html2canvas from 'html2canvas';
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input
} from '@chakra-ui/react'

function SearchLocation({tmap}) {
  const Tmapv2 = window.Tmapv2;
  const [keyword, setKeyword] = useState("");

    const handleKeywordChange = ({ target: { value } }) => setKeyword(value);
    const [result, setResult] = useState([]);

    function panLoc(e) {
      e.preventDefault();
      var latLng = e.target.id.split(" ");
      var lat = latLng[0];
      var lng = latLng[1];
      var temp = new Tmapv2.LatLng(lat, lng);
      tmap.panTo(temp);
    }

    async function searchLoc(e) {
      e.preventDefault();
      var result = await axios.get("https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result", {
        headers: {
          appkey: "l7xxe210feb29ba24deda6a06b0d0e88366a"
        },
        params: {
          "searchKeyword" : keyword, // 검색 키워드
          "resCoordType" : "WGS84GEO", // 요청 좌표계
          "reqCoordType" : "WGS84GEO", // 응답 좌표계
          "count" : 100 // 가져올 갯수
        }
    })
    setResult(result.data.searchPoiInfo.pois.poi)
}



return (
    <>
    <form onSubmit={searchLoc}>
        <div width="100%" style={{margin: '0 auto', textAlign: 'center', marginBottom: '10px'}}>
              <Input width='50%' marginLeft='3%' marginRight='3%' size='xs' marginTop='30px' value={keyword} name='keyword' onChange={handleKeywordChange} placeholder="검색어를 입력해주세요"/>
              <button type='submit' className="search-btn">🔍</button>
            </div>
          </form>
            <Table size='sm' textAlign={'center'} variant={'striped'} isCentered>
                <Thead>
                  <Tr>
                    <Th textAlign={'center'}>No.</Th>
                    <Th textAlign={'center'}>장소명</Th>
                    <Th textAlign={'center'}>주소</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {result.map((item, idx) => {
                    var id = item.frontLat + " " + item.frontLon
                    return(
                      <Tr id={id} onClick={panLoc}>
                              <Td id={id} textAlign={'center'}>{idx+1}</Td>
                              <Td id={id} textAlign={'center'}>{item.name}</Td>
                              <Td id={id} textAlign={'center'}>{item.upperAddrName} {item.middleAddrName} {item.lowerAddrName} {item.roadName}</Td>
                          </Tr>
                      )
                    })}
                </Tbody>
            </Table>
        </>
    );
  }

export default SearchLocation;
