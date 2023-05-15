"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contracts = void 0;
var _ApiClient = require("../ApiClient");
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
 * The Contracts model module.
 * @module model/Contracts
 * @version 1.0
 */
class Contracts {
  /**
   * Constructs a new <code>Contracts</code>.
   * @alias module:model/Contracts
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>Contracts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contracts} obj Optional instance to populate.
   * @return {module:model/Contracts} The populated <code>Contracts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Contracts();
      if (data.hasOwnProperty('contract_address')) obj.contractAddress = _ApiClient.ApiClient.convertToType(data['contract_address'], 'String');
      if (data.hasOwnProperty('creator_address')) obj.creatorAddress = _ApiClient.ApiClient.convertToType(data['creator_address'], 'String');
      if (data.hasOwnProperty('deployment_time')) obj.deploymentTime = _ApiClient.ApiClient.convertToType(data['deployment_time'], 'Number');
      if (data.hasOwnProperty('is_open_source')) obj.isOpenSource = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('malicious_behavior')) obj.maliciousBehavior = _ApiClient.ApiClient.convertToType(data['malicious_behavior'], [Object]);
      if (data.hasOwnProperty('malicious_contract')) obj.maliciousContract = _ApiClient.ApiClient.convertToType(data['malicious_contract'], 'Number');
      if (data.hasOwnProperty('malicious_creator')) obj.maliciousCreator = _ApiClient.ApiClient.convertToType(data['malicious_creator'], 'Number');
      if (data.hasOwnProperty('malicious_creator_behavior')) obj.maliciousCreatorBehavior = _ApiClient.ApiClient.convertToType(data['malicious_creator_behavior'], [Object]);
    }
    return obj;
  }
}

/**
 * It describes the dAap's contract address.
 * @member {String} contractAddress
 */
exports.Contracts = Contracts;
Contracts.prototype.contractAddress = undefined;

/**
 * It describes the creator address of the contract.
 * @member {String} creatorAddress
 */
Contracts.prototype.creatorAddress = undefined;

/**
 * It describes the deployed time of the contract.The value is presented as a timestamp. Example: \"deployed_time\": 1626578345
 * @member {Number} deploymentTime
 */
Contracts.prototype.deploymentTime = undefined;

/**
 * It describes whether this contract is open source. \"1\" means true; \"0\" means false.
 * @member {Number} isOpenSource
 */
Contracts.prototype.isOpenSource = undefined;

/**
 * It describes specific malicious behaviors of the contract.
 * @member {Array.<Object>} maliciousBehavior
 */
Contracts.prototype.maliciousBehavior = undefined;

/**
 * It describes whether the address is a suspected malicious contract. \"1\" means true; \"0\" means that we have not found malicious behavior of this contract.(Notice:\"malicious_contract\" return \"0\" does not mean the address is completely safe. Maybe we just haven't found its malicious behavior.)
 * @member {Number} maliciousContract
 */
Contracts.prototype.maliciousContract = undefined;

/**
 * It describes whether the creator is a suspected malicious address. \"1\" means true; \"0\" means that we have not found malicious behavior of this address.(Notice:\"malicious_creator\" return \"0\" does not mean the address is completely safe. Maybe we just haven't found its malicious behavior.)
 * @member {Number} maliciousCreator
 */
Contracts.prototype.maliciousCreator = undefined;

/**
 * It describes specific malicious behaviors of the contract creator.
 * @member {Array.<Object>} maliciousCreatorBehavior
 */
Contracts.prototype.maliciousCreatorBehavior = undefined;