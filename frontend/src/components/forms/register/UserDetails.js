import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();

        const {values} = this.props;

        if (values.first_name === '' || values.last_name === "" || values.username === '' || values.password === '' || values.conf_pswd === ''){
            this.props.Toast.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            });
        }else if(values.password !== values.conf_pswd){
            this.props.Toast.fire({
                icon: 'error',
                title: 'Passwords do not match'
            });
        }else{
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <form className="signup-form">
                <div className='form-sect row m-0 p-0'>
                    <div className="form-group col-md-6 px-1">
                        <label htmlFor="">First Name</label>
                        <input type="text" value={values.first_name} onChange={handleChange("first_name")} />
                    </div>
                    <div className='form-group col-md-6 px-1'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={values.last_name} onChange={handleChange('last_name')} />
                    </div>
                </div>                
                <div className="form-sect px-1">
                    <label htmlFor="">Username</label>
                    <input type="text" value={values.username} onChange={handleChange('username')} />
                </div>
                <div className="form-sect px-1">
                    <label htmlFor="">Password</label>
                    <input type="password" value={values.password} name="" id="actual-password" onChange={handleChange('password')} />
                </div>
                <div className="form-sect px-1">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" value={values.conf_pswd} id="conf-password" onChange={handleChange('conf_pswd')} />
                </div>
                <div className="form-sect px-1">
                    <Link to="#" className='form-btn mr-3 continue-btn' onClick={this.continue}>Continue</Link> or <Link to="#" onClick={this.back} className='login-btn'>Sign in</Link>
                </div>
            </form>
        )
    }
}

export default UserDetails
