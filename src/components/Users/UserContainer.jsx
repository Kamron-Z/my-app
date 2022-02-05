import {connect} from "react-redux";
import {
    followCreator,
    setCurrentPageCreator, setIsFetchingCreator,
    setTotalCountCreator,
    setUsersCreator,
    unFollowCreator
} from "../Redux/userReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalPage(response.data.totalCount)
            })
    }

    onPageChange = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            {this.props.isFetching ? <div></div> : <Users
                totalUsersCounter={this.props.totalUsersCounter}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChange={this.onPageChange}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
            />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageCreator(pageNum))
        },
        setTotalPage: (totalCount) => {
            dispatch(setTotalCountCreator(totalCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingCreator(isFetching))
        }
    }
}

let UsersContainer = connect(mapStateToProps,
    {
        follow: followCreator,
        unFollow: unFollowCreator,
        setUsers: setUsersCreator,
        setCurrentPage: setCurrentPageCreator,
        setTotalPage: setTotalCountCreator,
        setIsFetching: setIsFetchingCreator,
    }
)(UsersAPI)

export default UsersContainer