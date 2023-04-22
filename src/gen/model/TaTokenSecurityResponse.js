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
import {ApiClient} from '../ApiClient';

/**
 * The TaTokenSecurityResponse model module.
 * @module model/TaTokenSecurityResponse
 * @version 1.0
 */
export class TaTokenSecurityResponse {
  /**
   * Constructs a new <code>TaTokenSecurityResponse</code>.
   * @alias module:model/TaTokenSecurityResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaTokenSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaTokenSecurityResponse} obj Optional instance to populate.
   * @return {module:model/TaTokenSecurityResponse} The populated <code>TaTokenSecurityResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaTokenSecurityResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], {'String': {'String': Object}});
    }
    return obj;
  }
}

/**
 * @member {Object.<String, Object.<String, Object>>} data
 */
TaTokenSecurityResponse.prototype.data = undefined;
