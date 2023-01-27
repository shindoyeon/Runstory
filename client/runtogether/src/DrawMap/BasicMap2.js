  import React, { useEffect, useState } from 'react';
import './BasicMap.css';
import {Map, MapMarker} from 'react-kakao-maps-sdk'
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function BasicMap2() {
    const [markers, setMarkers] = useState([
        {
          position: {
          },
        },
      ])
      const [curLatitude, setCurLatitude] = useState(33.450701)
      const [curLongtitude, setCurLongtitude] = useState(126.570667)
      useEffect(()=>{
        // 현재 위치 기준으로 지도의 중심을 설정
          navigator.geolocation.getCurrentPosition(function(pos) {
          setCurLatitude(pos.coords.latitude)
          setCurLongtitude(pos.coords.longitude)
        });
      }, [markers])
      
      function init() {
        setMarkers([])
    }

      const [isVisible, setIsVisible] = useState(true)
      
      return (
        <>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: curLatitude,
              lng: curLongtitude,
            }}
            style={{width:"90%", height:"40vh", margin: "0 auto", marginTop: "60px", border: "2px dashed black"}}
            level={3} // 지도의 확대 레벨
            onClick={(_target, mouseEvent) => {
              setMarkers([
                ...markers,
                {
                  position: {
                    lat: mouseEvent.latLng.getLat(),
                    lng: mouseEvent.latLng.getLng(),
                  },
                },
              ])
            }}
          >
            {isVisible &&
              markers.map((marker, index) => (
                <MapMarker
                  key={`${marker.position}-${index}`}
                  position={marker.position} // 마커를 표시할 위치
                  draggable={true}
                />
              ))}
          </Map>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button className="visible-btn" onClick={() => setIsVisible(!isVisible)}>{isVisible? "마커 숨기기" : "마커 보이기"}</button>
            <button className="init-btn" onClick={init}>경로 초기화</button>
            {/* <button onClick={() => setIsVisible(true)}>마커 보이기</button> */}
          </div>
        </>
      )
    }
  
  export default BasicMap2;