import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app/app'
import configureStore from "./src/app/configureStore";
import {Provider} from 'react-redux'

const store = configureStore();
// window.sessionStorage.setItem('isLogin', false);
// window.sessionStorage.setItem('isLogin', true);
// console.log(store.getState());
// console.log(window.sessionStorage);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);
