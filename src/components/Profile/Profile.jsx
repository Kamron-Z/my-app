import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updatePostState} from "../State/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost
                postsData={props.state.postsData}
                newPostState={props.state.newPostState}
                updatePostState={props.updatePostState}
                addPost={props.addPost}/>
        </div>
    )
}

export default Profile