import React, { Component } from 'react';
import ImgUpload from './ImageUpload';


export class ImgUploader extends Component {
    state = {
        selectedFile : null,
        file_name: null
    }

    fileSelectedHandler = e => {
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name);

        this.setState({
            selectedFile: URL.createObjectURL(e.target.files[0]),
            file_name: e.target.files[0].name
        });

        console.log(this);
    }

    handleFileRemove = () => {
        this.setState({
            selectedFile: null
        });
    }

    render() {
        return (
            <form className="p-5" onSubmit={e => e.preventDefault()}>
                {/* <input type='file' name='images' onChange={this.fileSelectedHandler} /> */}
                {
                    // this.state.selectedFile !== null ? <img src={this.state.selectedFile} style={imgStyles} alt={`name:- ${this.state.selectedFile.name}`} /> : <Link to='#' className='text-danger'><i className='fas fa-4x fa-plus-circle'></i></Link>
                    this.state.selectedFile !== null ? <ImgUpload image={this.state.selectedFile} image_name={this.state.file_name} removeImage={this.handleFileRemove} /> : <ImgUpload image={this.state.selectedFile} handleInput={this.fileSelectedHandler} size={4} />
                }
            </form>
        )
    }
}

export default ImgUploader;
