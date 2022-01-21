import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.ProfileBackImg}>
                <img
                    src='http://www.japan.com/wp-content/uploads/japan_home_featured_01.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.authorImg}>
                    <img src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
                </div>
                <div>
                    description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo