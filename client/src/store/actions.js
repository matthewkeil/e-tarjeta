import { routerActions as router } from 'connected-react-router';
import { snackbarActions as snackbar } from './snackbar';
import { authActions as auth } from './auth';
import { clientsActions as clients } from './clients';
import { appointmentsActions as appointments } from './appointments';

export const ACT = {
    router,
    snackbar,
    auth,
    appointments,
    clients
};
