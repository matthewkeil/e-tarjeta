import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ACT } from "../../store";
import { DateQuestion } from "../core";

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
        {this.questions.map(({ label, question, answers, id }) => (
          <DateQuestion name={question} label={question} onBlur={this.onBlur} />
        ))}
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
