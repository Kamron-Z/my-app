import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div></div>
            <div>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header