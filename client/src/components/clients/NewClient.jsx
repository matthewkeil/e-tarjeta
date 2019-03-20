import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ACT } from "../../store";
import { DateQuestion, TextQuestion, RadioQuestion } from "../core";

import {TYPES} from './question_types';
 
class Register extends Component {
  // questions = [
  //   {
  //     id: "booger1234",
  //     type: TYPE.RADIO,
  //     label: "",
  //     question: "Fracaso Metodo Anticoncepcion",
  //     answers: [
  //       "no usaba",
  //       "barrera",
  //       "DIU",
  //       "horomonal",
  //       "emergencia",
  //       "natural"
  //     ]
  //   }
  // ];

  componentDidMount() {
    this.props.attemptGetQuestions();
  }

  render() {
    return !this.props.questions.length ? (
      <h1>hello</h1>
    ) : (
      <form>
        {this.props.questions.map(({type, name, label, answers}) => {
          switch (type) {
            case TYPES.TEXTAREA:
              return <h1>TextArea</h1>;
            case TYPES.RADIO:
              return (<RadioQuestion name={name} label={label} answers={answers} />)
            case TYPES.BOOLEAN:
              return <h1>Boolean</h1>;
            case TYPES.DATE:
              return (
                <DateQuestion
                  name={name}
                  label={label}
                  onBlur={this.onBlur}
                />
              );
            case TYPES.TEXT:
            default:
              return (<TextQuestion name={name} label={label} />);
          }
        })}
      </form>
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
