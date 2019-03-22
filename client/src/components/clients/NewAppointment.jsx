import React from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';
import {CardLayout} from '../core';
import { reduxForm, formValueSelector } from "redux-form";
import { TextQuestion } from '../core';





const NewAppointment = props => {
  return;
}

const mapStateToProps = state => {
  return {
    // providers: state.providers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptNewAppointment: (_id) => dispatch(ACT.appointments.attemptNewAppointment(_id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAppointment);