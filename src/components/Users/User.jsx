import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../accets/images/defaultUserPhoto.jpg'
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, follow, unfollow }) => {

    return (
        <div className={classes.userBlock}>
            <div className={classes.userLeft}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avka" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}
                            className={classes.buttonFollow}
                            >
                            Unfollow
                        </button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}
                            className={classes.buttonUnollow}
                        >
                            Follow
                        </button>
                    }
                </div>
            </div>
            <div>
                <span>
                    <div className={classes.name}>{user.name}</div>
                    <div className={classes.status}>{user.status}</div>
                </span>
                <span>
                    <div className={classes.status}>{"user.location.country"}</div>
                    <div className={classes.status}>{"user.location.city"}</div>
                </span>
            </div>
        </div>
    )
}

export default User;