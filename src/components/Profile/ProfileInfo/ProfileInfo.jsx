
import classes from "./ProfileInfo.module.css";
import userPhoto from '../../../accets/images/defaultUserPhoto.jpg';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import contactsPhoto from '../../../accets/images/conversation.png';

function ProfileInfo({ profile, status, updateStatus, isOwner, ...props }) {
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    console.log(profile);
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="AVA" className={classes.ava}></img>
                <div className={classes.userInfo}>
                    {
                        isOwner &&
                        <input type="file" onChange={onMainPhotoSelected} />
                    }
                    <h2 className={classes.fullName}>{profile.fullName}</h2>
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                    <div>
                        lookingForAJob: {profile.lookingForAJob ? "Yeah" : "Nope"}
                    </div>
                    <div className={classes.contacts}>
                        <img src={contactsPhoto} className={classes.icon}/>
                        <h4>Contacts:</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;