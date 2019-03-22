import axios from "axios";
import config from './axiosConfig';



const ACTIONS = {
  GET_ALL_APPOINTMENTS: 'GET_ALL_APPOINTMENTS',
  NEW_APPOINTMENT: 'NEW_APPOINTMENT'
}


const getAppointments = payload => ({
  type: ACTIONS.GET_ALL_APPOINTMENTS,
  payload
});

const newAppointment = payload => ({
  type: ACTIONS.NEW_APPOINTMENT,
  payload
});


const actions = {
  attemptGetAppointments: () => dispatch => {
    axios(config({
      method: 'get',
      route: '/appointments'
    }))
      .then(res => {
        dispatch(getAppointments(res.data));
        // dispatch(routerActions.push("/appointments"));
      })
      .catch(err => console.log(err))
  },
  attemptNewAppointment: () => dispatch => {
    axios(config({
      method: 'post',
      route: '/appointments/new',
      data: {
        
      }
    }))
      .then(res => {
        dispatch()
      })
  }

};




export { actions as appointmentsActions, ACTIONS as APPOINTMENTS_ACTIONS };

export const appointmentsReducer = (state = [], action) => {
    switch(action.type) {
        case ACTIONS.GET_ALL_APPOINTMENTS:
            return [...action.payload.appointments];
        case ACTIONS.NEW_APPOINTMENT:
          return { ...state, ...action.payload };
        default:
            return {...state}
    }
}