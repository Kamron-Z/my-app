import {addDialogsCreator, updateDialogsCreator} from "../Redux/dialogsReducer";
import {connect} from "react-redux";
import AuthRedirectDialogs from "./Dialogs";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectDialogs)

export default DialogsContainer