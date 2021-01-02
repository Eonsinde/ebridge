import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './imageupload.css';

const ImgUpload = (props) => {
    return ( 
        <React.Fragment>
           {
                props.image !== null
                ?
                <div className='img-upload-main-container'>
                    <div className='image-preview-container'>
                        <Link to='#' className='remove-img-btn' onClick={() => props.removeImage()}><i className='fas fa-times'></i></Link>
                        <img className='image-preview' src={props.image} alt={''} />
                    </div> 
                    <div className='text-center'>
                        {props.image_name ? <small className='text-dark font-italic'>{props.image_name}</small> : ''}
                    </div>
                </div>
                : 
                <div className='image-input-container'>
                    {/* <Link to='#' className='remove-img-btn' onClick={() => props.removeImage()}><i className='fas fa-minus'></i></Link> */}
                    <input type='file' name='image' className='image-input' onChange={props.handleInput} />
                    <Link to='#' className='image-input-btn'><i className={`fas fa-${props.size ? props.size : 4 }x fa-plus-circle`}></i></Link>
                </div>  
           }
        </React.Fragment>
    );
}
 
ImgUpload.propTypes = {
    image: PropTypes.string,
    image_name: PropTypes.string,
    size: PropTypes.number
}

export default ImgUpload;