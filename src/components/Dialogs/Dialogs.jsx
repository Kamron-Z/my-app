import s from './Dialogs.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import DialogsItem from "./DialogsItem/dialogsItem";
import Message from "./Message/Message";
import {useRef} from "react";
import {addDialog, updateDialogState} from "../State/state";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messageData.map((m) => <Message message={m.message}/>)
    let inputValue = useRef()

    let onChangeInput = () => {
        let text = inputValue.current.value
        props.updateDialogState(text)
    }

    let sendMessage = () => {
        let text = inputValue.current.value
        props.addDialog()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <input type="text" ref={inputValue} onChange={onChangeInput} value={props.state.newDialogState}/>
                    <button onClick={sendMessage}>send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs