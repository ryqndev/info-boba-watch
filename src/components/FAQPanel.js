import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './styles/FAQPanel.css';

export class FAQPanel extends Component {
    state = {
        open: false
    }
    toggle = () => {
        this.setState(state => ({ open: !state.open }));
    }
    render() {
        return (
            <div className="thaman-color">
                <div className="faq-question--title" onClick={this.toggle}>
                    {this.props.title}
                    <div className="expand-icon">
                        {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                    </div>
                </div>
                <Collapse in={this.state.open} >
                    <div className="faq-question--description" dangerouslySetInnerHTML={{__html: this.props.desc}}>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default FAQPanel
