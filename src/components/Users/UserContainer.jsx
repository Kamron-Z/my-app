import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPageCreator, setFollowCreator, unfollow,
} from "../Redux/userReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {AuthRedirectComponents} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize)
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
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followIsProgress={this.props.followIsProgress}
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
        isFetching: state.usersPage.isFetching,
        followIsProgress: state.usersPage.followIsProgress
    }
}

export default compose(
    connect(mapStateToProps,
        {
            unfollow: unfollow,
            follow: follow,
            setCurrentPage: setCurrentPageCreator,
            setFollowCreator: setFollowCreator,
            getUsers: getUsers
        }),
)(UsersAPI)
