import React from 'react';
import './FeedSearchResult.css';
import {
    Image
  } from '@chakra-ui/react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const SearchPageMsg = () => {
    return (
        <div className="user-search-result">
            <table border="1" className='imgs'>
                <tr>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                </tr>
                <tr>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                </tr>
                <tr>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                    <td><Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    borderRadius={5}
                /></td>
                </tr>
            </table>
        </div>
    );
}

export default SearchPageMsg;