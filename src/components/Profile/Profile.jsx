import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <SuperMyPostsContainer />
        </div>
    )
};

export default Profile;