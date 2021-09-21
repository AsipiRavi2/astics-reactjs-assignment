import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, ...rest}) => {
    const username = useSelector(state=>state.auth.user)
    console.log(username)
    return (
        <Route {...rest} render={props => (
            username ?
                <Redirect to="/inventory"/>
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;