import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../../../actions/content';


import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import ImageUpload from '../../layout/imgUploader/ImageUpload';
import ImageUploader from 'react-images-upload';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


export class UserPurpose extends Component {
    state = {
        picture: []
    }

    continue = e => {
        e.preventDefault();

        const {values} = this.props;

        
        if (values.interests.length === 0 || values.bio === ''){
            this.props.Toast.fire({
                icon: 'error',
                title: 'Select a interest or <br /> make sure to fill your bio'
            });
        }else{
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    onSubmit = e => {
        e.preventDefault();
    }

    onDrop = picture => {
        this.setState({
            picture: [picture]
        });
    }

    componentDidMount(){
        let { categories, getCategories } = this.props;
        
        if (categories.length === 0)
            getCategories();
    }

    render() {
        const { categories, values, handleChange, handleSelectChange, handleImageUpload } = this.props;
        const animatedComponents = makeAnimated();
        const categoryOptions = categories.map(category => ({key:category.id, value: category.id, label: category.name}))
        const customStyles = { /* styles for my select menu */
            option: (provided, state) => ({
              ...provided,
              borderBottom: '1px #ccc solid',
              color: state.isSelected ? 'red' : 'rgb(105, 105, 105)',
              padding: 10,
            }),
            control: () => ({
              // none of react-select's styles are passed to <Control />
              width: 200,
            }),
            singleValue: (provided, state) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
          
              return { ...provided, opacity, transition };
            }
          }

        return (
            <React.Fragment>
                <form className='user-purpose-form' onSubmit={this.onSubmit}>
                    <div className='form-sect'>
                        <label className=''>Profile Image</label>
                        {/* <input type='file' name='image' onChange={handleImageUpload} /> */}
                        {/* <ImageUploader
                            withIcon={true}
                            singleImage={true}
                            buttonText='Select Image'
                            withPreview={true}
                            onChange={handleImageUpload}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        /> */}
                        {/* <input type='file' id="image" onChange={handleImageUpload('image')} /> */}
                        { values.image !== null ? <ImageUpload image={URL.createObjectURL(values.image)} image_name={values.image_name} removeImage={this.props.handleFileRemove} /> : <ImageUpload image={values.image} handleInput={this.props.fileSelectedHandler} size={4} /> }
                        <small className='text-muted d-block text-uppercase mt-2'>
                            <span className='text-info'>Note: </span>this details isn't compulsory
                        </small>
                    </div>
                    <div className='form-sect'>
                        <label htmlFor='bio' className='textarea-label'>Bio</label>
                        <textarea name="" id="bio" value={values.bio} onChange={handleChange('bio')} rows="3"></textarea>
                        <small className='text-muted d-block text-uppercase mt-2'>
                            Give a briefing about your self 
                        </small>
                    </div>
                    <div className='form-sect'>
                            <label htmlFor="interests">Interests</label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                styles={customStyles}
                                defaultValue={values.interests}
                                options={categoryOptions}
                                onChange={values => handleSelectChange('interests', values)}
                            />
                            <small className='text-muted d-block text-uppercase mt-2'>
                                We use your interests as selected to prioritize the contents you see
                            </small>
                        </div>
                </form>
                <div className="form-sect">
                    <Link to='#' className='form-btn-2 mr-3 prev-btn' onClick={this.back}>Back</Link>
                    <Link to="#" className='form-btn continue-btn' onClick={this.continue}>Continue</Link> 
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    categories: state.content.categories
});


export default connect(mapStateToProps, { getCategories })(UserPurpose);
