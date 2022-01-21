import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.ProfileBackImg}>
                <img
                    src='https://i.ytimg.com/vi/18HkHeuy5ao/maxresdefault.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.authorImg}>
                    <img src="https://data.whicdn.com/images/356042526/original.jpg" />
                </div>
                <div>
                    <div>name: Amber</div>
                    <div>sex: Female</div>
                    <div>birthday: August 10th</div>
                    <div>region: Mondstadt</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo