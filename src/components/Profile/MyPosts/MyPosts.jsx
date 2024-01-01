import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormControls";
// import { render } from "@testing-library/react";

const maxLength30 = maxLength(30);

const MyPosts = React.memo(
    (props)  => {
        let postsElements = props.postsData.map((pobj) => <Post message={pobj.message} likeCounts={pobj.likeCounts} avatar={pobj.avatar} key={pobj.id} />);
    
        let onSubmit = (formData) => {
            props.addPost(formData.postForm);
        }
        console.log("RENDER")
        return (
            <div className={classes.container}>
                <h3>My posts</h3>
                <PostReduxForm onSubmit={onSubmit} />
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
);

// class MyPosts extends PureComponent {
//     //Вот из-за пьюр компонента можно не юзать ниже штуки
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return nextProps !== this.props || nextState !== this.state
//     // }

//     render() {
//         console.log('RENDER')
//         let postsElements = this.props.postsData.map((pobj) => <Post message={pobj.message} likeCounts={pobj.likeCounts} avatar={pobj.avatar} key={pobj.id} />);

//         let onSubmit = (formData) => {
//             this.props.addPost(formData.postForm);
//         }

//         return (
//             <div className={classes.container}>
//                 <h3>My posts</h3>
//                 <PostReduxForm onSubmit={onSubmit} />
//                 <div className={classes.posts}>
//                     {postsElements}
//                 </div>
//             </div>
//         )
//     }
// }
export default MyPosts;

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"postForm"} placeholder={"Enter your post"} validate={[required, maxLength30]} />
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: "postForm" })(PostForm)