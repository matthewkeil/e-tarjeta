import {APPOINTMENT_ACTIONS} from './appointment.actions';

const INITIAL_STATE = [];


export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case APPOINTMENT_ACTIONS.GET_ALL_APPOINTMENTS:
        console.log(action)
            return [...action.appointments.appointments]
        default:
            return {...state}
    }
}