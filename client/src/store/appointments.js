import axios from "axios";
import { routerActions } from "connected-react-router";

const API_URL = process.env.API_URL || "http://localhost:4000";
const headers = {
  "Access-Control-Allow-Origin": "http://www.bougie.haus"
};


const ACTIONS = {
  GET_ALL_APPOINTMENTS: 'GET_ALL_APPOINTMENTS',
  NEW_APPOINTMENT: 'NEW_APPOINTMENT'
}


const getAppointments = payload => ({
  type: ACTIONS.GET_ALL_APPOINTMENTS,
  payload
});


const actions = {
  attemptGetAppointments: () => dispatch => {
    axios.get(`${API_URL}/appointments`)
      .then(res => {
        dispatch(getAppointments(res.data));
        // dispatch(routerActions.push("/appointments"));
      })
      .catch(err => console.log(err))
  },
  attemptNewAppointment: () => dispatch => {
    axios.post(`${API_URL}/appointments`)
  }

};




export { actions as appointmentsActions, ACTIONS as APPOINTMENTS_ACTIONS };

export const appointmentsReducer = (state = [], action) => {
    switch(action.type) {
        case ACTIONS.GET_ALL_APPOINTMENTS:
            return [...action.payload.appointments];
        case ACTIONS.NEW_APPOINTMENT:
          return {...state};
        default:
            return {...state}
    }
}