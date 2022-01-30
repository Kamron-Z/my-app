import {addDialogsCreator, updateDialogsCreator} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newDialogsText: state.dialogsPage.newDialogsText
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer