import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, getCategories } from '../../actions/content';
import './styles/home.css';

import Product from '../content/Product';

import p1 from '../../static/images/ads_images/p1.jpg';
import p2 from '../../static/images/ads_images/p2.jpg';
import p3 from '../../static/images/ads_images/p3.jpg';
import p4 from '../../static/images/ads_images/p4.jpg';
import p5 from '../../static/images/ads_images/p5.jpg';
import p6 from '../../static/images/ads_images/p6.jpg';


class Home extends Component {
    componentDidMount(){
        const { getProducts, getCategories } = this.props;
        getProducts();
        getCategories();
    }

    state = {
        products: [
            {id:1, name: '3D Helmet Design', img_url: p1},
            {id:2, name: '2D Vinyl Design', img_url: p2},
            {id:3, name: 'Embosed Logo Design', img_url: p3},
            {id:4, name: 'Embosed Logo Design', img_url: p4},
            {id:5, name: 'Creative Poster Design', img_url: p5},
            {id:6, name: '3D Helmet Design', img_url: p6}
        ]
    }

    render() { 
        return ( 
            <React.Fragment>
                <section className="banner-area">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                            <div className="banner-content">
                                <h5 className="text-uppercase">Now you can watch the Talent</h5>
                                <h1>
                                    Let’s Explore Idea!
                                </h1>
                                <Link to="#" className="text-uppercase">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ads-showcase section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content col-lg-10">
                                <div className="title text-center">
                                    <h1 className="mb-10">Some of our Featured Contents</h1>
                                    <p>most popular and recently updated items</p>
                                </div>
                            </div>
                        </div>
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".corporate" className="">Vector</li>
                                <li data-filter=".personal">Raster</li>
                                <li data-filter=".agency">UI/UX</li>
                                <li data-filter=".portal">Printing</li>
                            </ul>
                        </div>
                        <div className="filters-content">
                            <div className="row grid" style={{ position: 'relative' }}>
                                
                                {
                                    this.state.products.map(product => (
                                        <div key={product.id} className="single-ad col-sm-4 all corporate">
                                            <div className="item">
                                                <img src={product.img_url} alt='ad-preview' />
                                                <div className="p-inner">
                                                    <h4>{product.name}</h4>
                                                    <div className="cat">Corporate</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> 
                        </div>
                    </div>
                </section>

                <section className="service-area section-gap relative">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-10">
                                <div className="title text-center">
                                    <h1 className="mb-10 text-white">What exactly do we do</h1>
                                    <p>offer you a platform to express yourself..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-area pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mb-md-0 mb-sm-3 mb-3">
                                <div className="single-service">
                                    <div className='single-service-icon'>
                                        <i className="fab fa-accusoft fa-4x"></i>
                                    </div>
                                    <h4>Express Creativity</h4>
                                    <p>
                                        Create contents and upload your favourite artworks, designs, and other skits
                                        you are so talented with and let us help you do the sharing with many others
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-md-0 mb-sm-3 mb-3">
                                <div className="single-service">
                                    <div className='single-service-icon'>
                                        <i className="fas fa-glass-cheers fa-4x"></i>
                                    </div>
                                    <h4>Connect with People</h4>
                                    <p>
                                        Reach out to other talents out there and do a collabo - with our chatting platform, find people, 
                                        hit them up, set up a collab content and have them join you work on something
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-service">
                                    <div className='single-service-icon'>
                                        <i className="fas fa-money-bill-wave fa-4x"></i>
                                    </div>
                                    <h4>Market Your Content</h4>
                                    <p>
                                        Do you seek to make profit from your contents? We have you covered. Make contents,
                                        bind prices to them and get the content published to the marketplace soonest
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="review-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-10">
                                <div className="title text-center">
                                    <h1 className="mb-10">Reviews</h1>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-review text-md-left text-sm-left text-center">
                                    <img src="img/c1.png" alt=""/>
                                    <div className="title d-flex flex-row align-items-center justify-content-md-start justify-content-sm-start justify-content-center">
                                        <Link to="#"><h4 className='m-0'>Fannie Rowe</h4></Link>
                                        <div className="star ml-4">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <p>
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                    </p>
                                </div>
                                <div className="single-review text-md-left text-sm-left text-center">
                                    <img src="img/c3.png" alt=""/>
                                    <div className="title d-flex flex-row align-items-center justify-content-md-start justify-content-sm-start justify-content-center">
                                        <Link to="#"><h4 className='m-0'>Lillie Summers</h4></Link>
                                        <div className="star ml-4">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <p>
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-review text-md-left text-sm-left text-center">
                                    <img src="img/c2.png" alt=""/>
                                    <div className="title d-flex flex-row align-items-center justify-content-md-start justify-content-sm-start justify-content-center">
                                        <Link to="#"><h4 className='m-0'>Hulda Sutton</h4></Link>
                                        <div className="star ml-4">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-starchecked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <p>
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                    </p>
                                </div>
                                <div className="single-review text-md-left text-sm-left text-center">
                                    <img src="img/c4.png" alt=""/>
                                    <div className="title d-flex flex-row align-items-center justify-content-md-start justify-content-sm-start justify-content-center">
                                        <Link to="#"><h4 className='m-0'>Ruth Burns</h4></Link>
                                        <div className="star ml-4">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <p>
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = state => ({
    products: state.content.products,
    categories: state.content.categories
});

export default connect(mapStateToProps, {getProducts, getCategories})(Home);