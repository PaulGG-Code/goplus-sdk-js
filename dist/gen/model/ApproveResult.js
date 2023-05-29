"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApproveResult = void 0;
var _ApiClient = require("../ApiClient");
var _ApproveAddressInfo = require("./ApproveAddressInfo");
/*
 * GoPlus Security API Documentation
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
 * The ApproveResult model module.
 * @module model/ApproveResult
 * @version 1.0
 */
class ApproveResult {
  /**
   * Constructs a new <code>ApproveResult</code>.
   * @alias module:model/ApproveResult
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ApproveResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproveResult} obj Optional instance to populate.
   * @return {module:model/ApproveResult} The populated <code>ApproveResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApproveResult();
      if (data.hasOwnProperty('address_info')) obj.addressInfo = _ApproveAddressInfo.ApproveAddressInfo.constructFromObject(data['address_info']);
      if (data.hasOwnProperty('approved_contract')) obj.approvedContract = _ApiClient.ApiClient.convertToType(data['approved_contract'], 'String');
      if (data.hasOwnProperty('approved_for_all')) obj.approvedForAll = _ApiClient.ApiClient.convertToType(data['approved_for_all'], 'Number');
      if (data.hasOwnProperty('approved_time')) obj.approvedTime = _ApiClient.ApiClient.convertToType(data['approved_time'], 'Number');
      if (data.hasOwnProperty('approved_token_id')) obj.approvedTokenId = _ApiClient.ApiClient.convertToType(data['approved_token_id'], 'String');
      if (data.hasOwnProperty('hash')) obj.hash = _ApiClient.ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('initial_approval_hash')) obj.initialApprovalHash = _ApiClient.ApiClient.convertToType(data['initial_approval_hash'], 'String');
      if (data.hasOwnProperty('initial_approval_time')) obj.initialApprovalTime = _ApiClient.ApiClient.convertToType(data['initial_approval_time'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/ApproveAddressInfo} addressInfo
 */
exports.ApproveResult = ApproveResult;
ApproveResult.prototype.addressInfo = undefined;

/**
 * Spender Address
 * @member {String} approvedContract
 */
ApproveResult.prototype.approvedContract = undefined;

/**
 * Approval type: \"1\" means \"approved for all\"; \"0\" means \"approved for single NFT\"
 * @member {Number} approvedForAll
 */
ApproveResult.prototype.approvedForAll = undefined;

/**
 * Latest approval time
 * @member {Number} approvedTime
 */
ApproveResult.prototype.approvedTime = undefined;

/**
 * NFT token_id
 * @member {String} approvedTokenId
 */
ApproveResult.prototype.approvedTokenId = undefined;

/**
 * Latest approval hash
 * @member {String} hash
 */
ApproveResult.prototype.hash = undefined;

/**
 * Initial approval hash
 * @member {String} initialApprovalHash
 */
ApproveResult.prototype.initialApprovalHash = undefined;

/**
 * Initial approval time
 * @member {Number} initialApprovalTime
 */
ApproveResult.prototype.initialApprovalTime = undefined;