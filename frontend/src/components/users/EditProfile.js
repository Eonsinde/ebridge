import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateProfile }  from '../../actions/auth';
import Swal from 'sweetalert2';

export class EditProfile extends Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        image: '',
        image_name: '',
        password: '',
        conf_pswd: '',
        phone_no: '',
        city: '',
        state: '',
        address: '',
        interests: [],
        bio: ''
    }

    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }
    
    handleFileChange = (input) => e => {
        this.setState({ 
            [input] : e.target.files[0], 
            image_name: e.target.files[0].name
        });
    }

    handleSubmit = e => {
        let { first_name, last_name, username, email, image_name, phone_no, city, state, address, interests, bio, password, conf_pswd } = this.state;

        if (first_name === '' && last_name === '' && username === '' && email === '' 
        && image_name === '' && phone_no === '' && city === '' && state === '' && address === '' 
        && bio === '' && (interests.length === 0) && password === ''){
            Toast.fire({
                icon: 'error',
                title: 'Please fill in a field',
            })
        }else if (password !== '' && (password !== conf_pswd)){
            Toast.fire({
                icon: 'error',
                title: 'Passwords don\'t match'
            });
        }else if(email !== '' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            Toast.fire({
                icon: 'error',
                title: 'Enter a valid email address'
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Update Successful'
            });
        }
    }

    render() {

        const { handleChange, handleFileChange } = this;
        const { user } = this.props;

        return (
            <section className='p-3' style={mainSectionStyle}>
                <div className='manage-products-header'>
                    <h4 className='text-capitalize'>Edit your profile</h4>
                    <div>
                        <i className='fas fa-edit' style={{fontSize: '1.4rem'}}></i>
                    </div>
                </div>
                <form className='mt-2' onSubmit={ e => e.preventDefault() }>
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>First Name</label>
                            <input type="text" placeholder={user.first_name} value={this.state.first_name} onChange={handleChange("first_name")} />
                        </div>
                        <div className='form-group col-md-6 px-1'>
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Last Name</label>
                            <input type="text" placeholder={user.last_name} value={this.state.last_name} onChange={handleChange('last_name')} />
                        </div>
                    </div>                
                    
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Username</label>
                            <input type="text" placeholder={user.username} value={this.state.username} onChange={handleChange('username')} />
                        </div>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Email</label>
                            <input type="email" placeholder={user.email} value={this.state.email} onChange={handleChange('email')} />
                        </div>
                    </div>
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Password</label>
                            <input type="password" placeholder='Enter a new password' value={this.state.password} name="" id="actual-password" onChange={handleChange('password')} />
                        </div>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Confirm Password</label>
                            <input type="password" placeholder='Re-type your password   ' name="" value={this.state.conf_pswd} id="conf-password" onChange={handleChange('conf_pswd')} />
                        </div>
                    </div>
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Image</label>
                            <input type="file" value={this.state.image} onChange={handleFileChange('image')} />
                        </div>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={{ fontSize: '1rem', marginBottom: '8px'}} className='text-capitalize'>Bio</label>
                            <input type="text" value={this.state.bio} onChange={handleChange('bio')} />
                        </div>
                    </div>
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Phone</label>
                            <input type="text" placeholder={user.profile.phone_no} value={this.state.phone_no} onChange={handleChange('phone_no')} />
                        </div>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>City</label>
                            <input type="text" placeholder={user.profile.city} value={this.state.city} onChange={handleChange('city')} />
                        </div>
                    </div>
                    <div className='form-sect row m-0 p-0'>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>State</label>
                            <input type="text" placeholder={user.profile.state} value={this.state.state} onChange={handleChange('state')} />
                        </div>
                        <div className="form-group col-md-6 px-1">
                            <label htmlFor="" style={labelStyle} className='text-capitalize'>Address</label>
                            <input type="text" placeholder={user.profile.address} value={this.state.address} onChange={handleChange('address')} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <button type="submit" style={btnStyle} onClick={this.handleSubmit} >Submit Changes</button>                   
                    </div>
                </form>
            </section>
        )
    }
}

const labelStyle = {
    fontSize: '1rem',
    marginBottom: '2px'
}

const mainSectionStyle = {
    border: '1px rgb(238, 238, 238) solid',
    background: 'rgb(254, 254, 254)'
}

const btnStyle = {
    border: '1px #ccc solid',
    color: 'a5a5a5',
    background: 'rgb(221,221,221)',
    padding: '10px'
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export default connect(null, {updateProfile})(EditProfile);
