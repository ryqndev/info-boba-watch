import React, { Component } from 'react';
import questions from './FAQContent.js';
import FAQPanel from './FAQPanel.js';
import './styles/FAQHolder.css';


export class FAQHolder extends Component {
    display = () => {
        return questions.map((q, i) => <FAQPanel key={i} title={q.title} desc={q.desc} />);
    }
    render() {
        return (
        <div>
            {this.display()}
        </div>
        )
    }
}

export default FAQHolder;
