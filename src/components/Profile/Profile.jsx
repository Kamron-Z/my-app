import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost postsData={props.state.postsData}
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch} />
        </div>
    )
}

export default Profile