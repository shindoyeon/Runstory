import React, {useEffect, useState} from 'react';
import './Feed.css';
import axios from "axios";
import CardList from './CardList'

const axiosTest = async () => {
  const res = await axios.get(
    "https://76d25f2c-5ce4-48a3-ac77-a8128b30717d.mock.pstmn.io/main/fee"
  );
  return res.data;
};

export default function TempFeed() {
    const [feeds, setFeeds] = useState([]);
    
    useEffect(() => {
      
      (async () => {
        const data = await axiosTest();
        setFeeds(data.data);
      })();
    }, [setFeeds]);
    
    return (
      <div className='entire-feed'>
            <CardList feeds={feeds}></CardList>
        </div>
    );
  }