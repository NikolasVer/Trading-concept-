import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store, { history } from "./store";
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';


import './initOpenFin';

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    target
);

registerServiceWorker();
