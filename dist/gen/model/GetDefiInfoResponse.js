"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDefiInfoResponse = void 0;
var _ApiClient = require("../ApiClient");
var _GetDefiInfoResponseResult = require("./GetDefiInfoResponseResult");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */

/**
 * The GetDefiInfoResponse model module.
 * @module model/GetDefiInfoResponse
 * @version 1.0
 */
class GetDefiInfoResponse {
  /**
   * Constructs a new <code>GetDefiInfoResponse</code>.
   * @alias module:model/GetDefiInfoResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>GetDefiInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDefiInfoResponse} obj Optional instance to populate.
   * @return {module:model/GetDefiInfoResponse} The populated <code>GetDefiInfoResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDefiInfoResponse();
      if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result')) obj.result = _GetDefiInfoResponseResult.GetDefiInfoResponseResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
exports.GetDefiInfoResponse = GetDefiInfoResponse;
GetDefiInfoResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
GetDefiInfoResponse.prototype.message = undefined;

/**
 * @member {module:model/GetDefiInfoResponseResult} result
 */
GetDefiInfoResponse.prototype.result = undefined;