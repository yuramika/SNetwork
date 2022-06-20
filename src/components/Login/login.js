import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";



const loginFormSchema = Yup.object({
    email: Yup.string().email('Invalid e-mail').required(''),
    password: Yup.string().min(8, 'Must be longer than 8 characters').required(''),
});

const Login = (props) => {
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                validationSchema={loginFormSchema}
                onSubmit={(values, onSubmitProps) => {
                    props.login(values.email, values.password, values.rememberMe, onSubmitProps.setStatus, onSubmitProps.setSubmitting);
                    onSubmitProps.setSubmitting(true);

                }}
            >
                {(formik) => (
                    <Form>


                        <div>
                            <Field type='email' name='email' placeholder='e-mail' />
                            <ErrorMessage name='email' component='p' />
                        </div>
                        <div>
                            <Field type='password' name='password' placeholder='password' />
                            <ErrorMessage name='password' component='p' />
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMe' />
                            <label htmlFor='rememberMe'>remember me</label>
                        </div>
                        <button type="submit" disabled={formik.isSubmitting}>Login</button>
                        {formik.status && <div>{formik.status}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

let mapStateToProps = (state) => {
    return{
        isAuth : state.auth.isAuth
    }}
export default connect(mapStateToProps, {login}) (Login);
