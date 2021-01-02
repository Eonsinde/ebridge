import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Forms from './register/Forms';
import './styles/forms.css';



class FormsHolder extends Component {
    render() { 
        if (this.props.isAuthenticated)
            return <Redirect to='/' />
        return ( 
            <div className='form-container'>
                <section className="content-wrapper">
                    <div className="form-showcase">
                        <h5>Express, Share your creativity<br/> {' & '} <br/> Connect with the world</h5>
                        <Link to="#" className='policy-link'>Privacy policy and terms of service</Link>
                    </div>
                    <div className="forms">
                        <Forms />
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});
 
export default connect(mapStateToProps)(FormsHolder);