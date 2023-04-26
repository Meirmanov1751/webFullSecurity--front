import React, {useContext} from 'react';
import {Context} from "../../../index";
import {ErrorMessage, Field, Formik} from "formik";
import classes from '../auth.module.css'
import {useNavigate} from "react-router";
import {useEffect} from "react";

const SingInForm = () => {
    let {Store1} = useContext(Context)
    let navigate = useNavigate();


    return (
        <div>
            <h1 className={classes.title}>Регистрация</h1>
            <Formik initialValues={{username: '', password: '', password_repeat: ''}}
                    validate={(values) => {
                        const errors = {};
                        // if (!values.username) {
                        //   errors.username = 'Required';
                        // } else if (
                        //   !/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/i.test(values.username)
                        // ) {
                        //   errors.username = 'Invalid username';
                        // }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password !== values.password_repeat) {
                            errors.password = 'passwords not the same'
                        }

                        if (values.password.length < 8) {
                            errors.password = 'password less then 8 symbol';
                        }

                        if (!values.password_repeat) {
                            errors.password_repeat = 'Required';
                        } else if (values.password !== values.password_repeat) {
                            errors.password_repeat = 'passwords not the same'
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        Store1.registration(values.username, values.password);
                        setSubmitting(false);
                        navigate("/login");
                    }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Field className={classes.input} placeholder={'username'} type="email" name="username"/>
                        <ErrorMessage name="username" component="div"/>
                        <Field className={classes.input} placeholder={'password'} type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <Field className={classes.input} placeholder={'password repeat'} type="password"
                               name="password_repeat"/>
                        <ErrorMessage name="password_repeat" component="div"/>
                        <button className={classes.btn} type="submit" disabled={isSubmitting}>
                            Sing In
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default SingInForm;
