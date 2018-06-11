import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer.js'

ReactDOM.render((
<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>
), document.getElementById('root'));

registerServiceWorker();
