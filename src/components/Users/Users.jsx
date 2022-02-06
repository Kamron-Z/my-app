import React from "react";
import * as axios from "axios";
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
                return <button disabled={props.currentPage == p ? 'disabled' : null} key={p}
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
                                    <button onClick={() => {

                                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                                            withCredentials: true, headers: {
                                                "API-KEY": "93dd530c-fc6d-4e26-bfa6-16b1f7bc6644"
                                            }
                                        })
                                            .then(res => {
                                                if (res.data.resultCode == 0) {
                                                    props.unFollow(u.id)
                                                }
                                            })

                                    }}>unfollow</button>
                                    : <button onClick={() => {

                                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {}, {
                                            withCredentials: true, headers:
                                                {"API-KEY": "93dd530c-fc6d-4e26-bfa6-16b1f7bc6644"}
                                        })
                                            .then(res => {
                                                if (res.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            })

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