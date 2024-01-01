
import classes from "./ProfileInfo.module.css";
import userPhoto from '../../../accets/images/defaultUserPhoto.jpg';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo({profile, status, updateStatus}) {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.ava + " " + classes.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="AVA"></img>
                <div className={classes.userInfo}>
                    <p className={classes.fullName}>{profile.fullName}</p>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;