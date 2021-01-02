import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();

        const { values } = this.props;

        if (values.email === '' || values.phone_no === "" || values.city === '' || values.state === '' || values.address === ''){
            this.props.Toast.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            });
        }else if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
            this.props.Toast.fire({
                icon: 'error',
                title: 'Enter a valid email address'
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
            <form className='personal-details-form'>
                <div className="form-sect">
                    <label htmlFor="">Email</label>
                    <input type="email" value={values.email} onChange={handleChange('email')} />
                </div>
                <div className="form-sect">
                    <label htmlFor="">Phone</label>
                    <input type="text" value={values.phone_no} onChange={handleChange('phone_no')} />
                </div>
                <div className="form-sect">
                    <label htmlFor="">City</label>
                    <input type="text" value={values.city} onChange={handleChange('city')} />
                </div>
                <div className="form-sect">
                    <label htmlFor="">State</label>
                    <input type="text" value={values.state} onChange={handleChange('state')} />
                </div>
                <div className="form-sect">
                    <label htmlFor="">Address</label>
                    <input type="text" value={values.address} onChange={handleChange('address')} />
                </div>
                <div className="form-sect">
                    <Link to='#' className='form-btn-2 mr-3 prev-btn' onClick={this.back}>Back</Link>
                    <Link to="#" className='form-btn continue-btn' onClick={this.continue}>Continue</Link> 
                </div>
            </form>
        )
    }
}

export default PersonalDetails
