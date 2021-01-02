import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../../actions/auth';


class Login extends Component {
    state = { 
        username: '',
        password: ''
    }

    handleInput = input => e => {
        this.setState({ [input] : e.target.value });
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    hanldeSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        if (username !== '' && password !== ''){
            this.props.login(this.state);
        }else{
            this.props.Toast.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            })            
        }
    }

    render() { 
        if (this.props.isAuthenticated)
            return <Redirect to='/' /> 
        return ( 
            <form className="login-form" onSubmit={this.hanldeSubmit}>
                <div className='form-sect'>
                    <label htmlFor="">Username</label>
                    <input type="text" onChange={this.handleInput('username')} />
                </div>
                <div className='form-sect'>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={this.handleInput('password')} name="" id="user=pswd" />
                </div>
                <div className="form-sect">
                    <Link to="#" className='form-btn mr-3' onClick={this.hanldeSubmit}>Sign In</Link> or <Link to="#" className='signup-btn' onClick={this.continue}>Sign Up</Link>
                    <div className='mt-4 text-center'>
                        <Link to="#" className='text-black-50 forgot-pswd-link'>Forgot Password</Link>
                        <div className='mt-4'>
                            <Link to="#" className='form-social-link'><i className="fab fa-google mr-2"></i>Sign With Google</Link>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

 
export default connect(mapStateToProps, {login})(Login);