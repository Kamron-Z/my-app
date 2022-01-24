import s from './Dialogs.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import DialogsItem from "./DialogsItem/dialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messageData.map((m) => <Message message={m.message}/>)
    let text = ''
    const updateDialogs = (event) => {
        text = event.target.value
    }

    const sendDialogs = () => {
        console.log(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <input type="text" onChange={updateDialogs}/>
                    <button onClick={sendDialogs}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs