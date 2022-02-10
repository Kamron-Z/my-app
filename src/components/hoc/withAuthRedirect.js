import {Route, Routes} from "react-router-dom";
import LoginPage from "../Login/Login";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let AuthRedirectComponents = (Components) => {

    class authRedirect extends React.Component {

        render() {
            if (!this.props.isAuth) {
                return (
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                    </Routes>
                );
            }
            return <Components {...this.props} />
        }
    }
    let withConnect = connect(mapStateToPropsRedirect)(authRedirect)

    return withConnect
}