import { routerActions as router } from 'connected-react-router';
import { snackbarActions as snackbar } from './snackbar';
import { clientsActions as clients } from './clients';
import { appointmentsActions as appointments } from './appointments';
import { providerActions as providers} from './providers';


export const ACT = {
    router,
    snackbar,
    appointments,
    clients,
    providers
};
