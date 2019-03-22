
import React from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';
import {CardLayout, DateQuestion} from '../core';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { reduxForm, formValueSelector } from "redux-form";

import { MedicalBag } from 'mdi-material-ui'
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



function NewAppointment(props) {
  const { classes,
          _id,
          name, 
          provider, 
          facility,
          gestation_day,
          blood_pressure,
          uterus_depth,
          fetal_presentation,
          fcf,
          fetal_movement,
          proteinuria,
          notes,
          provider_initials,
          next_visit
        } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.attemptNewAppointment({ 
          _id,
          name, 
          provider, 
          facility,
          gestation_day,
          blood_pressure,
          uterus_depth,
          fetal_presentation,
          fcf,
          fetal_movement,
          proteinuria,
          notes,
          provider_initials,
          next_visit
    });
  }

  return (
    <CardLayout>
        <Avatar className={classes.avatar} style={{margin: '0 auto 1rem auto'}}>
          <MedicalBag />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Appointment
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

          <TextQuestion name={'provider'} label={'Provider'} fullWidth/>
          <TextQuestion name={'facility'} label={'Facility'} fullWidth/>
          <TextQuestion name={'gestation_day'} label={'Gestation Day'} fullWidth/>
          <TextQuestion name={'blood_pressure'} label={'Blood Pressure'} fullWidth/>
          <TextQuestion name={'uterus_depth'} label={'Uterine Depth'} fullWidth/>
          <TextQuestion name={'fetal_presentation'} label={'Fetal Presentation'} fullWidth/>
          <TextQuestion name={'fcf'} label={'FCF Level'} fullWidth/>
          <TextQuestion name={'fetal_movement'} label={'Fetal Movement'} fullWidth/>
          <TextQuestion name={'proteinuria'} label={'Proteinuria'} fullWidth/>
          <TextQuestion name={'notes'} label={'Extra Provider Notes'} fullWidth/>
          <TextQuestion name={'provider_initials'} label={'Provider Initials'} fullWidth/>
          <DateQuestion name={'next_visit'} label={'Next Visit'} fullWidth/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{marginBottom: '1rem'}}
          >
            Submit
          </Button>
        </form>
    </CardLayout>
  );
}

const selector = formValueSelector('newAppointment');

function mapStateToProps(state) {
  return {
    _id: state.clients.profile._id,
    name: state.clients.profile.name,
    provider: selector(state, 'newAppointment'),
    facility: selector(state, 'facility'),
    gestation_day: selector(state, 'gestation_day'),
    blood_pressure: selector(state, 'blood_pressure'),
    uterus_depth: selector(state, 'uterus_depth'),
    fetal_presentation: selector(state, 'fetal_presentation'),
    fcf: selector(state, 'fcf'),
    fetal_movement: selector(state, 'fetal_movement'),
    proteinuria: selector(state, 'proteinuria'),
    notes: selector(state, 'notes'),
    provider_initials: selector(state, 'provider_initials'),
    next_visit: selector(state, 'next_visit'),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptNewAppointment: (data) => dispatch(ACT.appointments.attemptNewAppointment(data))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'newAppointment'})(withStyles(styles)(NewAppointment)));
