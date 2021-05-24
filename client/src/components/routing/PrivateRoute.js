import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

//for anything to pass/any extra props, we use rest operator
const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    return (
        <Route {...rest} render={props => !isAuthenticated && !loading ? (
            <Redirect to='/login' />
        ) : (
            <Component {...props} />
        )} />


    )
}
export default PrivateRoute
