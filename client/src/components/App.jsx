import React from "react";
import { Switch, Route } from "react-router";
import { Notifier } from "./core";


import NewClient from './clients/NewClient';
import ClientLogin from './clients/ClientLogin';
// import ClientProfile from './clients/ClientProfile';
import NewProvider from './providers/NewProvider';
import ProviderLogin from './providers/ProviderLogin';
import ProviderProfile from './providers/ProviderProfile';

import Lander from "./lander/Lander";

import styles from "./App.module.scss";


const App = () => (
  <div className={styles.container}>
    <Notifier />
    <Switch>
      <Route path="/clients/new" component={NewClient} />
      <Route path="/clients/login" component={ClientLogin} />
      {/* <Route path="/clients/:clientId" component={ClientProfile} /> */}
      <Route path="/providers/new" component={NewProvider} />
      <Route path="/providers/login" component={ProviderLogin} />
      <Route path="/providers/:providerId" component={ProviderProfile} />
      {/* <Route path="/clients/:clientId/appointments" component={ClientAppointments} /> */}
      {/* <Route path="/clients/:clientId/appointments/new" component={NewAppointment} /> */}
      <Route path='/' exact component={Lander}/>
    </Switch>
  </div>
);

export default App;
