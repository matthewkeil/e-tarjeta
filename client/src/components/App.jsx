import React from "react";
import { Switch, Route } from "react-router";
import Notifier from "./core/Notifier";

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.container}>
    <Notifier />

    <Switch>
      <Route path="/" exact render={() => (<h1>hello</h1>)} />
      {/* <Route path="/auth/register" component={Register} /> */}
      {/* <Route path="/auth/login" exact component={Login} /> */}
    </Switch>
  </div>
);

export default App;
