'use strict';

import './_settings.scss';
import React from 'react';
import {locale, nextLocale} from '../transformator/index';
import plugins from '../transformator/plugins';

const localesDict = {
  'en-us': 'American Engilsh',
  'ru': 'Русский'
};

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = { locale: locale() }
  }

  toggleLocale() {
    this.setState({ locale: nextLocale()});
  }

  render() {
    let locale = localesDict[this.state.locale];
    return (
      <div className="textr-settings">
        <div className="container">
          <div className="locale" onClick={this.toggleLocale.bind(this)}>
            {locale}
          </div>
          {
            plugins.map(plugin => {
              return (
                <span
                  className="textr-plugin"
                  alt={plugin.description}
                >
                  {plugin.icon || plugin.name}
                </span>
              )
            })
          }
        </div>
      </div>
    );
  }

}
