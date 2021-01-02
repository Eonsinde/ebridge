import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const RouteControl = ({ component: Component, navFixed, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => {
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
 
export default RouteControl;

