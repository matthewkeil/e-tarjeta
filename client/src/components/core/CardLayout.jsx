import React, { Fragment } from "react";

import Paper from "@material-ui/core/Paper";

import logo from '../../assets/logo-600-600.svg';

import styles from "./CardLayout.module.scss";

const CardLayout = ({ children }) => {
  return (
    <Fragment>
      <img className={styles.logo} src={logo} alt="logo" />
      <Paper className={styles.paper} elevation={6}>
        {children}
      </Paper>
    </Fragment>
  );
};

export default CardLayout;
