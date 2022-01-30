import {connect} from "react-redux";
import User from "./User";
import {followCreator, setUsersCreator, unFollowCreator} from "../Redux/userReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UsersContainer