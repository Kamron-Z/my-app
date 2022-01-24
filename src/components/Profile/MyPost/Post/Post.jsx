import s from './Post.module.css'

const Post = (props) => {

  return (
      <div className={s.item}>
          <div>
              <img src="https://avatarfiles.alphacoders.com/280/thumb-280985.png" />
          </div>
          <div>
              <div>{props.message}</div>
              <div>like {props.liked}</div>
          </div>
      </div>
  )
}

export default Post