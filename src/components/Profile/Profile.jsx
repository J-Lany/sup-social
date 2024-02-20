import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} 
                savePhoto={props.savePhoto}/>
            <SuperMyPostsContainer />
        </div>
    )
};

export default Profile;