import React, { useEffect } from 'react'
import {
  ChakraProvider,
  Card,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from '../actions/profileActions';
import './ProfileFollow.css'


function Follow(props) {
    const userId = props.match.params.id;
    

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const {user} = userProfile


    useEffect(() => {
        if(!user || userId !== user._id){
            dispatch(getProfileUser(userId))
        }
    }, [dispatch, userId, user])

    return (
      <ChakraProvider>
        <Card direction={{base:'row'}} className='profile-container'>
        <div>
          <span>
              {user?.followers.length} 팔로우
          </span>
          <span>
              {user?.following.length} 팔로잉 
          </span>
        </div>
    
        </Card>
      </ChakraProvider>
  );
}


// function FollowCount(props){
//   var numberState = useState(props.initNumber);
//   var followCount = numberState[0];
//   var setFollow = numberState[1];

//   return (
//     <Link to="/feed/follow">
//     <div>
//       <h4>팔로우</h4>
//       <p> {followCount}명</p>
//       <input type='button' value='추가' onClick={
//         function(){
//           setFollow(followCount + 1)
//         }
//       }></input>
//       <input type='button' value='삭제' onClick={
//         function(){
//           setFollow(followCount - 1)
//         }
//       }></input>
//     </div>
//     </Link>
//   );
// }

// function FollowingCount(props){
//   var numberState = useState(props.initNumber);
//   var followingCount = numberState[0];
//   var setFollowing = numberState[1];

//   return (
//     <Link to="/feed/follow">
//     <div>
//       <h4>팔로잉</h4>
//       <p> {followingCount}명</p>
//       <input type='button' value='추가' onClick={
//         function(){
//           setFollowing(followingCount + 1)
//         }
//       }></input>
//       <input type='button' value='삭제' onClick={
//         function(){
//           setFollowing(followingCount - 1)
//         }
//       }></input>
//     </div>
//     </Link>
//   );
// }





export default Follow;

