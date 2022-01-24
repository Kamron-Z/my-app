import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const  Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost postsData={props.state.postsData}
                    addPostStore={props.addPostStore}
                    updatePostState={props.updatePostState}
                    newPostText={props.state.newPostText}/>
        </div>
    )
}

export default Profile