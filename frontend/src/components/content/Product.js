import React from 'react';
import { Link } from 'react-router-dom';
import './styles/product.css';
import img_pro from '../../static/images/canon_ae_2-wallpaper-3840x2160.jpg';



class Product extends React.Component {
    render() { 
        let { name } = this.props;
        return ( 
            <div className="my-card">
                <div className="my-card-img-top display-cover">
                    <img src={img_pro} alt="product " />
                    <div className="display-content">
                        <Link to="#" title='Give Link like'><i className='fas fa-heart'></i></Link>
                        <Link to="#" title='Add to wish list'><i className='fas fa-plus'></i></Link>
                    </div>
                </div>
                <div className="my-card-body d-flex align-items-center">
                    <img src="" alt="content_creator" />
                    <Link to='#' className='mx-2'>{name}</Link>
                </div>
            </div>
        );
    }
}
 
export default Product;


