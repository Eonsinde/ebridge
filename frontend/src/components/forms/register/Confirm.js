import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';


export class Confirm extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleSubmit = () => {
        const { values, register } = this.props;
        register(values);
    }

    render() {
        const { values } = this.props;

        return (
            <React.Fragment>
                <section className='confirm-section'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <b>First Name</b>
                            <p className='text-capitalize text-dark'>{values.first_name}</p>
                        </div>
                        <div className='col-md-6'>
                            <b>Last Name</b>
                            <p className='text-capitalize text-dark'>{values.last_name}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <b>Username</b>
                            <p className='text-capitalize text-dark'>{values.username}</p>
                        </div>
                        <div className='col-md-6'>
                            <b>Password</b>
                            <p className='text-capitalize text-dark'>{values.password}</p>
                        </div>
                    </div>
                    <div>
                        <b>Image</b>
                        <p className='text-dark'>
                            {
                                values.image !== null ? values.image_name : "No Image Selected"
                            }
                        </p>
                    </div>
                    <div>
                        <b>Email</b>
                        <p className='text-dark'>{values.email}</p>
                    </div>
                    <div>
                        <b>Phone</b>
                        <p className='text-dark'>{values.phone_no}</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <b>City</b>
                            <p className='text-capitalize text-dark'>{values.city}</p>
                        </div>
                        <div className='col-md-6'>
                            <b>State</b>
                            <p className='text-capitalize text-dark'>{values.state}</p>
                        </div>
                    </div>
                    <div>
                        <b>Address</b>
                        <p className='text-capitalize text-dark'>{values.address}</p>
                    </div>
                    <div>
                        <b>Interests</b>
                        <ul className='text-dark'>
                            { values.interests.map((interest, index) => <li className='text-capitalize' key={index}>{interest.label}</li>) }
                        </ul>
                    </div>
                    <div>
                        <b>Bio</b>
                        <p className='text-capitalize text-dark'>{values.bio}</p>
                    </div>
                   
                </section>
                <div className='form-sect'>
                    <Link to='#' className='form-btn-2 mr-3 continue-btn' onClick={this.back}>Back</Link>
                    <Link to='#' onClick={this.handleSubmit} className='form-btn'>Submit</Link>
                </div>
            </React.Fragment>
        )
    }
}


export default connect(null, {register})(Confirm);
