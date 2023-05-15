"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts = void 0;
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
 * The ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts model module.
 * @module model/ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts
 * @version 1.0
 */
class ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts {
  /**
   * Constructs a new <code>ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts</code>.
   * @alias module:model/ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts} The populated <code>ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts();
      if (data.hasOwnProperty('nft_address')) obj.nftAddress = _ApiClient.ApiClient.convertToType(data['nft_address'], 'String');
      if (data.hasOwnProperty('nft_name')) obj.nftName = _ApiClient.ApiClient.convertToType(data['nft_name'], 'String');
      if (data.hasOwnProperty('nft_owner_number')) obj.nftOwnerNumber = _ApiClient.ApiClient.convertToType(data['nft_owner_number'], 'Number');
      if (data.hasOwnProperty('create_block_number')) obj.createBlockNumber = _ApiClient.ApiClient.convertToType(data['create_block_number'], 'Number');
      if (data.hasOwnProperty('nft_symbol')) obj.nftSymbol = _ApiClient.ApiClient.convertToType(data['nft_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * It describes the address of the NFTs;
 * @member {String} nftAddress
 */
exports.ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts = ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts;
ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts.prototype.nftAddress = undefined;

/**
 * It describes the name of the NFT;
 * @member {String} nftName
 */
ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts.prototype.nftName = undefined;

/**
 * It describes the holders of the NFT;
 * @member {Number} nftOwnerNumber
 */
ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts.prototype.nftOwnerNumber = undefined;

/**
 * describes the number of blocks created for the NFT. Return \"null\" means no NFTs with duplicate name and symbol.
 * @member {Number} createBlockNumber
 */
ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts.prototype.createBlockNumber = undefined;

/**
 * It describes the symbol of the NFT;
 * @member {String} nftSymbol
 */
ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResultSameNfts.prototype.nftSymbol = undefined;