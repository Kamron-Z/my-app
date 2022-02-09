import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../Redux/profileReducer";
import {useParams} from "react-router-dom";

let params = 0
let Params = () => {
    params = useParams();
    return <></>
}

class ProfileAPI extends React.Component {

    componentDidMount() {
        if (!params.userId) {
            params.userId = 2
        }
        this.props.getProfile(params.userId = 2)
    }

    render() {
        return (
            <>
                <Params/>
                <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        authId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
    {
        getProfile: getProfile
    }
)(ProfileAPI)


