"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mapstringstring = void 0;
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
 * The Mapstringstring model module.
 * @module model/Mapstringstring
 * @version 1.0
 */
class Mapstringstring {
  /**
   * Constructs a new <code>Mapstringstring</code>.
   * @alias module:model/Mapstringstring
   * @class
   * @extends Object
   */
  constructor() {}

  /**
   * Constructs a <code>Mapstringstring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Mapstringstring} obj Optional instance to populate.
   * @return {module:model/Mapstringstring} The populated <code>Mapstringstring</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Mapstringstring();
      _ApiClient.ApiClient.constructFromObject(data, obj, 'String');
    }
    return obj;
  }
}
exports.Mapstringstring = Mapstringstring;