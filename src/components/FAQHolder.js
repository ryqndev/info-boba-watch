import React, { Component } from 'react';
import questions from './FAQContent.js';
import FAQPanel from './FAQPanel.js';
import './styles/FAQHolder.css';


export class FAQHolder extends Component {
    state = {
        content: questions.map((q, i) => <FAQPanel key={i} title={q.title} desc={q.desc} />)
    }
    componentDidMount = () => {
        let images = document.getElementsByClassName("image");
        Array.from(images).forEach( e => {
            e.addEventListener('click', this.enlarge);
        });
    }
    enlarge = (e) => {
        let img = e.target,
            style = img.currentStyle || window.getComputedStyle(img, false),
            bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        
        let fullscreenImage = document.createElement('div');
        fullscreenImage.className = "fullscreen-image";
        fullscreenImage.style.backgroundImage = `url('${bi}')`;
        fullscreenImage.onclick = () => {
            document.body.removeChild(fullscreenImage);
        }
        document.body.appendChild(fullscreenImage);
    };
    render() {
        return (
        <div>
            {this.state.content}
        </div>
        )
    }
}

export default FAQHolder;
