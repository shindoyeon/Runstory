import { GLOBALTYPES } from "./globalTypes";

export const PROFILE_TYPES={
    LOADING:'LOADING',
    GET_USER:'GET_USER'
}


export const followUserProfile = (user)=> async(dispatch, getState)=>{

    const {userLogin: {userInfo}} = getState()
    let newUser =  {...user, followers:[...user.followers, userInfo.user] }

    try{
        
        const {data} = await axios.patch(`/api/users/${user._id}/follow`,userInfo.user,{
            headers:{authorization:`Bearer ${userInfo?.token}`}
        } )

        dispatch({
            type:USER_FOLLOW_PROFILE,
            payload:newUser
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        })

        
        localStorage.removeItem('userInfo')
        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(err){
        dispatch({
            type:ALERT,
            payload:{error:err.response && err.response.data.message? err.response.data.message : err.message}

        })
    }

}

export const unfollowUserProfile = (user)=> async(dispatch, getState)=>{

    const {userLogin: {userInfo}} = getState()
    let newUser =  {...user, followers:user.followers.filter(x=>x._id !==userInfo.user._id) }

    try{
        
        const {data} = await axios.patch(`/api/users/${user._id}/unfollow`,userInfo.user,{
            headers:{authorization:`Bearer ${userInfo?.token}`}
        } )

        dispatch({
            type:USER_UNFOLLOW_PROFILE,
            payload:newUser
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        
        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload : data
        })

        localStorage.removeItem('userInfo')
        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(err){
        dispatch({
            type:ALERT,
            payload:{error:err.response && err.response.data.message? err.response.data.message : err.message}

        })
    }
}