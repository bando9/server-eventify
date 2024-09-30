const { statusCodes } = require('http-status-codes');

const customAPIError = require('./custom-api-error');

const BadRequest extends customAPIError {
  constructor(message){
    super(message)

    this.statusCode = statusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;