import React from "react";
import { Switch, Route } from "react-router";
import { Notifier } from "./core";

import NewClient from './clients/NewClient';
import NewProvider from './providers/NewProvider';

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.container}>
    <Notifier />
    <Switch>
      <Route path="/clients/new" component={NewClient} />
      {/* <Route path="/clients/:clientId" component={ClientProfile} /> */}
      {/* <Route path="/clients/:clientId/appointments" component={ClientAppointments} /> */}
      {/* <Route path="/clients/:clientId/appointments/new" component={NewAppointment} /> */}
      <Route path="/providers/new" component={NewProvider} />
      {/* <Route path="/providers/:providerId" component={ProviderProfile} /> */}
      {/* <Route path='/appointments' exact render={() => <Appointments />} /> */}
      {/* <Route path="/auth/register" component={Register} /> */}
      {/* <Route path="/auth/login" exact component={Login} /> */}
    </Switch>
  </div>
);

export default App;
