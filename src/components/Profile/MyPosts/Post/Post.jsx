import classes from "./Post.module.css"

function Post(props) {
    return (
        <div className={classes.item}>
            <img src={props.avatar} alt="ava" />
            {props.message}
            <div>
                <span>{props.likeCounts} likes</span>
            </div>
        </div>
    )
};

export default Post;