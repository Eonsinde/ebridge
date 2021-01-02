import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {getWishList, removeFromWishList} from '../../actions/wishlist';

import './styles/wishlist.css';
import header_image from '../../static/images/header-bg.jpg';


class Wishlist extends Component {
    componentDidMount(){
        this.props.getWishList();
    }

    handleRemove = productID => e => {
        console.log("Event object:", e.target);
        console.log("Product ID:", productID);

        this.props.removeFromWishList(productID);

        // invoke the clearProduct action from 
    }

    render() {
        let productList = [
            {id: 1, name:'hairy_painting', price:0, tags: 'art, design'},
            {id: 2, name:'doodle_sculpt', price:'$12.0', tags: 'art, design'},
            {id: 3, name:'hairy_painting', price:0, tags: 'art, design'},
            {id: 4, name:'hairy_painting', price:0, tags: 'art, design'},
            {id: 5, name:'hairy_painting', price:0, tags: 'art, design'},
            {id: 6, name:'hairy_painting', price:0, tags: 'art, design'},
        ]

        return (
            <>
                <header className='wishlist-header'  style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${header_image}) no-repeat center center/cover`, height: '230px'}}>

                </header>
                <div className='wishlist-title py-4'>
                    <div className='container'>
                        <h2 class='text-dark text-center'>Your WISH-LIST</h2>
                    </div>
                    <hr style={{ background: '#8abe22', width:'13%', margin: '30px auto 0 auto' }} />
                </div>
                <main className='wishlist-body'>
                    <div className='container'>
                        {
                            productList.length === 0 
                            ?
                                <div className='empty-wishlist p-5'>
                                    <div className='empty-wishlist-content'>
                                        <i className='fas fa-box-open'></i>
                                        <h4 className='mt-3'>Empty Box</h4>
                                        <p className='text-muted'>start exploring; <Link to='/explore'>commencer</Link></p>
                                    </div>
                                </div>
                            :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Tags</th>
                                            <th><i className='fas fa-trash-alt'></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((product, index) => 
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.tags}</td>
                                                <td><Link to="#" className='remove-item-btn' onClick={this.handleRemove(product.id)}>&times;</Link></td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                        }
                    </div>
                </main>
            </>
        )
    }
}

const mapStateToProps = state => ({
    wishlist: state.wishlist.wishlist
})

export default connect(mapStateToProps, {getWishList, removeFromWishList})(Wishlist);
