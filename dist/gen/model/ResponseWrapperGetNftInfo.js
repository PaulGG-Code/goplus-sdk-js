"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperGetNftInfo = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperGetNftInfoResult = require("./ResponseWrapperGetNftInfoResult");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */

/**
 * The ResponseWrapperGetNftInfo model module.
 * @module model/ResponseWrapperGetNftInfo
 * @version 1.0
 */
class ResponseWrapperGetNftInfo {
  /**
   * Constructs a new <code>ResponseWrapperGetNftInfo</code>.
   * @alias module:model/ResponseWrapperGetNftInfo
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperGetNftInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperGetNftInfo} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperGetNftInfo} The populated <code>ResponseWrapperGetNftInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperGetNftInfo();
      if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result')) obj.result = _ResponseWrapperGetNftInfoResult.ResponseWrapperGetNftInfoResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
exports.ResponseWrapperGetNftInfo = ResponseWrapperGetNftInfo;
ResponseWrapperGetNftInfo.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperGetNftInfo.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperGetNftInfoResult} result
 */
ResponseWrapperGetNftInfo.prototype.result = undefined;