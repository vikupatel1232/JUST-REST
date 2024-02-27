import { HttpStatus, ErrorCode } from "./httpCodes";
import message from "./messages";

/**
 * Send response with common function
 * @param {number} httpStatusCode http status code
 * @param {string} message response message
 * @param {object} data data from user
 * @returns http code, message and responseData
 */

const response = (httpStatusCode, message, data) => {
  if (data == null && " ") {
    return {
      responseCode: httpStatusCode,
      responseMessage: message,
    };
  }
  return {
    responseCode: httpStatusCode,
    responseMessage: message,
    responseData: data,
  };
};
