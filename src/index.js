import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header, { Description, Drop, Btn, } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root1'));
ReactDOM.render(<Description />, document.getElementById('root2'));
ReactDOM.render(<Drop />, document.getElementById('root3'));
ReactDOM.render(<Btn />, document.getElementById('root4'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
