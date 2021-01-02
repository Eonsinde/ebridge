import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import './styles/nav.css';
// import './styles/nav';
// import logo from '../../static/images/dl-with-trans-button.png';

// import Avatar from '@material-ui/core/Avatar';
import default_dp from '../../static/avatar/default_avatar_img2.jpg';




export class Navbar extends React.Component {
    state = {
        clicked: false
    }

    componentDidMount(){
        let navbar = document.querySelector('.nav-container');
        let navToggler = document.querySelector('a.my-navbar-toggler');
        let navContainer = document.querySelector('.my-navbar-container');


        document.addEventListener('scroll', function(){
            if (document.documentElement.scrollTop > 180){
                navbar.classList.add('my-scroll-navbar');
            }else{
                navbar.classList.remove('my-scroll-navbar');
            }
        });

        // window.addEventListener('resize', function(){
        //     if (this.innerWidth >= 768 && navToggler.classList.contains('change-to-close')){
        //         navContainer.classList.remove('small-scr');
        //         navToggler.classList.remove('change-to-close');
        //         document.body.classList.remove('hide-scrollbar');
        //     }
        // });
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    handleShortDisplay = () => {
        const { props } = this;

        if (props.isAuthenticated){
            return  <li className='nav-item dropdown'>
                        <Link to="#" className="nav-link user-img-prof-container">
                            {/* <Avatar src={ (props.user.profile.image === null || !props.user.profile) ? default_dp : props.user.profile.image  }  alt={`${props.user.username}'s avatar`} /> */}
                            <img className='user-profile-img' src={ (props.user.profile.image === null || !props.user.profile) ? default_dp : props.user.profile.image  } alt="avatar's profile" /> 
                            {' '}<span className='user-profile-name'>{props.user.username}</span>{' '}
                            <i className='fas fa-angle-down'></i>
                        </Link>
                        <div className="dropdown-content">
                            <Link to={`/dashboard/u/${props.user.id}`}><i className='fas fa-user mr-2'></i> Dashboard</Link>
                            <Link to='/wish-list'><i className='fas fa-heart mr-2'></i> Wish-List</Link>
                            <Link to='#'><i className='fas fa-comments mr-2'></i> Messages</Link>
                            <Link to='#' onClick={() => props.logout()}><i className="fas fa-sign-out-alt mr-2"></i> Logout</Link>
                        </div>
                    </li> 
        }else{
            return <li className='nav-item signinjoin-link'>
                        <Link to="/forms" className='nav-link'>Login/Register</Link>
                    </li>   
        }
    }


    render(){
        const { props } = this;

        return ( 
            <React.Fragment>
                <nav className={`nav-container ${props.navFixed ? `fixed` : `np`}`}>
                    <div className="container">
                        <Link to="/" className="navbar-brand"><b style={{ color: '#8ab92d' }}>E</b>-Bridge</Link>
                        <Link to="#" onClick={this.handleClick} className={`my-navbar-toggler ${this.state.clicked ? `change-to-close` : ``}`} >
                            <div className='hamburger-line'></div>
                        </Link>
                        <div className={`my-navbar-container ${this.state.clicked ? `small-scr` : ``}`}>
                            <ul className='my-navbar-nav'>
                                <li className='nav-item'>
                                    <Link to="/" className='nav-link'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/explore" className='nav-link'>Explore</Link>
                                </li>
                                <li className='nav-item nav-dropdown'>
                                    <Link to="#" className='nav-link'>Promote <i className="fas fa-angle-down ml-1"></i></Link>
                                    <div className='nav-dropdown-content'>
                                        <Link to="/contact" target='_blank' className='nav-dropdown-link'>Contact Us</Link>
                                        <Link to="/support-us" target='_blank' className='nav-dropdown-link'>Support Us</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/faQs" className='nav-link'>FaQs</Link>
                                </li>
                                {this.handleShortDisplay()}
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

}


const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
})

 
export default connect(mapStateToProps, {logout})(Navbar);