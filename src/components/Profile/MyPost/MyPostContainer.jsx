import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPostCreator, updatePostStateCreator} from "../../Redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            dispatch(updatePostStateCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer