import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './styles/support.css';


const SupportUs = () => {
    let [cardName, setCardName] = useState('');
    let [cardNumber, setCardNumber] = useState('');
    let [cardCVC, setCardCVC] = useState('');
    let [cardExpiryDate, setCardExpiryDate] = useState('');
    let [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cardName === '' || cardNumber === '' || cardCVC === '' || cardExpiryDate === ''){
            Toast.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            });
        }else {
            setIsSending(true);
            Toast.fire({
                icon: 'success',
                title: 'Sent Successfully'
            });
            setIsSending(false); 
        }
    }

    return ( 
        <section className="support-container">
            <form className="support-form" onSubmit={handleSubmit}>
                <h3 className='my-4 text-dark'>Support Us</h3>
                <div className="form-group px-3">
                    <label htmlFor="">Name on card</label>
                    <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                </div>
                <div className="form-group px-3">
                    <label htmlFor="">Card Number</label>
                    <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className='form-sect row m-0 p-0'>
                    <div className="form-group col-md-6">
                        <label htmlFor=''>Expiry Date</label>
                        <input type="date" value={cardExpiryDate} onChange={(e) => {setCardExpiryDate(e.target.value)} } />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor=''>CVC <small><sup className='text-danger'>* <i> Card Verification Code</i></sup></small></label>
                        <input type='number' value={cardCVC} onChange={(e) => {setCardCVC(e.target.value)} }  />
                    </div>
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

 
export default SupportUs;