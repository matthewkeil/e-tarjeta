import axios from "axios";
import { routerActions } from "connected-react-router";

const API_URL = `${process.env.API_URL || "http://localhost:4000"}/providers`;

const ACTIONS = {
  GET_PROVIDER_PROFILE_SUCCESS: "GET_PROVIDER_PROFILE_SUCCESS",
  REGISTER_PROVIDER_SUCCESS: "REGISTER_PROVIDER_SUCCESS",
  LOGIN_PROVIDER_SUCCESS: 'LOGIN_PROVIDER_SUCCESS'
};

const getProviderProfileSuccess = payload => ({
  type: ACTIONS.GET_PROVIDER_PROFILE_SUCCESS,
  payload
});

const registerProviderSuccess = payload => ({
  type: ACTIONS.REGISTER_PROVIDER_SUCCESS,
  payload
});

const loginProviderSuccess = payload => ({
  type: ACTIONS.LOGIN_PROVIDER_SUCCESS,
  payload
});

const actions = {
  attemptGetProviderProfile: _id => dispatch => {
    axios
      .get(`${API_URL}/${_id}`)
      .then(res => {
        dispatch(getProviderProfileSuccess({ ...res.data }));
      })
      .catch(err => console.log(err));
  },
  attemptRegisterProvider: ({ name, email, password, license }) => dispatch => {
    axios
      .post(`${API_URL}/new`, {
        name,
        email,
        password,
        license
      })
      .then(res => {
        const _id = res.data._id;
        dispatch(
          registerProviderSuccess({ token: res.data.token, _id })
        );
        dispatch(routerActions.push(`/providers/${_id}`));
      })
      .catch(err => console.log(err));
  },
  attemptLoginProvider: ({email, password}) => dispatch => {
    axios
      .post(`${API_URL}/login`, {
        email,
        password
      })
      .then(res => {
        const _id = res.data._id;
        dispatch(
          loginProviderSuccess({ token: res.data.token, _id })
        );
        dispatch(routerActions.push(`/providers/${_id}`));
      })
      .catch(err => console.log(err));
  }
};

export { actions as providerActions, ACTIONS as PROVIDER_ACTIONS };

const INITIAL_STATE = {
  profile: null,
  registration: null
};

export const providersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROVIDER_PROFILE_SUCCESS:
      return { ...state, profile: {...action.payload}};
    case ACTIONS.REGISTER_PROVIDER_SUCCESS:
      return {...state, registration: {...action.payload} };
    case ACTIONS.LOGIN_PROVIDER_SUCCESS:
      return {...state, registration: {...action.payload} };
    default:
      return { ...state };
  }
};
