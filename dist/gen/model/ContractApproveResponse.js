"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractApproveResponse = void 0;
var _ApiClient = require("../ApiClient");
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
 * The ContractApproveResponse model module.
 * @module model/ContractApproveResponse
 * @version 1.0
 */
class ContractApproveResponse {
  /**
   * Constructs a new <code>ContractApproveResponse</code>.
   * @alias module:model/ContractApproveResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ContractApproveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractApproveResponse} obj Optional instance to populate.
   * @return {module:model/ContractApproveResponse} The populated <code>ContractApproveResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ContractApproveResponse();
      if (data.hasOwnProperty('contract_name')) obj.contract_name = _ApiClient.ApiClient.convertToType(data['contract_name'], 'String');
      if (data.hasOwnProperty('creator_address')) obj.creator_address = _ApiClient.ApiClient.convertToType(data['creator_address'], 'String');
      if (data.hasOwnProperty('deployed_time')) obj.deployed_time = _ApiClient.ApiClient.convertToType(data['deployed_time'], 'Number');
      if (data.hasOwnProperty('doubt_list')) obj.doubt_list = _ApiClient.ApiClient.convertToType(data['doubt_list'], 'Number');
      if (data.hasOwnProperty('is_contract')) obj.is_contract = _ApiClient.ApiClient.convertToType(data['is_contract'], 'Number');
      if (data.hasOwnProperty('is_open_source')) obj.is_open_source = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('is_proxy')) obj.is_proxy = _ApiClient.ApiClient.convertToType(data['is_proxy'], 'Number');
      if (data.hasOwnProperty('malicious_behavior')) obj.malicious_behavior = _ApiClient.ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('tag')) obj.tag = _ApiClient.ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('trust_list')) obj.trust_list = _ApiClient.ApiClient.convertToType(data['trust_list'], 'Number');
    }
    return obj;
  }
}

/**
 * It describes the approved contract name.
 * @member {String} contract_name
 */
exports.ContractApproveResponse = ContractApproveResponse;
ContractApproveResponse.prototype.contract_name = undefined;

/**
 * It describes the creator address of the contract.(Notice:When the address is not a contract (\"is_contract\"=0), it will return \"null\".)
 * @member {String} creator_address
 */
ContractApproveResponse.prototype.creator_address = undefined;

/**
 * It describes the deployed time of the contract. The value is presented as a timestamp. Example: \"deployed_time\": 1626578345(Notice:When the address is not a contract (\"is_contract\"=0), it will return \"null\".)
 * @member {Number} deployed_time
 */
ContractApproveResponse.prototype.deployed_time = undefined;

/**
 * It describes whether the address is a suspected malicious contract. \"1\" means true; \"0\" means that we have not found malicious behavior of this address.(Notice:Return \"0\" does not mean it is safe. Maybe we just haven't found its malicious behavior.)
 * @member {Number} doubt_list
 */
ContractApproveResponse.prototype.doubt_list = undefined;

/**
 * It describes whether the address is a contract. \"1\" means true; \"0\" means false.
 * @member {Number} is_contract
 */
ContractApproveResponse.prototype.is_contract = undefined;

/**
 * It describes whether this contract is open source. \"1\" means true; \"0\" means false.(Notice:When the address is not a contract (\"is_contract\"=0), it will return \"null\".)
 * @member {Number} is_open_source
 */
ContractApproveResponse.prototype.is_open_source = undefined;

/**
 * Whether the spender is a proxy contract.
 * @member {Number} is_proxy
 */
ContractApproveResponse.prototype.is_proxy = undefined;

/**
 * It describes specific malicious behaviors. \"honeypot_related_address\" means that the address is related to honeypot tokens or has created scam tokens. \"phishing_activities\" means that this address has implemented phishing activities. \"blackmail_activities\" means that this address has implemented blackmail activities. \"stealing_attack\" means that this address has implemented stealing attacks. \"fake_kyc\" means that this address is involved in fake KYC. \"malicious_mining_activities\" means that this address is involved in malicious mining activities. \"darkweb_transactions\" means that this address is involved in darkweb transactions. \"cybercrime\" means that this address is involved in cybercrime. \"money_laundering\" means that this address is involved in money laundering. \"financial_crime\" means that this address is involved in financial crime. “blacklist_doubt” means that the address is suspected of malicious behavior and is therefore blacklisted.(Notice:Returning an empty array means that no malicious behavior was found at that address.)
 * @member {Array.<String>} malicious_behavior
 */
ContractApproveResponse.prototype.malicious_behavior = undefined;

/**
 * It describes which dapp uses the contract. Example:\"tag\": \"Compound\"
 * @member {String} tag
 */
ContractApproveResponse.prototype.tag = undefined;

/**
 * It describes whether the address is a famous and trustworthy one. \"1\" means true; \"0\" means that we have not included this address in the trusted list;(Notice:Return \"0\" does not mean the address is not trustworthy. Maybe we just haven't included it yet.)
 * @member {Number} trust_list
 */
ContractApproveResponse.prototype.trust_list = undefined;