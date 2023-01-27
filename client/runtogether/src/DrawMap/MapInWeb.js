import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import {Map, DrawingManager} from 'react-kakao-maps-sdk'
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function MapInWeb() {
    const kakao = window.kakao;
    const[curLatitude, setCurLatitude] = useState(33.450701)
    const[curLongtitude, setCurLongtitude] = useState(126.570667)
    const managerRef = useRef(null);

    function selectOverlay(type) {
      const manager = managerRef.current
      manager.cancel()
      manager.select(type)
    }
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(pos) {
        setCurLatitude(pos.coords.latitude)
        setCurLongtitude(pos.coords.longitude)
      });
      
    }, [])
    

    return (
        <>
          <Map
            center={{
              // 지도의 중심좌표
              lat: curLatitude,
              lng: curLongtitude,
            }}
            style={{width:"86%", height:"40vh", margin: "0 auto", marginTop: "60px", border: "3px solid black"}}
            level={3} // 지도의 확대 레벨
          >
            <DrawingManager
              ref={managerRef}
              drawingMode={[
                kakao.maps.drawing.OverlayType.ARROW,
                kakao.maps.drawing.OverlayType.CIRCLE,
                kakao.maps.drawing.OverlayType.ELLIPSE,
                kakao.maps.drawing.OverlayType.MARKER,
                kakao.maps.drawing.OverlayType.POLYLINE,
                kakao.maps.drawing.OverlayType.RECTANGLE,
                kakao.maps.drawing.OverlayType.POLYGON,
              ]}
              guideTooltip={["draw", "drag", "edit", "tab"]}
              markerOptions={{
                // 마커 옵션입니다
                draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다
                removable: true, // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다
              }}
              polylineOptions={{
                // 선 옵션입니다
                draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
                removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
                editable: true, // 그린 후 수정할 수 있도록 설정합니다
                strokeColor: "#39f", // 선 색
                hintStrokeStyle: "dash", // 그리중 마우스를 따라다니는 보조선의 선 스타일
                hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
              }}
              rectangleOptions={{
                draggable: true,
                removable: true,
                editable: true,
                strokeColor: "#39f", // 외곽선 색
                fillColor: "#39f", // 채우기 색
                fillOpacity: 0.5, // 채우기색 투명도
              }}
              circleOptions={{
                draggable: true,
                removable: true,
                editable: true,
                strokeColor: "#39f",
                fillColor: "#39f",
                fillOpacity: 0.5,
              }}
              polygonOptions={{
                draggable: true,
                removable: true,
                editable: true,
                strokeColor: "#39f",
                fillColor: "#39f",
                fillOpacity: 0.5,
                hintStrokeStyle: "dash",
                hintStrokeOpacity: 0.5,
              }}
              arrowOptions={{
                draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
                removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
                editable: true, // 그린 후 수정할 수 있도록 설정합니다
                strokeColor: "#39f", // 선 색
                hintStrokeStyle: "dash", // 그리중 마우스를 따라다니는 보조선의 선 스타일
                hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
              }}
              ellipseOptions={{
                draggable: true,
                removable: true,
                editable: true,
                strokeColor: "#39f",
                fillColor: "#39f",
                fillOpacity: 0.5,
              }}
            />
          </Map>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)
              }}
            >
              선
            </button>
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.ARROW)
              }}
            >
              화살표
            </button>
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)
              }}
            >
              원
            </button>
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.MARKER)
              }}
            >
              마커
            </button>
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)
              }}
            >
              다각형
            </button>
            <button
              onClick={(e) => {
                selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)
              }}
            >
              사각형
            </button>
          </div>
        </>
      )
  }
  
  export default MapInWeb;