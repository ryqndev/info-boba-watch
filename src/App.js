import React from 'react';
import '@material-ui/core';
import './App.css';
import FAQHolder from './components/FAQHolder';
import {Typography} from '@material-ui/core';

function App() {
    return (
        <div className="App">
            <div className="faq-title--holder" onClick={() => {window.location = 'https://boba.watch/'} }>
                <div className="faq-title--logo"></div>
                <Typography variant="h1">boba watch</Typography>
            </div>
            <div className="faq-section--label">
                FAQ <span> Frequently Asked Questions </span>
            </div>
            <div className="faq-holder">
                <FAQHolder/>
            </div>
        </div>
    );
}

export default App;
