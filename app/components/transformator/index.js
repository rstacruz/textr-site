'use strict';

import textr from 'textr';
import plugins from './plugins';

const options = {
  locale: 'en-us'
}

export const locales = ['en-us', 'ru']

export function locale(name) {
  return name
    ? (options.locale = name)
    : options.locale;
}

export function nextLocale() {
  const next = locales.indexOf(locale()) + 1;
  return locale(locales[next]||locales[0]);
}

export function disable(name) {
  plugins.filter(p => p.name === name)[0].enable = false;
}

export function enable(name) {
  plugins.filter(p => p.name === name)[0].enable = true;
}

export function create() {
  let tf = plugins
    .filter(p => p.enabled !== false )
    .reduce((tf, plugin) => {
      return tf.use(plugin.fn)
    }, textr(options))
  ;
  return tf;
}
