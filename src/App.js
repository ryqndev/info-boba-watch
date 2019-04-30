import React from 'react';
import '@material-ui/core';
import './App.css';
import FAQPanel from './components/FAQPanel.js';

function App() {
    return (
        <div className="App">
            <div className="faq-title">
                FAQ
            </div>
            <div className="faq-holder">
                <FAQPanel/>
            </div>
        </div>
    );
}

export default App;
