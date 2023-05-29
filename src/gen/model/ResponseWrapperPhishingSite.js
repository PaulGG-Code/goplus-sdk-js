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
import {ApiClient} from '../ApiClient';
import {ResponseWrapperPhishingSiteResult} from './ResponseWrapperPhishingSiteResult';

/**
 * The ResponseWrapperPhishingSite model module.
 * @module model/ResponseWrapperPhishingSite
 * @version 1.0
 */
export class ResponseWrapperPhishingSite {
  /**
   * Constructs a new <code>ResponseWrapperPhishingSite</code>.
   * @alias module:model/ResponseWrapperPhishingSite
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperPhishingSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperPhishingSite} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperPhishingSite} The populated <code>ResponseWrapperPhishingSite</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperPhishingSite();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ResponseWrapperPhishingSiteResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperPhishingSite.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperPhishingSite.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperPhishingSiteResult} result
 */
ResponseWrapperPhishingSite.prototype.result = undefined;
