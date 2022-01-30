import s from './Dialogs.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import DialogsItem from "./DialogsItem/dialogsItem";
import Message from "./Message/Message";
import {addDialogsCreator, updateDialogsCreator} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    const updateDialogs = (text) => {
        props.store.dispatch(updateDialogsCreator(text))
    }

    const sendDialogs = () => {
        props.store.dispatch(addDialogsCreator())
    }

    return (
       <Dialogs updateNewDialogs={updateDialogs} addDialogs={sendDialogs} state={state.dialogsPage}/>
    )
}

export default DialogsContainer