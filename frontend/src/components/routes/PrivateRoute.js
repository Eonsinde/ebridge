import React from 'react';

import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer';


const PrivateRoute = ({ component: Component, navFixed, isAuthenticated, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => {
                if (!isAuthenticated)
                    return <Redirect to='/' />
                return (
                    <React.Fragment>
                        <Navbar navFixed={navFixed} />
                        <Component {...props} />
                        <Footer />
                    </React.Fragment>
                );
            }}
        />
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute);