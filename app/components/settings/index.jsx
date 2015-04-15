'use strict';

import './_settings.scss';
import React from 'react';
import {locale, nextLocale} from '../transformator/index';
import plugins from '../transformator/plugins';

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = { locale: locale() }
  }

  toggleLocale() {
    this.setState({ locale: nextLocale()});
  }

  render() {
    return (
      <div className="textr-settings">
        <div className="container">
          <div className="locale" onClick={this.toggleLocale.bind(this)}>
            {this.state.locale}
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
