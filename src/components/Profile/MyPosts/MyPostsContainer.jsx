import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// function MyPostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 let onPostChange = (text) => {
//                     let action = updatePostActionCreator(text);
//                     store.dispatch(action);
//                 };
//                 return (
//                     <MyPosts
//                         updatePostActionCreator={onPostChange}
//                         addPost={addPost}
//                         newPostText={state.profilePage.newPostText}
//                         postsData={state.profilePage.postsData}
//                     />
//                 )
//             }}
//         </ StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postForm) => {
            dispatch(addPostActionCreator(postForm));
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;