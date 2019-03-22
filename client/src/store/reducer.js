
import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { snackbarReducer as snackbar } from "./snackbar";
import { clientsReducer as clients } from "./clients";
import { appointmentsReducer as appointments } from './appointments';
import { providersReducer as providers } from './providers';

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    snackbar,
    clients,
    appointments,
    providers
  });