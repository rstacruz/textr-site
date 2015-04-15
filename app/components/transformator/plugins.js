'use strict';

// plugins
import quotes from 'typographic-quotes';
import ellipses from 'typographic-ellipses';
import math from 'typographic-math-symbols';
import rtrademark from 'typographic-registered-trademark';
import trademark from 'typographic-trademark';
import copyright from 'typographic-copyright';

const plugins = [
  {
    icon: "“”",
    name: "quotes",
    description: "Typhograpic quotes",
    fn: quotes
  },
  {
    icon: "…",
    name: "ellipses",
    description: "Replace ... to …",
    fn: ellipses
  },
  {
    icon: "∛",
    name: "math",
    description: "Math symbols",
    fn: math
  },
  {
    icon: "®",
    name: "rtrademark",
    description: "Replace alphabetic registred trademark substitutes ",
    fn: rtrademark
  },
  {
    icon: "™",
    name: "trademark",
    description: "Replace alphabetic trademark substitutes ",
    fn: trademark
  },
  {
    icon: "©",
    name: "copyright",
    description: "Replace alphabetic copyright substitutes ",
    fn: trademark
  },
];

export default plugins;
