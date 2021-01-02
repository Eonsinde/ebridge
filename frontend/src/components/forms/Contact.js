import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './styles/contact.css';


const Contact = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMsg] = useState('');
    let [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(false);

        if (name === '' || email === '' || subject === '' || message === ''){
            Toast.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            });
        }else{
            setIsSending(true);

            let config = {
                headers : {
                    "Content-Type": 'application/json'
                }
            }

            let data = {full_name: name, email, title: subject, content: message};
            axios.post(`/api/contact`, data, config)
                .then(res => res.data)
                .then(data => {
                    if (data.message === 's'){
                        Toast.fire({
                            icon: 'success',
                            title: 'Your message was delivered'
                        })
                    }else{
                        Toast.fire({
                            icon: 'error',
                            title: 'Your message was not delivered'
                        })
                    }

                    setIsSending(false);
                })
                .catch(e => console.error(e.response.data));
        }
    } 

    return ( 
        <section className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className='my-4 text-dark'>Contact Us</h3>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=''>Subject</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=''>Message</label>
                    <textarea name="" value={message} onChange={(e) => setMsg(e.target.value)} className='contact-textarea' rows='5'  id=""></textarea>
                </div>
                <div className="form-sect mt-4 d-flex align-items-center">
                    <input type="submit" className='form-btn' value="submit" />
                    { 
                        isSending 
                        ?
                        <div className='sending-spinner ml-2'>
                            <i className='fas fa-spinner fa-2x'></i>
                        </div> 
                        :
                        <></>
                    }
                </div>
            </form>
            <p>&copy; 2020 E-BRIDGE. ALL RIGHTS RESERVED</p>
        </section>
    );
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

 
export default Contact;
