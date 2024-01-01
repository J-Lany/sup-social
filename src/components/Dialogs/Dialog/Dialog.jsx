import classes from "./Dialog.module.css"
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.item}>

            <NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.person}>
                    <img src={props.ava} alt="avatarla" />
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default Dialog;