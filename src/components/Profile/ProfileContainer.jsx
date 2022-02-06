import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfileCreator} from "../Redux/profileReducer";
import {useParams} from "react-router-dom";

let params = 0
let Params = () => {
    params = useParams();
    return <></>
}

class ProfileAPI  extends React.Component {

    componentDidMount() {
        if(!params.userId) { params.userId = 2 }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + params.userId)
            .then(res => {
                this.props.setProfileUsers(res.data)
            })
    }

    render() {
        return (
            <>
                <Params/>
                <Profile profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        authId: state.auth.id
    }
}

export default connect(mapStateToProps,
    {
        setProfileUsers: setUsersProfileCreator
    }
    )(ProfileAPI)


