import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// function DialogsContainer(props) {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//               let state = store.getState().messagesPage;

//               let onSendMessageClick = () => {
//                   store.dispatch(addMessageActionCreator());
//               };
          
//               let onNewMessageChange = (body) => {
//                   let action = updateMessageActionCreator(body);
//                   store.dispatch(action);
//               }
//             return (
//                 <Dialogs
//                 state={state}
//                 addMessage={onSendMessageClick}
//                 updateNewMessageBody={onNewMessageChange}
//                 />
//             )
//         }}
//       </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
return {
    messagesPage: state.messagesPage,
}
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

