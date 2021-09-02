const Joi = require('joi');

module.exports = {

  // GET /v1/getir
  listRecords: {
    body: {
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      minCount: Joi.number().required(),
      maxCount: Joi.number().required()
    },
  }
};
