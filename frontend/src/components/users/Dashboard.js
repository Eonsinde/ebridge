import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import ManageProducts from './ManageProducts';
import EditProfile from './EditProfile';
import default_avatar_img from '../../static/avatar/default_avatar_img1.jpg' ;
// import header_image from '../../static/images/another_planet_2-wallpaper-2560x1440.jpg';
// import header_image from '../../static/images/header-bg.jpg';
import './styles/dashboard.css';



function Dashboard ({user}){

    let [steps, setSteps] = useState(0);

    const changeStep = (value) => e => {
        // remove the active class from other sibling links
        document.querySelectorAll('.profile-content-link').forEach(link => link.classList.remove('active'));
        setSteps(value);
        e.target.classList.add('active');
    }

    const handleRender = (SubComp) => { /* subcomp - subcomponent */
        return (
            <>
            {/* <section className='test-header' style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${header_image}) no-repeat center center/cover`, height: '200px'}}>

            </section> */}
            <section className="dashboard-container">
                <div className="container">
                    <div className="profile-container">
                        <div className='left-side'>
                            <div className=''>
                                <div className='avatar-image-container'>
                                    <img className='avatar-image' src={ user.profile.image !== null ? user.profile.image :default_avatar_img } alt="avatar-face" />
                                </div>
                                <div className='p-2 px-3'>
                                    <p className='text-light d-flex align-items-center justify-content-between p-0 m-0' style={{cursor: 'pointer'}} >@{user.username} <i className="fas fa-angle-down"></i></p>
                                </div>
                            </div>
                            <div className=''>
                                <Link to='#' className='side-block'>
                                    <i className="fas fa-envelope side-block-icon"></i>
                                    <div>
                                        <div className='side-block-text'> Messages</div>
                                        <div className='side-block-data-value'>15</div>
                                    </div>
                                </Link>
                                <Link to='#' className='side-block'>
                                    <i className="fas fa-thumbs-up side-block-icon"></i>
                                    <div>
                                        <div className='side-block-text'> Recommendations</div>
                                        <div className='side-block-data-value'>3</div>
                                    </div>
                                </Link>
                                <Link to='#' className='side-block'>
                                    <i className="fas fa-magic side-block-icon"></i> 
                                    <div>
                                        <div className='side-block-text'>Matches</div>
                                        <div className='side-block-data-value'>2</div>
                                    </div>
                                </Link>
                                <Link to='#' className='side-block'>
                                    <i className="fas fa-star side-block-icon"></i>
                                    <div className='side-block-text ml-1'> Favourite</div>
                                </Link>
                            </div>
                        </div>

                        <div className="profile shadow-sm border">
                            <header className='profile-header row m-0'>
                                <div className='col-md-8'>
                                    <h3 className='text-capitalize text-dark'>{user.username}</h3>
                                    <p>{user.email} { user.profile.isVerified ? <span className='text-white bg-success'>#Verified</span> : <Link to='#' className='text-info'>Verify Email</Link>}</p>
                                    <p>Specialization: <span className='bg-danger text-white'>#Graphics Design</span> <span className='text-white bg-primary'>#Fashion Designer</span></p>
                                </div>
                                <div className='col-md-4'>
                                    <Link to="#"><i className="fas fa-heart"></i></Link>
                                    Give a like and Recommendation
                                </div>
                            </header>
                            <main className="profile-content mt-3">
                                <div className='d-flex justify-content-start align-items-center' style={{borderBottom: '1px #ccc solid'}}>
                                    <Link to="#" onClick={ changeStep(0) } className='py-2 px-3 active profile-content-link'>Products</Link>
                                    <Link to="#" onClick={ changeStep(1) } className='py-2 px-3 profile-content-link'>Feedbacks</Link>
                                    <Link to="#" onClick={ changeStep(2) }  className='py-2 px-3 profile-content-link'>Edit Profile</Link>
                                </div>
                                <div className='components-viewport'>
                                    <SubComp user={user} />
                                    {/* {SubComp} */}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }

    // let comp1 = <div>Comp 1</div>
    let comp2 = <div>Comp 2</div>
    let comp3 = <div>Comp 3</div>
    switch (steps){
        case 1:
            return handleRender(comp2);
        case 2:
            return handleRender(EditProfile);
        case 0:
        default:
            return handleRender(ManageProducts);
        
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
