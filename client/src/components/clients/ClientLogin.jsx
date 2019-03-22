
import React from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';
import {CardLayout} from '../core';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { reduxForm, formValueSelector } from "redux-form";

import { MotherNurse } from 'mdi-material-ui'
import { TextQuestion } from '../core';


const styles = theme => ({
  // main: {
  //   width: 'auto',
  //   display: 'block', // Fix IE 11 issue.
  //   marginLeft: theme.spacing.unit * 3,
  //   marginRight: theme.spacing.unit * 3,
  //   [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
  //     width: 400,
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //   },
  // },
  // paper: {
  //   marginTop: theme.spacing.unit * 8,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  // },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});



function ClientLogin(props) {
  const { classes, email, password } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.attemptLoginClient({ email, password});
  }

  return (
    <CardLayout>
        <Avatar className={classes.avatar} style={{margin: '0 auto 1rem auto'}}>
          <MotherNurse />
        </Avatar>
        <Typography component="h1" variant="h5">
          Existing Client Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {/* <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <TextQuestion name={'email'} label={'Email'} fullWidth/>
          <TextQuestion name={'password'} label={'Password'} fullWidth/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{marginBottom: '1rem'}}
          >
            Login
          </Button>
        </form>
    </CardLayout>
  );
}

const selector = formValueSelector('clientLogin');

function mapStateToProps(state) {
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptLoginClient: ({email, password}) => dispatch(ACT.clients.attemptLoginClient({email, password}))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'clientLogin'})(withStyles(styles)(ClientLogin)));