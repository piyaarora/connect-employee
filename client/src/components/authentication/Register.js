import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
// import styles from './Login.module.css'

import Login from './Login';
import { Link } from 'react-router-dom';


const Register = (props) => {

    const toggleForm = () => {
        const container = document.querySelector('.sl-cont .container');
        container.classList.toggle('active');
    };

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         props.history.push('/')
    //     }

    //     if (error === 'User already exists') {
    //         setAlert(error, 'danger');
    //         clearErrors();
    //     }
    //     //eslint-disabled-next-line
    // }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const notifySuccess = (msg) => {
        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const notifyError = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }


    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            notifyError("please enter all fields");
            // setAlert('please enter all fields', 'danger')
        } else if (password !== password2) {
            notifyError("Passwords do not match");
            // setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            })
            console.log('registered')
            notifySuccess("User Registered successfully");
            // setAlert('User Registered successfully', 'success')
        }

    }

    return (
        <>

            {/* gvhjklk */}
            <ToastContainer />

            {/* <div className="container"> */}


            {/* signup */}
            {/* <div className="user signupBx"> */}
            {/* <div className="formBx"> */}
            <form onSubmit={onSubmit}>
                <h2>Create an account</h2>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Full name"
                    required
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"

                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"

                    required
                    minLength="6"
                />
                <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    placeholder="Confirm password"

                    required
                    minLength="6"

                />
                <input
                    type="submit"
                    value="Register"
                />
                <p className="signup" onClick={toggleForm}>
                    Already have an account ?
                                <Link to="/login" href="#">Sign in.</Link>
                </p>
            </form>
            {/* </div> */}
            {/* <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" /></div> */}
            {/* </div> */}
            {/* </div> */}
            {/* sdfghjklkjhg */}
            {/* <h2>
                Account Register
            </h2>
            <ToastContainer /> */}

            {/* <form onSubmit={onSubmit}>
                <div className="form-group" className={styles.inpuBox}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group" className={styles.inpuBox}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group" className={styles.inpuBox}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group" className={styles.inpuBox}>
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        required
                        minLength="6"

                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary btn-block" />
            </form> */}
        </>
    )
}
export default Register
