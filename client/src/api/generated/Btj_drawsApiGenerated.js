/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN Btj_drawsApiGenerated.js PLEASE EDIT ../Btj_drawsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class Btj_drawsApiGenerated {

  static contextUrl = properties.endpoint + "/btj_draws";

  // CRUD METHODS

  /**
  * btj_drawsService.create
  *   @description CRUD ACTION create
  *
  */
  static createBtj_draws(btj_draws) {
    return axios.post(Btj_drawsApiGenerated.contextUrl, btj_draws )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_drawsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteBtj_draws(id) {
    return axios.delete(Btj_drawsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_drawsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneBtj_draws(id) {
    return axios.get(Btj_drawsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_drawsService.list
  *   @description CRUD ACTION list
  *
  */
  static getBtj_drawsList() {
    return axios.get(Btj_drawsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_drawsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveBtj_draws(btj_draws) {
    return axios.post(Btj_drawsApiGenerated.contextUrl + "/" + btj_draws._id, btj_draws )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default Btj_drawsApiGenerated;
