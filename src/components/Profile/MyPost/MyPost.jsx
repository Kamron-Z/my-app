import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    let postsData = [
        {
            id: 1,
            message: 'hi, my first post',
            likeCounter: 15
        },
        {
            id: 2,
            message: 'how are you?',
            likeCounter: 25
        },
    ]

    return (
        <div className={s.myPosts}>
            My posts
            <div className={s.newPost}>
                <input type="text"/>
                <button>Send post</button>
            </div>
            <Post message={postsData[0].message} liked={postsData[0].likeCounter}/>
            <Post message={postsData[1].message} liked={postsData[1].likeCounter}/>
        </div>
    )
}

export default MyPost