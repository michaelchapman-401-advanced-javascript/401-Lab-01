'use strict';

const typechecking = require('./typechecking.js');
let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let check = typechecking.typeChecking(arr);
  if(check !== true) { return null; }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
};

arithmetic.subtract = function (arr) {
  if(typechecking.typeChecking(arr) !== true) { return null; }
  let count = arr[0];
  for (let i = 1; i < arr.length; i++) {
    count -= arr[i];
  }
  return count;
};

arithmetic.multiply = function (arr) {
  if(typechecking.typeChecking(arr) !== true) { return null; }
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    count *= arr[i];
  }
  return count;
};

arithmetic.divide = function (a,b) {
  if(typechecking.typeCheckingDivide(a, b) !== true) { return null; }
  return a/b;
};
