'use strict';

var home = require('./home');
var member = require('./member');
var weight = require('./weight_history');

module.exports = [].concat(home, member);