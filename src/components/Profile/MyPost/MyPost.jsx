import s from './MyPost.module.css'
import Post from "./Post/Post";
import {useRef} from "react";
import {updatePostState} from "../../State/state";

const MyPost = (props) => {
    let postElements = props.postsData.map((p) => <Post message={p.message} liked={p.likeCounter}/>)
    let newPostRef = useRef();

    let newPostValue = () => {
        let text = newPostRef.current.value
        props.updatePostState(text)
    }

    let addPost = () => {
        let text = newPostRef.current.value
        props.addPost(text)
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <input type="text" className={s.input} ref={newPostRef} onChange={newPostValue} value={props.newPostState}/>
                <button className={s.btn} onClick={addPost}>Send post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost