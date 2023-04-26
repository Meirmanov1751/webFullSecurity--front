import React, {FC, useContext, useState} from 'react';
import {Context} from "../../../index";
import {ErrorMessage, Field, Formik} from "formik";
import classes from '../auth.module.css'

const SingInForm: FC = () => {
  let {store} = useContext(Context)

  return (
    <div>
      <h1 className={classes.title}>Sing In</h1>
      <Formik initialValues={{username: '', password: '', password_repeat: ''}}
              validate={(values: any) => {
                const errors: any = {};
                if (!values.username) {
                  errors.username = 'Required';
                } else if (
                  !/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/i.test(values.username)
                ) {
                  errors.username = 'Invalid username';
                }

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
                setTimeout(() => {
                  let jsonAuth: string = JSON.stringify(values, null, 2)
                  alert(jsonAuth);
                  store.registration(values.username, values.password);
                  setSubmitting(false);
                }, 400);
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
            <Field className={classes.input} placeholder={'password repeat'} type="password" name="password_repeat"/>
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
