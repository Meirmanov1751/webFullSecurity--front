import React, { useContext, useEffect, useState} from 'react';
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";
import {ErrorMessage, Field, Formik} from "formik"
import classes from '../auth.module.css'
import {useNavigate} from "react-router";

const LoginForm= () => {
  let {Store1} = useContext(Context)
  let navigate = useNavigate();
  debugger
  useEffect(() => {
    if (Store1.isAuth) {
      return navigate("/");
    }
  }, [Store1.isAuth]);

  return (
    <div>
      <h1 className={classes.title}>{Store1.isAuth ? "hi": "Login"}</h1>
      <Formik initialValues={{username: '', password: ''}}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Required';
                } else if (
                  !/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/i.test(values.username)
                ) {
                  errors.username = 'Invalid username';
                }

                if (!values.password) {
                  errors.password = 'Required';
                }

                if (values.password.length < 8) {
                  errors.password = 'password less then 8 symbol';
                }

                return errors;
              }}
              onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                  let jsonAuth = JSON.stringify(values, null, 2)
                  alert(jsonAuth);
                  Store1.login(values.username, values.password);
                  setSubmitting(false);
                }, 400);
              }}>
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
            <Field className={classes.input} placeholder={'username'} type="username" name="username"/>
            <ErrorMessage name="username" component="div"/>
            <Field className={classes.input} placeholder={'password'} type="password" name="password"/>
            <ErrorMessage name="password" component="div"/>
            <button className={classes.btn} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default observer(LoginForm);
