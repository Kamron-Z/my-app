import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            dispatch.updateNewPost(text)
        },
        addPost: () => {
            dispatch.addPost()
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer