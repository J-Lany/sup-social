import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import { getUsersList, getCurrentPage, getFollowingInProgress, getIsFetchingStatus, getPageSize, getTotalUserCount } from "../../redux/usesrs-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize);
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow} 
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(
    mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress, getUsers
    })(UsersContainer);