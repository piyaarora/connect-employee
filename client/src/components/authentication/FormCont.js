import React, { useContext, useEffect, useState } from 'react'
// import Log from './log';
import Login from './Login';
import './styles.css'
import Register from './Register';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/AlertContext';
import LoginImg from '../../images/login.jpg'
import RegisImg from '../../images/register.png'

const FormCont = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { error, clearErrors, isAuthenticated } = authContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }


        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disabled-next-line
    }, [error, isAuthenticated, props.history]);



    return (
        <section className="sl-cont">
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src={LoginImg} alt="" /></div>
                    <div className="formBx">
                        <Login />
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <Register />
                    </div>
                    <div className="imgBx"><img src={RegisImg} alt="" /></div>
                </div>
            </div>
        </section>
    )
}
export default FormCont