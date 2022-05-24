import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Router} from "react-router-dom";
import {globalHistory} from "./history/useHistory";
import {Table} from "./components/Table";


ReactDOM.render(
    <BrowserRouter>
        <Router history={globalHistory}>
        <Route path='/' component={App} />
        </Router>
    </BrowserRouter>,

    document.getElementById('root')
);
