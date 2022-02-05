import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.ProfileBackImg}>
                <img
                    src='https://i.ytimg.com/vi/18HkHeuy5ao/maxresdefault.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.authorImg}>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    <div>name: {props.profile.fullName}</div>
                    <div>about me: {props.profile.aboutMe}</div>
                    <div>Job about:{props.profile.lookingForAJobDescription}</div>
                    <div>Job status: {props.profile.lookingForAJob ? 'working' : 'not work'}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo