import React from "react";
import * as axios from "axios";
import s from "./Users.module.css"
import userPhoto from '../../assests/images/userPhoto.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPage(response.data.totalCount)
            })
    }

    onPageChange = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = this.props.totalUsersCounter/this.props.pageSize
        let pages = []
        for (let i=1; i <= 10; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map((p)=> {
                    return <button key={p} className={this.props.currentPage === p ? s.pageSelect : ''}
                    onClick={() => { this.onPageChange(p) }}>{p}</button>
                })}
                <div className={s.items}>

                    {
                        this.props.users.map((u) => <div key={u.id}>
                            <div>
                                <div>
                                    <img width='40' src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>follow</button>}
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
}

export default Users