import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import _ from "lodash";
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function BasicMap() {
  const Tmapv2 = window.Tmapv2;

  // const [curLatitude, setCurLatitude] = useState(33.450701)
  // const [curLongtitude, setCurLongtitude] = useState(126.570667)

  // const [position, setPosition] = useState()


  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
      zoom: 15
    };
    var tmap = new Tmapv2.Map(container, options);
  //   var polyline = new Tmapv2.Polyline({
  //    path: [],
  //    strokeColor: "#dd00dd",	// 라인 색상
  //    strokeWeight: 6,	// 라인 두께
  //    map: tmap	// 지도 객체
  //  });
  }, []);
  

  return (
    <div>
      {/* <div
      id="TMapApp"
      style={{
        height: "40vh",
        width: "90%",
        margin: "0 auto",
        marginTop: "60px",
      }}
    /> */}
          {/* {position} */}
        	<div id="map" style={{width:"95%", height:"40vh", margin: "0 auto", marginTop: "60px", border: "2px solid black" }}></div> 
          {/* <button onClick={panTo}>현재 위치</button> */}
        </div>
  );
}

export default BasicMap;