import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}

export default Profile