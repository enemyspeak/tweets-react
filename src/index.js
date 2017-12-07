import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './twitter.css';

// import App from './App';
import Timeline from './timeline'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timeline />, document.getElementById('root'));

registerServiceWorker();
