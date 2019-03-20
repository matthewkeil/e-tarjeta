import React from "react";
import { Switch, Route } from "react-router";
import Notifier from "./core/Notifier";

import Register from './auth/Register';

import Appointments from './core/Appointments';

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.container}>
    <Notifier />

    <Switch>
      <Route path="/" exact render={() => <Register />} />
      <Route path='/appointments' exact render={() => <Appointments />} />
      {/* <Route path="/auth/register" component={Register} /> */}
      {/* <Route path="/auth/login" exact component={Login} /> */}
    </Switch>
  </div>
);

export default App;
