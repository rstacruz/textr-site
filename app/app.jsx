'use strict';

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import React from 'react';
import App from './components/typograph';


React.render(<App />, document.getElementById('app'));
