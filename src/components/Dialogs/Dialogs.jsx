import s from './Dialogs.module.css'
import {NavLink, Route, Routes} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {
        id: 1,
        name: 'Damir'
    },
    {
        id: 2,
        name: 'Axmad'
    },
    {
        id: 3,
        name: 'Fedya'
    },{
        id: 4,
        name: 'Sunnat'
    }
]

let messageData = [
    {
        id: 1,
        message: 'hi'
    },
    {
        id: 2,
        message: 'How are you'
    },
    {
        id: 3,
        message: 'okay'
    },{
        id: 4,
        message: 'hi'
    },

]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs