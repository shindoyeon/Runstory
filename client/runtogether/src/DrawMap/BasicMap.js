import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import html2canvas from 'html2canvas';
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';
import MapSearchResult from './MapSearchResult';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input
} from '@chakra-ui/react'

function BasicMap() {
  const Tmapv2 = window.Tmapv2;
  var [location, setLocation] = useState();
  var [error, setError] = useState();

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
    var lat = 37.566535;
    var lng = 126.9779692;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    });
    container = document.getElementById('map');
    options = {
      center: new Tmapv2.LatLng(lat, lng),
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

    // 이미지 다운로드
    function onSaveAs(uri, fileName) {
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.href = uri;
      link.download = fileName;
      link.click();
      document.body.removeChild(link);
    }

    const [keyword, setKeyword] = useState("");
    const handleKeywordChange = ({ target: { value } }) => setKeyword(value); // 글 작성 시 content 설정
    const [result, setResult] = useState([]);

    const handleSubmit = (event) => { // 작성 버튼 클릭 시 이벤트 함수
        event.preventDefault();
        var searchResult = searchLoc();
    };

    async function searchLoc() {
      var result = await axios.get("https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result", {
          headers: {
            appkey: "l7xxe210feb29ba24deda6a06b0d0e88366a"
          },
          params: {
            "searchKeyword" : keyword, // 검색 키워드
            "resCoordType" : "EPSG3857", // 요청 좌표계
            "reqCoordType" : "WGS84GEO", // 응답 좌표계
            "count" : 100 // 가져올 갯수
          }
        })
        setResult(result.data.searchPoiInfo.pois.poi)
    }

    function panLoc(e) {
      var latLng = e.target.id.split(" ");
      var lat = latLng[0];
      var lng = latLng[1];
      console.log(lat, lng)
      var temp = new Tmapv2.LatLng(lat, lng);
      console.log(tmap)
      tmap[1].panTo(temp);
    }
    
    return (
      <div id='canvas'>
        <div id="map" style={{width:"100%", height:"40vh", margin: "0 auto", marginTop: "-20px" }}></div> 
        <div display='inline-block'>
          <div className="del-btn" onClick={clearDrawing}>다시 그리기</div>
          <div className="save-btn" onClick={onCapture}>이미지로 저장하기</div>
        </div>
        <div style={{maxHeight: '40vh', overflow: 'scroll', width: '100%', margin: '0 auto'}}>
        <div width="100%" style={{margin: '0 auto', textAlign: 'center', marginBottom: '10px'}}>
          <form onSubmit={handleSubmit}>
            <Input width='50%' marginLeft='3%' marginRight='3%' size='xs' marginTop='30px' value={keyword} name='keyword' onChange={handleKeywordChange} placeholder="검색어를 입력해주세요"/>
            <button type='submit'>검색</button>
          </form>
          </div>
          <Table size='sm' textAlign={'center'} variant={'striped'} isCentered>
              <Thead>
                <Tr>
                  <Th textAlign={'center'}>No.</Th>
                  <Th textAlign={'center'}>장소 ID</Th>
                  <Th textAlign={'center'}>장소명</Th>
                </Tr>
              </Thead>
              <Tbody>
                {result.map((item, idx) => {
                    var id = item.frontLat + " " + item.frontLon
                    return(
                        <Tr id={id} onClick={panLoc}>
                            <Td id={id} textAlign={'center'}>{idx+1}</Td>
                            <Td id={id} textAlign={'center'}>{item.id}</Td>
                            <Td id={id} textAlign={'center'}>{item.name}</Td>
                        </Tr>
                    )
                })}
              </Tbody>
          </Table>
        </div>
        {/* <MapSearchResult result={result}></MapSearchResult> */}
        {/* <button onClick={clearDrawing}>라인 삭제하기</button> */}
        {/* <button onClick={drawPolyline} onTouchStart={drawPolyline}>라인 그리기</button> */}
        {/* <button onClick={clearDrawing} onTouchStart={clearDrawing}>라인 삭제하기</button> */}
      </div>
    );
  }

export default BasicMap;