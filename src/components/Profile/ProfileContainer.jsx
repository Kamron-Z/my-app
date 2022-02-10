import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../Redux/profileReducer";
import {useParams} from "react-router-dom";
import AuthRedirectProfile from "./Profile";
import Profile from "./Profile";
import {compose} from "redux";
import {AuthRedirectComponents} from "../hoc/withAuthRedirect";

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
    }
}

export default compose(
    connect(mapStateToProps,
        {getProfile: getProfile})
)(ProfileAPI)



