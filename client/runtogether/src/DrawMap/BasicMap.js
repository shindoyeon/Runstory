import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import html2canvas from 'html2canvas';
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
  var tmap = useState();
  var linePath = [];
  var container = useState();
  var options = useState();
  var polyline = useState();
  var touchedX;
  var touchedY;
  useEffect(() => {
    container = document.getElementById('map');
    options = {
      center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
      zoom: 19
    };
    tmap = new Tmapv2.Map(container, options);

    tmap.addListener("touchstart", onTouchstart); // 모바일에서 지도 터치 시작시, 이벤트 리스너 등록.
    tmap.addListener("touchend", onTouchend); // 모바일에서 지도 터치 터치가 끝났을때, 이벤트 리스너 등록.

    // new Tmapv2.extension.MeasureDistance({
		// 	map: tmap
    // });
  }, []);

    // function clearDrawing() {
    //   linePath.length=0;
    //   addPolyline();
    //   polyline.setMap();
    //   // tmap = new Tmapv2.Map(container, options);
    // }

    function addPolyline() {
      polyline = new Tmapv2.Polyline({
        path: linePath,
        strokeColor: "#EEB6B6",
        strokeWeight: 6,
        outlineColor: "#ee0000",
        direction: true,
        directionColor: "#ee0000",
        map: tmap // 지도 객체
      });
    }

    function onTouchstart(e) {
      // linePath.push(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))
      // addPolyline();
      touchedX = e.latLng['_lat']
      touchedY = e.latLng['_lng']
    }

    function onTouchend(e) {
      // const distanceX = touchedX - e.changedTouches[0].pageX;
      // const distanceY = touchedY - e.changedTouches[0].pageY;
      // const vector = Math.abs(distanceX / distanceY);
      // if (distanceX > 30 && vector > 2) {
        console.log(e.targetTouches)
        linePath.push(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))
        addPolyline();
      // }
    }

    // 캡쳐 부분
    function onCapture() {
      html2canvas(document.getElementById("map"), 
        {allowTaint: true,
        useCORS: true,}
      ).then(canvas => {
      onSaveAs(canvas.toDataURL('image/png'), 'image-download.png')
      });
    }

    function onSaveAs(uri, fileName) {
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.href = uri;
      link.download = fileName;
      link.click();
      document.body.removeChild(link);
    }

  return (
    <div id='canvas'>
      <div id="map" style={{width:"95%", height:"40vh", margin: "0 auto", marginTop: "0px", border: "2px solid black" }}></div> 
      <div onClick={onCapture}>HERE</div>
      {/* <button onClick={clearDrawing}>라인 삭제하기</button> */}
      {/* <button onClick={drawPolyline} onTouchStart={drawPolyline}>라인 그리기</button> */}
      {/* <button onClick={clearDrawing} onTouchStart={clearDrawing}>라인 삭제하기</button> */}
    </div>
  );
}

export default BasicMap;