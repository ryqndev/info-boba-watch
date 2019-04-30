import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme.js';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from '@material-ui/core';

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
