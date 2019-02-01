import './sass/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

ReactDOM.render(
    <Header title="Custom message for component"></Header>,
    document.getElementById('root')
)