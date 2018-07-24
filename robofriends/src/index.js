import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './container/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { robots } from './robots';

ReactDOM.render(<App robots = { robots }/>, document.getElementById('root'));
registerServiceWorker();
