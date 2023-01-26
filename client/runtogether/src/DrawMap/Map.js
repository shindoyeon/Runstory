import React, { useEffect, useState, useRef } from 'react';
import './Map.css'
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function Map() {
    const kakaoAPI = window.kakao.maps
    const [Map, setMap] = useState()

    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakaoAPI.LatLng(37.8095723, 126.7665777), //지도의 중심좌표.
        level: 6, //지도의 레벨(확대, 축소 정도)
    }

    const container = useRef(null) //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        setMap(new kakaoAPI.Map(container.current, options)) //지도 생성 및 객체 리턴

    }, [])


    return (
        <div className='map-container'>
            <div
                className="map"
                style={{ width: "80%", height: "40vh", margin: "0 auto", marginTop: "5vh" }}
                ref={container}
            ></div>            
        </div>
  )
}

export default Map