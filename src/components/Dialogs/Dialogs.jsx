import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/dialogsItem";
import Message from "./Message/Message";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../Login/Login";

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = props.messageData.map((m) => <Message message={m.message} key={m.id}/>)

    const updateDialogs = (event) => {
        let text = event.target.value
        props.updateNewDialogs(text)
    }

    const sendDialogs = () => {
        props.addDialogs()
    }

    if (!props.isAuth) {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <input type="text" onChange={updateDialogs} value={props.newDialogsText}/>
                    <button onClick={sendDialogs}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs