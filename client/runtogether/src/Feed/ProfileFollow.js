import React, { useState } from 'react';
import {
  ChakraProvider,
  Card,
} from '@chakra-ui/react';
import './ProfileFollow.css'
import { Link } from 'react-router-dom';

function Follow() {
  return (
    <ChakraProvider>
      <Card direction={{base:'row'}} className='profile-container'>
        <FollowCount initNumber={0}></FollowCount>
        <FollowingCount initNumber={0}></FollowingCount>
      </Card>
    </ChakraProvider>
  );
}

function FollowCount(props){
  var numberState = useState(props.initNumber);
  var followCount = numberState[0];
  var setFollow = numberState[1];

  return (
    <Link to="/feed/follow">
    <div>
      <h4>팔로우</h4>
      <p> {followCount}명</p>
      <input type='button' value='추가' onClick={
        function(){
          setFollow(followCount + 1)
        }
      }></input>
      <input type='button' value='삭제' onClick={
        function(){
          setFollow(followCount - 1)
        }
      }></input>
    </div>
    </Link>
  );
}

function FollowingCount(props){
  var numberState = useState(props.initNumber);
  var followingCount = numberState[0];
  var setFollowing = numberState[1];

  return (
    <Link to="/feed/follow">
    <div>
      <h4>팔로잉</h4>
      <p> {followingCount}명</p>
      <input type='button' value='추가' onClick={
        function(){
          setFollowing(followingCount + 1)
        }
      }></input>
      <input type='button' value='삭제' onClick={
        function(){
          setFollowing(followingCount - 1)
        }
      }></input>
    </div>
    </Link>
  );
}





export default Follow;

