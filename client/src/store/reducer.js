
import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { snackbarReducer as snackbar } from "./snackbar";
import { authReducer as auth } from "./auth";
import { clientsReducer as clients } from "./clients";
import { appointmentsReducer as appointments } from './appointments';
import { providersReducer as providers } from './providers';

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    snackbar,
    auth,
    clients,
    appointments,
    providers
  });