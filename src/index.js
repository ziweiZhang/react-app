import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './no-css-todo-list/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
