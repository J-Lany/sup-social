import classes from "./Nav.module.css"
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item} >
                <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/game" className={navData => navData.isActive ? classes.active : classes.item}>Game</NavLink>
            </div >
        </nav>
    )
}
export default Nav;