import React, { useEffect, useState, useRef } from 'react';
import './BasicMap.css';
import html2canvas from 'html2canvas';
import _ from "lodash";
// import {
//     Image, Card, CardBody, CardFooter, CardHeader
//   } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function MapSearchResult({result}) {
    
    return (
        <table>
            {result.map((item, idx) => {
                console.log(item)
                return(
                    <tr>
                        <td>{idx}</td>
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                    </tr>
                )
            })}
        </table>
    );
  }

export default MapSearchResult;