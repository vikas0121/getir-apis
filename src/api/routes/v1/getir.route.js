const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/getir.controller');
const {
  listRecords
} = require('../../validations/getir.validation');

const router = express.Router();

router
  .route('/')
  /**
   * @api {post} v1/users Create User
   * @apiDescription Create a new user
   * 
   * @apiParam  {String}     startDate date in a “YYYY-MM-DD” format
   * @apiParam  {String}     endDate date in a “YYYY-MM-DD” format
   * @apiParam  {Number}    minCount
   * @apiParam  {Number}    maxCount
   *
   *  * @apiSuccessExample {json} Success-Response:
  *     HTTP/1.1 200 OK
  *    [
    {
        "totalCount": 2951,
        "createdAt": "2016-09-06T04:08:44.393Z",
        "key": "UFYsJHDM"
    }]
 * 
   */
  .post(validate(listRecords), controller.list);

module.exports = router;
