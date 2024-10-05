const StatusCodes = require("http-status-codes");
const customAPIError = require("./custom-api-error");

class Unauthenticated extends customAPIError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthenticated;
