'use strict';

module.exports = exports = {};

exports.greet = (...args) => {
  if(args.length !== 1 || typeof args[0] !== 'string') return null;
  return `Hello ${args[0]}!`;
};
