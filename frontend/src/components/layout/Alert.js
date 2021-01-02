import React, { Component } from 'react'
// import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


export class Alert extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        // note that the error object in props has a title attr that can be used to get 
        // details about the error being thrown 
        // so we can use switch case to handle what errors are thrown


        // for errors
        if (prevProps.error !== this.props.error){
            if (this.props.error.msg || (typeof this.props.error.msg === Object)){
                Toast.fire({
                    icon: 'error',
                    title: this.props.error.msg.non_field_errors.join(' ')
                });
            }
        }

        // for messages
        if (prevProps.message !== this.props.message){
            if (this.props.message.loggedIn){
                Toast.fire({
                    icon: 'success',
                    title: this.props.message.loggedIn
                });
            }
            if (this.props.message.registered){
                Toast.fire({
                    icon: 'success',
                    title: this.props.message.registered
                });
            }
        }
    }

    render() {
        return (
            <React.Fragment></React.Fragment>
        )
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

const mapStateToProps = state => ({
    error: state.error,
    message: state.message
});

export default connect(mapStateToProps)(Alert);
