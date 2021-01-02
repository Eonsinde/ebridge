import React, { Component } from 'react';
import header_image from '../../static/images/explore-page-image.png';

import './styles/explore.css';


class Explore extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <header className='explore-header'  style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${header_image}) fixed no-repeat center center/cover`, height: '500px'}}>
                <div className='explore-header-content'>
                    <h1 className=''>
                        Surf Through
                        <div>
                            <hr className='explore_header__line' />
                            <i className='fas fa-star'></i>
                            <hr className='explore_header__line' />
                        </div>
                        Exciting Contents
                    </h1>
                    <p class='text-muted text-uppercase'>Happy Exploration</p>
                </div>
            </header>

            <main className='explore-body'>
                <div className='container'>
                    <header className=''></header>
                </div>
            </main>
            </>
        );
    }
}
 
export default Explore;