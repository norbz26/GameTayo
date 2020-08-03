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
 *  TO CUSTOMIZE FUNCTIONS IN Btj_merchantsActionsGenerated.js PLEASE EDIT ../Btj_merchantsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import Btj_merchantsApi from "../../../api/Btj_merchantsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create btj_merchants
  createBtj_merchants: function(btj_merchants) {
    return function(dispatch) {
      return Btj_merchantsApi
        .createBtj_merchants(btj_merchants)
        .then(btj_merchants => {
          dispatch(actionsFunction.createBtj_merchantsSuccess(btj_merchants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createBtj_merchantsSuccess: function(btj_merchants) {
    return { type: types.CREATE_BTJ_MERCHANTS_SUCCESS, payload: btj_merchants };
  },


  // Delete btj_merchants
  deleteBtj_merchants: function(id) {
    return function(dispatch) {
      return Btj_merchantsApi
        .deleteBtj_merchants(id)
        .then(btj_merchants => {
          dispatch(actionsFunction.deleteBtj_merchantsSuccess(btj_merchants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteBtj_merchantsSuccess: function(btj_merchants) {
    return { type: types.DELETE_BTJ_MERCHANTS_SUCCESS, payload: btj_merchants };
  },


  // Get btj_merchants
  loadBtj_merchants: function(id) {
    return function(dispatch) {
      return Btj_merchantsApi
        .getOneBtj_merchants(id)
        .then(btj_merchants => {
          dispatch(actionsFunction.loadBtj_merchantsSuccess(btj_merchants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBtj_merchantsSuccess: function(btj_merchants) {
    return { type: types.GET_BTJ_MERCHANTS_SUCCESS, payload: btj_merchants };
  },

  // Load  list
  loadBtj_merchantsList: function() {
    return function(dispatch) {
      return Btj_merchantsApi
        .getBtj_merchantsList()
        .then(list => {
          dispatch(actionsFunction.loadBtj_merchantsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBtj_merchantsListSuccess: function(list) {
    return { type: types.LIST_BTJ_MERCHANTS_SUCCESS, payload: list };
  },

	
  // Save btj_merchants
  saveBtj_merchants: function(btj_merchants) {
    return function(dispatch) {
      return Btj_merchantsApi
        .saveBtj_merchants(btj_merchants)
        .then(btj_merchants => {
          dispatch(actionsFunction.saveBtj_merchantsSuccess(btj_merchants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveBtj_merchantsSuccess: function(btj_merchants) {
    return { type: types.UPDATE_BTJ_MERCHANTS_SUCCESS, payload: btj_merchants };
  },


};

export default actionsFunction;