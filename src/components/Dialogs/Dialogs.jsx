import classes from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormControls";
import { required, maxLength } from "../../utils/validators";

function Dialogs(props) {
    let dialogElements = props.messagesPage.dialogsData.map((dObj) => <Dialog name={dObj.name} id={dObj.id} key={dObj.id} ava={dObj.avatar} />);
    let messageElements = props.messagesPage.messagesData.map((mObj) => <Message message={mObj.message} key={mObj.id} />);

    const onSubmit = (formData) => {
        props.addMessage(formData.newMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <AddMessageReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;

let maxLength500 = maxLength(500)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                component={Textarea}
                placeholder={"Enter your message"}
                name={"newMessage"} 
                validate={[required, maxLength500]}
                />
            </div>
            <div>
                <button className={classes.button}>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm)
