import { routerActions as router } from 'connected-react-router';
import { snackbarActions as snackbar } from './snackbar';
import { authActions as auth } from './auth/auth.actions';
import {appointmentActions as appointments} from './appointments/appointment.actions';

export const ACT = {
    router,
    snackbar,
    auth,
    appointments
};
