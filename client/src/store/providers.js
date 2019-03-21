import axios from 'axios';

const API_URL = process.env.API_URL || "http://localhost:4000";

const ACTIONS = {
  GET_PROVIDER_PROFILE_SUCCESS: 'GET_PROVIDER_PROFILE_SUCCESS'
}

const getProviderProfileSuccess = payload => ({
  type: ACTIONS.GET_PROVIDER_PROFILE_SUCCESS,
  payload
});

const actions = {
  attemptGetProviderProfile: () => dispatch => {
    //WHAT INFO SHOULD WE PASS IN URL TO GET PROFILE?
    axios.get(`${API_URL}/`)
      .then( data => dispatch(getProviderProfileSuccess(data)))
      .catch(err => console.log(err));
  }
};

export {actions as providerActions, ACTIONS as PROVIDER_ACTIONS}

const INITIAL_STATE = {};

export const providersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ACTIONS.GET_PROVIDER_PROFILE_SUCCESS:
      return {...action.payload}
    default:
      return {...state}
  }
}

