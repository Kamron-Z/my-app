import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.ProfileBackImg}>
                <img
                    src='https://i.ytimg.com/vi/18HkHeuy5ao/maxresdefault.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.authorImg}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <ProfileStatus status={'hello'}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo