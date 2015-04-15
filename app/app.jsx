'use strict';

import 'normalize.css/normalize.css';
import './app.scss';
import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import React from 'react';
import Typograph from './components/typograph/index';
import Settings from './components/settings/index';


React.render((
  <div className="textr-typograph">
    <Typograph />
    <Settings />
  </div>
), document.getElementById('app'));
