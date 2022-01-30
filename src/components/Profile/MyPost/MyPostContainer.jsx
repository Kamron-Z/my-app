import {addPostCreator, updatePostStateCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();

    const updatePost = (text) => {
        props.store.dispatch(updatePostStateCreator(text))
    }

    const addPosts = () => {
        props.store.dispatch(addPostCreator())
    }

    return (<MyPost addPost={addPosts} updateNewPost={updatePost}
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}/>)
}

export default MyPostContainer