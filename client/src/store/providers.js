import axios from "axios";
import { routerActions } from "connected-react-router";
import config from "./axiosConfig";

const ACTIONS = {
  GET_PROVIDER_PROFILE_SUCCESS: "GET_PROVIDER_PROFILE_SUCCESS",
  REGISTER_PROVIDER_SUCCESS: "REGISTER_PROVIDER_SUCCESS",
  LOGIN_PROVIDER_SUCCESS: "LOGIN_PROVIDER_SUCCESS"
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
    axios(
      config({
        route: "/providers/" + _id,
        method: "get"
      })
    )
      .then(res => {
        console.log(res.data);
        dispatch(getProviderProfileSuccess({ ...res.data }));
      })
      .catch(err => console.log(err));
  },
  attemptRegisterProvider: data => dispatch => {
    axios(
      config({
        route: "/providers/new",
        method: "post",
        data
      })
    )
      .then(res => {
        const _id = res.data._id;
        dispatch(registerProviderSuccess({ token: res.data.token, _id }));
        //Async problem causing provider to not be saved before attempted retrieval upon componentDidMount in ProviderProfile? 
        //We are rarely receiving null (i.e. profile not found) from the server right after first creation and attempted search for profile.
        setTimeout(() => {
          dispatch(routerActions.push(`/providers/${_id}`));
        }, 500)
      })
      .catch(err => console.log(err));
  },
  attemptLoginProvider: data => dispatch => {
    axios(config({
      route: "/providers/login",
      data,
      method: "post"
    }))
      .then(res => {
        const _id = res.data._id;
        dispatch(loginProviderSuccess({ token: res.data.token, _id }));
        dispatch(routerActions.push(`/providers/${_id}`));
      })
      .catch(err => console.log(err));
  }
};

export { actions as providerActions, ACTIONS as PROVIDER_ACTIONS };

const INITIAL_STATE = {
  profile: {
    name: null,
    email: null,
    license: null
  },
  registration: null
};

export const providersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROVIDER_PROFILE_SUCCESS:
      return { ...state, profile: { ...action.payload } };
    case ACTIONS.REGISTER_PROVIDER_SUCCESS:
      return { ...state, registration: { ...action.payload } };
    case ACTIONS.LOGIN_PROVIDER_SUCCESS:
      return { ...state, registration: { ...action.payload } };
    default:
      return { ...state };
  }
};
