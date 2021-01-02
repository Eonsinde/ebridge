import React from 'react';
import { Redirect } from 'react-router-dom';


const PageNotFound = () => {
    return (  
        <div className='bg-danger text-white' style={myStyle}>
            <h3>Page Not Found</h3>
            <i className="fas fa-exclamation-triangle"></i>
            <p>Hit the link below to return home</p>
            <Redirect to='/'><i className='fas fa-home'></i> Go Home</Redirect>
        </div>
    );
}


const myStyle = {
    background: '',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
 
export default PageNotFound;