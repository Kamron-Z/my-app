import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    let postElements = props.postsData.map((p) => <Post message={p.message} liked={p.likeCounter}/>)

    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <input type="text" className={s.input}/>
                <button className={s.btn}>Send post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost