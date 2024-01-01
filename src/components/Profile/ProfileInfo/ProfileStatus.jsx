
import React, { useEffect, useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedEditMode = () => {
        setEditMode(true);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    return (
        <div>

            {
                editMode
                    ? <div className={classes.userInfo}><input className={classes.statusInput} autoFocus={true} value={status} onChange={onStatusChange} onBlur={deActivateEditMode} /></div>
                    : <div className={classes.userInfo}><p className={classes.status} onDoubleClick={activatedEditMode}>{props.status || "No status"}</p>
                    </div>
            }

        </div>
    )
}


export default ProfileStatus;