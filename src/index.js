import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    // in this space, we choose the parent element and insert its location.
    <BrowserRouter>
    {/* we are giving the app an ability to choose which component 
    AND it helps us now to go back and forth on the broswer
    and it will remember which links you had clicked on the single page */}
        <App />
    </BrowserRouter>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
