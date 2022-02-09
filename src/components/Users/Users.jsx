import React from "react";
import s from "./Users.module.css"
import userPhoto from '../../assests/images/userPhoto.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = props.totalUsersCounter / props.pageSize
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return <button disabled={props.currentPage === p} key={p}
                               className={props.currentPage === p ? s.pageSelect : ''}
                               onClick={() => {
                                   props.onPageChange(p)
                               }}>{p}</button>
            })}
            <div className={s.items}>

                {
                    props.users.map((u) => <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img width='40' src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followIsProgress.some(id => id === u.id)}  onClick={() => {

                                        props.unfollow( u.id)

                                    }}>unfollow</button>
                                    : <button disabled={props.followIsProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }
                                    }>follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.county"}</div>
                                <div>{"u.location.region"}</div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Users