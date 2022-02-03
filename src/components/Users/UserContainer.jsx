import {connect} from "react-redux";
import Users from "./Users";
import {
    followCreator,
    setCurrentPageCreator,
    setTotalCountCreator,
    setUsersCreator,
    unFollowCreator
} from "../Redux/userReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage : (pageNum) => {
            dispatch(setCurrentPageCreator(pageNum))
        },
        setTotalPage : (totalCount) => {
            dispatch(setTotalCountCreator(totalCount))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer