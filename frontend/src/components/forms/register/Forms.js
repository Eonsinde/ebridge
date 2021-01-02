import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Login from './Login';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import UserPurpose from './UserPurpose';


class Forms extends Component {
    state = { 
        step: 0,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        image: null,
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

    // methods for steps 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step+1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    handleImageUpload = field => e => {
        this.setState({ [field]: e.target.files[0] });
    }

    fileSelectedHandler = e => {
        this.setState({
            // image: URL.createObjectURL(e.target.files[0])/,
            image: e.target.files[0],
            image_name: e.target.files[0].name
        });
        
    }

    handleFileRemove = () => {
        this.setState({
            image: null,
            image_name: ''
        });
    }

    handleSelectChange = (input, values) => {
        this.setState({ [input]: values })
    }

    render() { 
        const { step, first_name, last_name, username, image, image_name, email, password, conf_pswd, phone_no, state, address, city, bio, interests } = this.state;
        const values = { first_name, last_name, username, image, image_name, email, password, conf_pswd, phone_no, state, address, city, bio, interests };
        switch (step){
            case 1:
                return (<UserDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    Toast={Toast}
                />);
            case 2:
                return (<PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    Toast={Toast}
                />);
            case 3:
                return (<UserPurpose 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    handleSelectChange={this.handleSelectChange}
                    handleImageUpload={this.handleImageUpload}
                    fileSelectedHandler={this.fileSelectedHandler}
                    handleFileRemove={this.handleFileRemove}
                    values={values}
                    Toast={Toast}
                />);
            case 4:
                return (<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />);
            case 0:
            default:
                return <Login
                    nextStep={this.nextStep}
                    Toast={Toast}
                />
        }
    }
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
  
 
export default Forms;