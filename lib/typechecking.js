'use strict';

module.exports = exports = {};

exports.typeChecking = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') {
      return false; 
    }
  }
  return true;
};

exports.typeCheckingDivide = (a, b) => {
  if( typeof a !== 'number'  || b === 0) { 
    return false; 
  }
  
  return true;
};