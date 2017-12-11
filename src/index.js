import React from 'react';
import ReactDOM from 'react-dom';

import './foundation-icons.css';
import './twitter.css';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
