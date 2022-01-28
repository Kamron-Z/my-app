import s from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostCreator, updatePostState, updatePostStateCreator} from "../../Redux/store";



const MyPost = (props) => {
    let postElements = props.postsData.map((p) => <Post message={p.message} liked={p.likeCounter}/>)

    const updatePost = (event) => {
        let text = event.target.value
        props.dispatch(updatePostStateCreator(text))
    }

    const addPosts = () => {
        props.dispatch(addPostCreator())
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <input type="text" className={s.input} onChange={updatePost} value={props.newPostText}/>
                <button className={s.btn} onClick={addPosts}>Send post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost