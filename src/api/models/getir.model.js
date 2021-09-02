const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const moment = require('moment-timezone');

/**
 * Records Schema
 * @private
 */
const getirSchema = new mongoose.Schema({
  key: {
    type: String
  },
  value: {
    type: String
  },
  counts: {
    type: Array
  }
}, {
  timestamps: true,
});

/**
 * @typedef Record
 */
module.exports = mongoose.model('records', getirSchema);
