'use strict';

var app = require('angular').module('blagApp');

app.controller('TagsController', ['$stateParams', require('./tags-controller')]);
