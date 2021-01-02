import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


import { getFaqs } from '../../actions/faq';
import header_image from '../../static/images/header-bg.jpg';

import './styles/faqs.css';


function Faqs() {
    // const classes = useStyles();

    let questions = [
        {
            id: 1, title: 'what the fuck', content: 'this is awesome and the way it is meant to be played',
        },
        {
            id: 2, title: 'How to get a dog', content: 'this is awesome and the way it is meant to be played',
        },
        {
            id: 3, title: 'How to create a game engine', content: 'this is awesome and the way it is meant to be played',
        }
    ]

    useEffect(() => {
        // let accordions = document.querySelectorAll('.accordion');

        // accordions.forEach(acc => {
        //     acc.addEventListener('click', function(){
        //         handleActiveRemove();

        //         var panel = acc.nextElementSibling;
        //         var icon = acc.lastElementChild;

        //         acc.classList.add('active');
        //         icon.className = 'fas fa-minus';
        //         panel.style.maxHeight = panel.scrollHeight + "px";
        //     });
        // });


    }, []);

    const handleActiveRemove = () => {
        let accordions = document.querySelectorAll('.accordion');

        accordions.forEach(acc => {
                acc.classList.remove('active');

                var panel = acc.nextElementSibling;
                var icon = acc.lastElementChild;

                icon.className = 'fas fa-plus';
                panel.style.maxHeight = null;
        });
    }

    const cardStyles = {
        background: '#8dbe29',
        // border: '1px #8dbe29 solid',
        borderRadius: 'none !important',
        marginBottom: '0 !important',
        cursor: 'pointer'
    }

    const panelStyles = {
        background: ' #04091e',
        border: '1px #04091e solid',
        borderRadius: 'none'
    }

    return (
        <>
            <header className='faq-header'  style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${header_image}) no-repeat center center/cover`, height: '230px'}}>

            </header>
            <div className='faq-title py-4'>
                <div className='container'>
                    <h2 class='text-dark text-center'>Frequently Asked Questions</h2>
                </div>
                <hr style={{ background: '#8abe22', width:'13%', margin: '30px auto 0 auto' }} />
            </div>
            <main className='faq-body'>
                <div className='container'>
                    {
                        questions.map((question, index) => (
                            <Accordion key={question.id}>
                                <div style={cardStyles}>
                                    <Accordion.Toggle  as={Card.Header} eventKey={`${index + 1}`} className="d-flex justify-content-between align-items-center">
                                        <span>{question.title}</span>
                                        <i className="fas fa-angle-down"></i>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={`${index + 1}`}>
                                        <Card.Body style={panelStyles}>{question.content}</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Accordion>
                        ))
                    }
                </div>
            </main>
        </>
    )
}



export default connect(null, {getFaqs})(Faqs);