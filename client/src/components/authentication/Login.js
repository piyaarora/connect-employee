import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/AlertContext';
// import styles from './Login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import { Link } from 'react-router-dom';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;

    const { login, error, clearErrors, isAuthenticated } = authContext

    const [user, setUser] = useState({
        email: '',
        password: '',
    });



    // useEffect(() => {
    //     if (isAuthenticated) {
    //         props.history.push('/')
    //     }


    //     if (error === 'Invalid Credentials') {
    //         setAlert(error, 'danger');
    //         clearErrors();
    //     }
    //     //eslint-disabled-next-line
    // }, [error, isAuthenticated, props.history]);


    const toggleForm = () => {
        const container = document.querySelector('.sl-cont .container');
        container.classList.toggle('active');
    };





    const notifyError = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            notifyError("please enter all fields");
            // setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }
    }

    return (

        <>
            {/* <div className="container"> */}
            <ToastContainer />

            {/* <div className="user signinBx">
                    <div className="imgBx">
                        <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" /></div>
                    <div className="formBx"> */}
            <form onSubmit={onSubmit}>
                <h2>Sign In</h2>
                <input type="text" name="email" value={email} onChange={onChange} placeholder="Your Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Your Password" required />
                <input type="submit" value='Login' />

                {/* <input type="text" name="" placeholder="Username" /> */}
                {/* <input type="password" name="" placeholder="Password" /> */}
                {/* <input type="submit" name="" value="Login" /> */}
                <p className="signup" onClick={toggleForm}>
                    Don't have an account ?
                    <Link to="/register" href="#">Sign Up.</Link>
                </p>
            </form>
            {/* </div>
                </div>
            </div> */}
            {/* // <div className='form-container' className={styles.box}> */}

            {/* //     <h2>
        //         Account Login
        //     </h2>
        //     <form onSubmit={onSubmit}>
        //         <div className={styles.inpuBox}>
        //             <label htmlFor="email">Email Address</label>
        //             <input type="text" name="email" value={email} onChange={onChange} placeholder="Your Email" required />
        //         </div>
        //         <div className="form-group" className={styles.inpuBox}>
        //             <label htmlFor="password">Password</label>
        //             <input type="password" name="password" value={password} onChange={onChange} placeholder="Your Password" required />
        //         </div>

        //         <input type="submit" value='Login' className="btn btn-primary btn-block" />
        //     </form>
        // </div> */}
        </>
    )
}
export default Login
