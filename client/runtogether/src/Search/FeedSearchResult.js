import React, { useEffect } from 'react';
import './FeedSearchResult.css';
import {
    Image,
    useDisclosure
  } from '@chakra-ui/react';

const FeedSearchResult = ({feedResult}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function createTable(feedResult) {
        var table_value = new Array();
        var html = '<table>';
        for(var result in feedResult) {
            table_value.push(result);
        }
        for(var idx in table_value) {
            if(idx%3===0) {
                html += '<tr>';
                html += '<td>'+table_value[idx].filePath+'</td>';
            }
            if(idx%3===1) {
                html += '<td>'+table_value[idx].filePath+'</td>';
            }
            if(idx%3===2) {
                html += '<td>'+table_value[idx].filePath+'</td>';
                html += '</tr>'
            }
        }
        html += '</table>'
        var container = document.getElementById('feed-search-result');
        container.append(html);
    }

    useEffect(() => {
        createTable(feedResult);
    }, [])


    return (
        <div className="feed-search-result">
            <table border="1" className='imgs-table'>
                <tr>
                    <td>
                        <Image
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

export default FeedSearchResult;