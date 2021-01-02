import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from '@material-ui/core/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';

import './styles/manageproducts.css';


function ManageProducts(){

    let [productName, setProductName] = useState('');
    let [priceTag, setPrice] = useState(0);
    let [description, setDescription] = useState('');
    let [currency, setCurrency] = useState('');

    let [modalOpen, setModalOpen] = useState(false);
    let [products, setProducts] = useState([
        {id:1, name: 'fish'},
        {id:2, name: 'carmel'},
        {id:3, name: 'suazanna'},
        {id:4, name: 'behemoth'},
        {id:5, name: 'satire'},
        {id:6, name: 'mexicana'},
        {id:7, name: 'jovia_'},
        {id:8, name: 'uventus'},
        {id:9, name: 'torrent'},
        {id:10, name: 'ventir'}
    ]);

    // const addProduct = () => {
    //     // send a request to the server with the new content/product details
    //     console.log("Adding new content");
    // }

    const btnStyles =  {
        background: '#8abe22',
        padding: '10px 12px',
        border: 'none',
    }

    const inputStyles = {
        width: '100%'
    }

    const formStyles = {
        marginBottom: '50px'
    }

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
    ];

    return (
        <div className='manage-products-container'>
            
            <header className='manage-products-header'>
                {/* <Link to='#' className='remove-products-btn'><i className='fas fa-trash'></i></Link> */}
                <h4>Manage Your Products</h4>
                <div>
                    <Link to="#" onClick={() => setModalOpen(true)} className='add-product-btn'><i className='fas fa-plus-circle'></i></Link>
                </div>
                <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h4 className='text-dark'>Content Creation Form</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form style={formStyles}>
                            <MuiThemeProvider>
                                <>
                                <TextField
                                    style={inputStyles}
                                    hintText='Enter ad or content name'
                                    floatingLabelText='Content Name'
                                    onChange={e => setProductName(e.target.value)}
                                    defaultValue={productName}
                                />
                                <TextField
                                    style={inputStyles}
                                    hintText='Enter price tag'
                                    floatingLabelText='Price Tag'
                                    onChange={e => setPrice(e.target.value)}
                                />
                                <TextField
                                    style={inputStyles}
                                    hintText='Enter product description'
                                    floatingLabelText='Description'
                                    onChange={e => setDescription(e.target.value)}
                                    defaultValue={description}
                                    id="filled-multiline-flexible"
                                    multiline
                                    rowsMax={4}
                                    variant="filled"
                                />

                                <TextField
                                    // style={inputStyles}
                                    label="Multiline"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                />
                                {/* <TextField
                                    select
                                    label="Category"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    defaultValue='select a category'
                                    variant="outlined"
                                >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                </TextField> */}
                                
                                </>
                            </MuiThemeProvider>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className='text-center'>
                        {/* <RaisedButton 
                            label={'submit'}
                            primary={true}
                            buttonStyle={{margin: 10}}
                        /> */}
                        <button style={btnStyles} type="submit" onClick={()=>{}}>Create +</button>
                    </Modal.Footer>
                </Modal>
            </header>

            <section className='manage-products-content'> 
                {
                    products.map(ads => 
                        <div key={ads.id} className="my-card">
                            <div className="my-card-img-top display-cover">
                                <img src="" alt="product" />
                                <div className="display-content">
                                    <small className='text-capitalize'>{ads.name}</small>
                                    <div className='mt-2'>
                                        <Link to="#"><i className='fas fa-edit mr-3'></i></Link>
                                        <Link to="#"><i className='fas fa-trash'></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    )
                }
            </section>
        </div>
    )
}


export default ManageProducts
