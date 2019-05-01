import React from 'react';
import '@material-ui/core';
import './App.css';
import FAQHolder from './components/FAQHolder';

function App() {
    return (
        <div className="App">
            <div className="faq-title">
                FAQ <span> Frequently Asked Questions </span>
            </div>
            <div className="faq-holder">
                <FAQHolder/>
            </div>
        </div>
    );
}

export default App;
