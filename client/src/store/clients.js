import axios from "axios";
import { routerActions } from "connected-react-router";
import config from "./axiosConfig";

const ACTIONS = {
  GET_QUESTIONS_SUCCESS: "GET_QUESTIONS_SUCCESS",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS"
};

const getQuestionsSuccess = payload => ({
  type: ACTIONS.GET_QUESTIONS_SUCCESS,
  payload
});

const registrationSuccess = payload => ({
  type: ACTIONS.REGISTRATION_SUCCESS,
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
      dispatch(routerActions.push("/clients/" + data._id));
    });
  }
};

export { actions as clientsActions, ACTIONS as CLIENTS_ACTIONS };

const INITIAL_STATE = {
  questions: [],
  types: {}
};

export const clientsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...payload.questions],
        types: { ...payload.types }
      };
    default:
      return state;
  }
};
