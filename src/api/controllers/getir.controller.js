const Getir = require('../models/getir.model');

/**
 * Get records
 */
exports.list = async (req, res, next) => {
  try {
    const { body } = req
    const { startDate, endDate, minCount, maxCount } = body

    const pipeline = [
      {
        "$match": {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      {
        "$group": {
          "_id": "$_id",
          "totalCount": {
            "$sum": { "$sum": "$counts" }
          },
          "createdAt": { "$first": "$createdAt" },
          "key": { "$first": "$key" }
        }
      },
      {
        "$match": {
          totalCount: {
            $gte: minCount,
            $lte: maxCount
          }
        }
      }
    ]
    const records = await Getir.aggregate(pipeline);
    const response = {
      code: 0,
      msg: "Success",
      records
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
};

