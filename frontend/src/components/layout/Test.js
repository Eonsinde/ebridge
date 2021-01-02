import React, { Component } from "react";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';

import { Lines } from 'react-preloaders';
import TopBarProgress from "react-topbar-progress-indicator";


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// const useStyles = makeStyles((theme) => ({
//         paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//         },
// }));




TopBarProgress.config({
    barColors: {
        "0": "#aaa",
        "1.0": "#fff"
    },
    shadowBlur: 5
});


export default function (){
    let [content, setContent] = React.useState([]);
    let [isLoading, setIsLoading] = React.useState(true);
    let [modalOpen, setModalOpen] = React.useState(false);

    // const classes = useStyles();


    React.useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                setContent(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));

    }, []);

    const handleOpen = () => {
        setModalOpen(true);
    };
    
    const handleClose = () => {
        setModalOpen(false);
    };

    const body = (
        <div style={{top: '50', left: '50'}}  className={'classes.paper'}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        </div>
    )

    return (
        <div className="py-5">
            <div className='container'>
                <header className='test-header'>
                    <h2>Breaking Bad API</h2>
                </header>
                <main className='test-body row'>
                    {
                        // this.state.isLoading 
                        // ? 
                        // // <>FUCK</>
                        // <TopBarProgress />
                        // // <Lines color={'#8ab92d'} />
                        // :
                        <>
                            {content.map(item => 
                                <div className='col-md-4' key={item.id}>
                                    <div className="card text-left">
                                        <img className="card-img-top" src={item.img} alt="not found" />
                                        <div className="card-body">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-text">
                                                {item.occupation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button type="button" onClick={handleOpen}>
                                Open Modal
                            </button>
                            <Modal
                                open={modalOpen}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </>
                    }
                </main>
            </div>
        </div>
    );
}


