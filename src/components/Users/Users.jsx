import React from 'react';
import Paginator from './Paginator';
import User from './User'

let Users = ({ currentPage, totalUserCount, pageSize, onPageChanged, ...props }) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} totalUserCount={totalUserCount} onPageChanged={onPageChanged} />
            { props.users.map((user) => 
            <User
                key={user.id}
                user={user}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />
            )}
        </ div>
    )
}

export default Users;