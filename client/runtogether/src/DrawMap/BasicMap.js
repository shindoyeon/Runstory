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
  // var [touchedX, setTouchedX] = useState();
  // var [touchedY, setTouchedY] = useState();
  useEffect(() => {
    container = document.getElementById('map');
    options = {
      center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
      zoom: 17
    };
    tmap = new Tmapv2.Map(container, options);

    tmap.addListener("touchstart", onTouchstart); // 모바일에서 지도 터치 시작시, 이벤트 리스너 등록.
    tmap.addListener("touchend", onTouchend); // 모바일에서 지도 터치 터치가 끝났을때, 이벤트 리스너 등록.

    // new Tmapv2.extension.MeasureDistance({
		// 	map: tmap
    // });
  }, []);

    function clearDrawing() {
      window.location.replace("/draw-map")
    }

    function addPolyline() {
      polyline = new Tmapv2.Polyline({
        path: linePath,
        strokeColor: "#EEB6B6",
        strokeWeight: 6,
        outlineColor: "#ee0000",
        direction: true,
        directionColor: "#ee0000",
        // map: tmap // 지도 객체
      });
      polyline.setMap(tmap);
    }

    function onTouchstart(e) {
      touchedX = tmap.realToScreen(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))['x'];
      touchedY = tmap.realToScreen(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))['y'];
    }

    function onTouchend(e) {
        var x = tmap.realToScreen(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))['x'];
        var y = tmap.realToScreen(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))['y'];
        console.log(touchedX, x)
        console.log(touchedY, y)
        // 드래그는 터치로 인식하지 않기 위한 if문
        if(Math.abs(touchedX - x) < 0.00000000005 && Math.abs(touchedY - y) < 0.00000000005) {
          linePath.push(new Tmapv2.LatLng(e.latLng['_lat'], e.latLng['_lng']))
          addPolyline();
        }
    }

    // 캡쳐 부분
    function onCapture() {
      html2canvas(document.getElementById("map"), 
        {allowTaint: true,
        useCORS: true,}
      ).then(canvas => {
      onSaveAs(canvas.toDataURL('image/png'), '경로 이미지.png')
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
      <div className="save-btn" onClick={onCapture}>이미지로 저장하기</div>
      <div className="del-btn" onClick={clearDrawing}>다시 그리기</div>
      {/* <button onClick={clearDrawing}>라인 삭제하기</button> */}
      {/* <button onClick={drawPolyline} onTouchStart={drawPolyline}>라인 그리기</button> */}
      {/* <button onClick={clearDrawing} onTouchStart={clearDrawing}>라인 삭제하기</button> */}
    </div>
  );
}

export default BasicMap;