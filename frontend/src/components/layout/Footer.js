import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';
import logo from '../../static/images/dl-with-trans-button.png';



const Footer = () => {
    return ( 
        <footer className='main-footer'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 text-md-left text-sm-left text-center mb-md-0 mb-sm-0 mb-4">
                        <h6 className='mb-3'>Purpose</h6>
                        <p className='text-white-50'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Atque consequuntur laudantium eveniet ex sapiente maiores voluptatem
                        </p>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center mb-md-0 mb-sm-0 mb-4">
                        <h6 className='mb-3'>Newsletter</h6>
                        <p className='text-white-50'>Stay updated with our latest</p>
                        <form className='newsletter-form'>
                            <div>
                                <input type="text" className='newsletter-input' placeholder="Enter Email"/>
                                <button className='newsletter-sub-btn'><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </form>
                        <small><i>Submitting...</i></small>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6 className='mb-3'>Follow Us</h6>
                        <p className='text-white-50'>Let us be social</p>
                        <div className="social-icons">
                            <Link to="#" className="social-icon"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#" className="social-icon"><i className="fab fa-instagram"></i></Link>
                            <Link to="#" className='social-icon'><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className='social-icon'><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='demarcating-line' />
            <div className="footer-bottom col-12 text-white p-3">
                <p className='text-center m-0'>&copy; 2020 E-bridge. All Rights Reserved</p>
            </div>
        </footer>
    );
}
 
export default Footer;