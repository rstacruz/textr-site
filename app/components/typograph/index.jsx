'use strict';

import './_typograph.scss';
import React from 'react';
import Textarea from 'react-textarea-autosize';
import {create as createTf} from '../transformator/index';

export default class Typograph extends React.Component {

  constructor() {
    super();
    this.state = { text: '' };
  }

  copyToClipboard(el) {
    // setTimeout(() => {
    //   console.log(el);
    //   let Copy = el.createTextRange();
    //   Copy.execCommand("Copy");
    // }, 0);
  }

  handleInput(e) {
    let textarea = e.target;
    let text = createTf()(textarea.value);
    this.copyToClipboard(textarea);
    this.setState({ text });
  }

  render() {
    let text = this.state.text;
    return (
      <div className="container">
        <Textarea
          ref="textarea"
          className="textr-content"
          placeholder="Just paste your text"
          onInput={this.handleInput.bind(this)}
          value={text}
        />
      </div>
    );
  }

}
