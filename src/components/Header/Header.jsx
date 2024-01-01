import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF-LlUN4YRlCeJ3_I6keeY4cyLFxGznZXRlPAOfshDV-6XmCeVxzlQ0-LqzuoCjhT6JQ&usqp=CAU" alt="photoLogo" />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}  <button className={classes.logoutButton} onClick={props.logout}>Logout</button>
                        </div>
                    : <NavLink className={classes.login} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;