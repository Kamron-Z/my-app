let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers(
    //        [ {
    //             id: 1,
    //             followed: false,
    //             fullName: 'Damir',
    //             status: 'I am good',
    //             location: {county: 'Uzbekiston', region: 'Samarkand'},
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
    //         },
    //         {
    //             id: 2,
    //             followed: true,
    //             fullName: 'Axmad',
    //             status: 'I am good too',
    //             location: {county: 'Uzbekiston', region: 'Toshkent'},
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
    //         },
    //         {
    //             id: 3,
    //             followed: true,
    //             fullName: 'Sunnat',
    //             status: 'I am super',
    //             location: {county: 'Uzbekiston', region: 'Samarkand'},
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
    //         }]
    //     )
    // }

    return (
        <div>
            {
                props.users.map((u) => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.unFollow(u.id)}>unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.county}</div>
                            <div>{u.location.region}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users