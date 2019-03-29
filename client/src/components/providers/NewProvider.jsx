
import React from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { reduxForm, formValueSelector } from "redux-form";

import { MedicalBag } from 'mdi-material-ui'
import { TextQuestion, CardLayout } from '../core';


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



function ProviderRegister(props) {
  const { classes, name, email, password, license } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.attemptRegisterProvider({name, email, password, license});
  }

  return (
      <CardLayout>
        <Avatar className={classes.avatar} style={{margin: '0 auto 0.5rem auto'}}>
          <MedicalBag />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Provider Registration
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
          <TextQuestion name={'name'} label={'Full Name'} fullWidth/>
          <TextQuestion name={'email'} label={'Email'} fullWidth/>
          <TextQuestion name={'password'} label={'Password'} fullWidth/>
          <TextQuestion name={'license'} label={'Medical License ID'} fullWidth/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{marginBottom: '1rem'}}
          >
            Register
          </Button>
        </form>
      </CardLayout>
  );
}

const selector = formValueSelector('providerRegister');

function mapStateToProps(state) {
  return {
    name: selector(state, 'name'),
    email: selector(state, 'email'),
    password: selector(state, 'password'),
    license: selector(state, 'license')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptRegisterProvider: ({name, email, password, license}) => dispatch(ACT.providers.attemptRegisterProvider({name, email, password, license}))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'providerRegister'})(withStyles(styles)(ProviderRegister)));