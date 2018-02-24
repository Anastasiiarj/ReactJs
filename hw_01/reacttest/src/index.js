import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from 'redux';
//import './index.css';
import LinkRouter from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LinkRouter />,
    document.getElementById('root')
)
registerServiceWorker();
