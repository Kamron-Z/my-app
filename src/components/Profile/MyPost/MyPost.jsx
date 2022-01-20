import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
  return (
      <div>
          My posts
          <div>
              New post
          </div>
          <Post message='hi, my first post' liked='15'/>
          <Post message='how are you?' liked='20'/>
      </div>
  )
}

export default MyPost