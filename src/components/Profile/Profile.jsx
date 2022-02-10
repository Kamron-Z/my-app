import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import React from "react";
import {AuthRedirectComponents} from "../hoc/withAuthRedirect";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile.profileUser}/>
            <MyPostContainer />
        </div>
    )
}

let AuthRedirectProfile = AuthRedirectComponents(Profile)

export default AuthRedirectProfile