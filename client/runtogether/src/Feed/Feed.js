import React from 'react'
import Info from './Info'
import ProfileFeed from './ProfileFeed';
import './Feed.css'

// 개인프로필페이지 
const Profile = () => {
    return (
        <div className="profile">
            <Info/>
            <ProfileFeed></ProfileFeed>
        </div>
    )
}

export default Profile;