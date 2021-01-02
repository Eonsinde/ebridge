import React, { Component } from 'react'

export class Images extends Component {
    state = {
        maxCount: 3,
        images: []
    }

    handleDisplay = () => {
        return this.state.images.length === 0 ? 
            <div className='row'>
               <div className='col-md-4'>
                   
               </div>
               <div className='col-md-4'>

               </div>
               <div className='col-md-4'>

               </div>
            </div>
            :
            <div>
                {
                    this.state.images.map((image, i) => 
                        <img key={i} src={image} alt={`img ${i}`} />
                    )
                }
            </div>
    }

    render() {
        return (
            <div className='images-container'>
                
            </div>
        )
    }
}

export default Images;
