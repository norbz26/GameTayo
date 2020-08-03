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
 *  TO CUSTOMIZE APIS IN Btj_game_settingsApiGenerated.js PLEASE EDIT ../Btj_game_settingsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class Btj_game_settingsApiGenerated {

  static contextUrl = properties.endpoint + "/btj_game_settings";

  // CRUD METHODS

  /**
  * btj_game_settingsService.create
  *   @description CRUD ACTION create
  *
  */
  static createBtj_game_settings(btj_game_settings) {
    return axios.post(Btj_game_settingsApiGenerated.contextUrl, btj_game_settings )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_game_settingsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteBtj_game_settings(id) {
    return axios.delete(Btj_game_settingsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_game_settingsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneBtj_game_settings(id) {
    return axios.get(Btj_game_settingsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_game_settingsService.list
  *   @description CRUD ACTION list
  *
  */
  static getBtj_game_settingsList() {
    return axios.get(Btj_game_settingsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * btj_game_settingsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveBtj_game_settings(btj_game_settings) {
    return axios.post(Btj_game_settingsApiGenerated.contextUrl + "/" + btj_game_settings._id, btj_game_settings )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default Btj_game_settingsApiGenerated;
