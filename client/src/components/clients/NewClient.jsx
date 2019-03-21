import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ACT } from "../../store";
import {
  DateQuestion,
  TextQuestion,
  RadioQuestion,
  BooleanQuestion,
  TextAreaQuestion,
  CardLayout
} from "../core";

import { TYPES } from "./question_types";

class Register extends Component {
  componentDidMount() {
    this.props.attemptGetQuestions();
  }

  render() {
    return !this.props.questions.length ? null : (
      <CardLayout>
        <form>
          {this.props.questions.map(({ id, type, name, label, answers }) => {
            switch (type) {
              case TYPES.TEXTAREA:
                return <TextAreaQuestion key={id} name={name} label={label} fullWidth/>;
              case TYPES.RADIO:
                return (
                  <RadioQuestion
                    key={id}
                    name={name}
                    label={label}
                    answers={answers}
                  />
                );
              case TYPES.BOOLEAN:
                return <BooleanQuestion key={id} name={name} label={label} />;
              case TYPES.DATE:
                return (
                  <DateQuestion
                    key={id}
                    name={name}
                    label={label}
                    onBlur={this.onBlur}
                    fullWidth
                  />
                );
              case TYPES.TEXT:
              default:
                return <TextQuestion key={id} name={name} label={label} fullWidth/>;
            }
          })}
        </form>
      </CardLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.clients.questions,
    types: state.clients.types
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetQuestions: () => dispatch(ACT.clients.attemptGetQuestions())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "register"
  })(Register)
);
