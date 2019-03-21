import axios from 'axios';

const API_URL = `${process.env.API_URL || "http://localhost:4000"}/providers`;

const ACTIONS = {
  GET_PROVIDER_PROFILE_SUCCESS: 'GET_PROVIDER_PROFILE_SUCCESS',
  REGISTER_PROVIDER_SUCCESS: 'REGISTER_PROVIDER_SUCCESS'
}

const getProviderProfileSuccess = payload => ({
  type: ACTIONS.GET_PROVIDER_PROFILE_SUCCESS,
  payload
});

const registerProviderSuccess = payload => ({
  type: ACTIONS.REGISTER_PROVIDER_SUCCESS,
  payload
});

const actions = {
  attemptGetProviderProfile: () => (dispatch, getState) => {
    //WHAT INFO SHOULD WE PASS IN URL TO GET PROFILE?
    // header state.token
    const {_id} = getState();
    axios.get(`${API_URL}/${_id}`)
      .then( data => dispatch(getProviderProfileSuccess(data)))
      .catch(err => console.log(err));
  },
  attemptRegisterProvider: ({email, password, license}) => (dispatch) => {
    console.log(email, password, license)
    axios.post(`${API_URL}/new`, {
      email,
      password,
      license
    })
      .then(data => {
        console.log(data);
        dispatch(registerProviderSuccess(data))
      })
      .catch(err => console.log(err));
  }
};

export {actions as providerActions, ACTIONS as PROVIDER_ACTIONS}

const INITIAL_STATE = {};

export const providersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ACTIONS.GET_PROVIDER_PROFILE_SUCCESS:
      return {...action.payload};
    case ACTIONS.REGISTER_PROVIDER_SUCCESS:
      return {...action.payload};
    default:
      return {...state}
  }
}

