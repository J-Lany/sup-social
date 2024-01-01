import React from "react";
import Profile from "./Profile"
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";



export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}
let mapStateToPops = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId
    })

}

export default compose(
    connect(mapStateToPops, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)