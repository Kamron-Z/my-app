import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../Login/Login";
import React from "react";

const Profile = (props) => {
    if (!props.isAuth) {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        );
    }
    return (
        <div>
            <ProfileInfo profile={props.profile.profileUser}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile