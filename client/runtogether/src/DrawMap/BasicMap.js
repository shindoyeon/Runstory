import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import {Map, DrawingManager, drawingMode, Circle, selectOverlay} from 'react-kakao-maps-sdk'
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function BasicMap() {
    const kakao = window.kakao;
    // const [kakaoMap, setKakaoMap] = useState()
    const [curLatitude, setCurLatitude] = useState(33.450701)
    const [curLongtitude, setCurLongtitude] = useState(126.570667)
    const [position, setPosition] = useState()
    var container = document.getElementById('map');
    const managerRef = useRef(null);

    // function selectOverlay(type) {
    //   const manager = managerRef.current
    //   manager.cancel()
    //   manager.select(type)
    // }
    
  //   // const infowindow = new kakao.maps.InfoWindow({zIndex:1});
  //   console.log("HI")
    useEffect(()=>{
      var container = document.getElementById('map');
      // 현재 위치 기준으로 지도의 중심을 설정
        navigator.geolocation.getCurrentPosition(function(pos) {
        setCurLatitude(pos.coords.latitude)
        setCurLongtitude(pos.coords.longitude)
        var options = {
          center: new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          level: 2
        };
        var kakaoMap = new kakao.maps.Map(container, options);
        kakaoMap.relayout();
        setPosition(kakaoMap)
      });
      
    }, [])
    
    

  //   kakao.maps.event.addListener(container, 'click', function(mouseEvent) {        
  //     // 마커가 표시될 위치입니다 
  //     const latlng = mouseEvent.latLng;
  //     var markerPosition  = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()); 
  //     console.log(markerPosition)
  //     // 마커를 생성합니다
  //     var marker = new kakao.maps.Marker({
  //         position: markerPosition
  //     });
  //     marker.setMap(kakaoMap);
  // });
    

    function panTo() {
      // 이동할 위도 경도 위치를 생성합니다 
      
      // let initPosition = new kakao.maps.LatLng(curLatitude, curLongtitude);
      // console.log(curLatitude, curLongtitude)
      // console.log(initPosition)
      // // 지도 중심을 부드럽게 이동시킵니다
      // // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      // kakaoMap.setCenter(initPosition);            
  }  

  


       
      return (
        <div>
          {position}
        	<div id="map" style={{width:"86%", height:"40vh", margin: "0 auto", marginTop: "60px", border: "3px solid black"}}></div> 
          <button onClick={panTo}>현재 위치</button>
        </div>
     
    )
  }
  
  export default BasicMap;