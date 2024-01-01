import preloaderImg from "./../../../accets/images/rainbow.gif"
import classes from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <img src={preloaderImg} alt='loading' /> 
        </div>
    )
}

export default Preloader;