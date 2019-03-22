import axios from "axios";
import { routerActions } from "connected-react-router";

const API_URL = process.env.API_URL || "http://localhost:4000";
const headers = {
  "Access-Control-Allow-Origin": "http://www.bougie.haus"
};

const ACTIONS = {
  GET_QUESTIONS_SUCCESS: "GET_QUESTIONS_SUCCESS",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
  LOGIN_CLIENT_SUCCESS: 'LOGIN_CLIENT_SUCCESS'
};

const getQuestionsSuccess = payload => ({
  type: ACTIONS.GET_QUESTIONS_SUCCESS,
  payload
});

const registrationSuccess = payload => ({
  type: ACTIONS.REGISTRATION_SUCCESS,
  payload
})

const loginClientSuccess = payload => ({
  type: ACTIONS.LOGIN_CLIENT_SUCCESS,
  payload
});

const actions = {
  attemptGetQuestions: () => dispatch => {
    axios({
      url: API_URL + "/clients/new",
      method: "get",
      headers
    })
      .then(({ data }) => dispatch(getQuestionsSuccess(data)))
      .catch(err => console.error(err));
  },
  attemptRegistration: formName => (dispatch, getState) => {
    const data = getState().form[formName].values;

    axios({
      url: API_URL + "/clients/new",
      method: "post",
      data,
      headers
    })
    .then(({data}) => {
      dispatch(registrationSuccess(data));
      dispatch(routerActions.push('/clients/' + data._id));
    })
  },
  attemptLoginClient: ({email, password}) => dispatch => {
    axios
      .post( API_URL + '/clients/login', {
        email,
        password
      })
      .then(res => {
        const _id = res.data._id;
        dispatch(
          loginClientSuccess({ token: res.data.token, _id })
        );
        dispatch(routerActions.push(`/clients/${_id}`));
      })
      .catch(err => console.log(err));
  }
};

export { actions as clientsActions, ACTIONS as CLIENTS_ACTIONS };

const INITIAL_STATE = {
  questions: [],
  types: {}
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
      return{
        ...state,
        registration: {...payload}
      }
    case ACTIONS.LOGIN_CLIENT_SUCCESS:
      return {...state, registration: {...payload} };
    default:
      return state;
  }
};
