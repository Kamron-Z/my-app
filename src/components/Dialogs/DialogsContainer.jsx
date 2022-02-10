import {addDialogsCreator, updateDialogsCreator} from "../Redux/dialogsReducer";
import {connect} from "react-redux";
import {AuthRedirectComponents} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newDialogsText: state.dialogsPage.newDialogsText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialogs: (text) => {
            dispatch(updateDialogsCreator(text))
        },
        addDialogs: () => {
            dispatch(addDialogsCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectComponents,
)(Dialogs)