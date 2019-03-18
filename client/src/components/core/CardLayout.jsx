import React, { Fragment } from "react";

import Paper from "@material-ui/core/Paper";

import styles from "./CardLayout.module.scss";

const CardLayout = ({ children }) => {
  return (
    <Fragment>
      <img className={styles.logo} src="/images/logo-600-600.svg" alt="logo" />
      <Paper className={styles.paper} elevation={6}>
        {children}
      </Paper>
    </Fragment>
  );
};

export default CardLayout;
