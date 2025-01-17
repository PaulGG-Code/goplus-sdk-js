"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result = void 0;
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
 * The ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result model module.
 * @module model/ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result
 * @version 1.0
 */
class ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result {
  /**
   * Constructs a new <code>ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result</code>.
   * Response result
   * @alias module:model/ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result} The populated <code>ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result();
      if (data.hasOwnProperty('website_contract_security')) obj.websiteContractSecurity = _ApiClient.ApiClient.convertToType(data['website_contract_security'], ['String']);
      if (data.hasOwnProperty('phishing_site')) obj.phishingSite = _ApiClient.ApiClient.convertToType(data['phishing_site'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} websiteContractSecurity
 */
exports.ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result = ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result;
ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result.prototype.websiteContractSecurity = undefined;

/**
 * It means whether the website is a phishing site. \"1\" means true; \"0\" means that we have not found malicious behavior of this website.
 * @member {Number} phishingSite
 */
ResponseWrapperMapstringstring2a740de0be5a4eb3b6e4a2cf0a2d8bf8Result.prototype.phishingSite = undefined;