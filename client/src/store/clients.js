import axios from "axios";
import { routerActions } from "connected-react-router";
import config from "./axiosConfig";

const ACTIONS = {
  GET_QUESTIONS_SUCCESS: "GET_QUESTIONS_SUCCESS",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
  LOGIN_CLIENT_SUCCESS: "LOGIN_CLIENT_SUCCESS",
  GET_CLIENT_PROFILE_SUCCESS: 'GET_CLIENT_PROFILE_SUCCESS'
};

const getQuestionsSuccess = payload => ({
  type: ACTIONS.GET_QUESTIONS_SUCCESS,
  payload
});

const registrationSuccess = payload => ({
  type: ACTIONS.REGISTRATION_SUCCESS,
  payload
});

const loginClientSuccess = payload => ({
  type: ACTIONS.LOGIN_CLIENT_SUCCESS,
  payload
});

const getClientProfileSuccess = payload => ({
  type: ACTIONS.GET_CLIENT_PROFILE_SUCCESS,
  payload
});

const actions = {
  attemptGetQuestions: () => dispatch => {
    axios(
      config({
        route: "/clients/new",
        method: "get"
      })
    )
      .then(({ data }) => dispatch(getQuestionsSuccess(data)))
      .catch(err => console.error(err));
  },
  attemptRegistration: formName => (dispatch, getState) => {
    const data = getState().form[formName].values;

    axios(
      config({
        route: "/clients/new",
        method: "post",
        data
      })
    ).then(({ data }) => {
      dispatch(registrationSuccess(data));
      //Async problem causing provider to not be saved before attempted retrieval upon componentDidMount in ProviderProfile? 
      //We are rarely receiving null (i.e. profile not found) from the server right after first creation and attempted search for profile.
      setTimeout(() => {
        dispatch(routerActions.push("/clients/" + data._id));
      }, 500)
    });
  },
  attemptLoginClient: data => dispatch => {
    axios(
      config({
        route: "/clients/login",
        data,
        method: "post"
      })
    )
      .then(res => {
        const _id = res.data._id;
        dispatch(loginClientSuccess({ token: res.data.token, _id }));
        dispatch(routerActions.push(`/clients/${_id}`));
      })
      .catch(err => console.log(err));
  },
  attemptGetClientProfile: _id => dispatch => {
    axios(
      config({
        route: "/clients/" + _id,
        method: "get"
      })
    )
      .then(res => {
        dispatch(getClientProfileSuccess({ ...res.data }));
      })
      .catch(err => console.log(err));
  },
};

export { actions as clientsActions, ACTIONS as CLIENTS_ACTIONS };

const INITIAL_STATE = {
  questions: [],
  types: {},
  registration: null,
  profile: null
};

//DONT FORGET TO ADD A REGISTRATION_SUCCESS TO THE REDUCER BELOW

export const clientsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...payload.questions],
        types: { ...payload.types }
      };
    case ACTIONS.REGISTRATION_SUCCESS:
      return {
        ...state,
        registration: { ...payload }
      };
    case ACTIONS.LOGIN_CLIENT_SUCCESS:
      return { ...state, registration: { ...payload } };
    case ACTIONS.GET_CLIENT_PROFILE_SUCCESS:
      return{
        ...state,
        profile: {...payload}
      }
    default:
      return state;
  }
};
