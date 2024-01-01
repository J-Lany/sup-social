import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./Login.module.css"
import { Input } from "../common/FormsControls/FormControls";
import { required, maxLength } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

let maxLength20 = maxLength(20);

const LoginForm = ({handleSubmit ,error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.boxOfForm}>
            <div>

                <Field component={Input} validate={[required, maxLength20]} placeholder={"Login"} name={"login"} className={classes.input} />
            </div>
            <div>
                <Field component={Input} validate={[required, maxLength20]} placeholder={"Password"} name={"password"} type="password" className={classes.input} />
            </div>
            <div className={classes.checkboxInForm}>
                <Field component={Input} type="checkbox" name={"rememberMe"} className={classes.checkbox} /> remember me
            </div>
            { 
                error && <div className={classes.formSummaryError}>{error}</div>
            }
            <div>
                <button className={classes.button}>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm)

const Login = ({login, isAuth, rememberMe}) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password, rememberMe)
    }

    if (isAuth) {
        return <Navigate to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
    })
}

export default connect(mapStateToProps, { login })(Login);