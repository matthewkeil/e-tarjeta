import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:4000";

const ACTIONS = {
  GET_QUESTIONS_SUCCESS: "GET_QUESTIONS_SUCCESS",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS"
};

const getQuestionsSuccess = payload => ({
  type: ACTIONS.GET_QUESTIONS_SUCCESS,
  payload
});

const actions = {
  attemptGetQuestions: () => dispatch => {
    axios({
      url: API_URL + "/clients/new",
      method: 'get',
      headers: {
        "Access-Control-Allow-Origin": "http://www.bougie.haus"
      }
    })
      .then(({ data }) => dispatch(getQuestionsSuccess(data)))
      .catch(err => console.error(err));
  },
  attemptRegistration: (formName) => (dispatch, getState) => {
    console.log(getState().form[formName].values);
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
