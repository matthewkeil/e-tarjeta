import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import RadioQuestion from "../core/RadioQuestion";

function mapStateToProps(state) {
  return {};
}

// function mapDispatchToProps(dispatch) {
//     return {

//     };
// }

const TYPE = {
  RADIO: "RADIO",
  BOOLEAN: "BOOLEAN",
  TEXT: "TEXT",
  TEXTAREA: "TEXTAREA",
  DATE: "DATE"
};

// const FORM_STATE = {
//     PRISTINE: 'PRISTINE',
//     TOUCHED: 'TOUCHED',
//     DIRTY: 'DIRTY',
//     SUBMITTED: 'SUBMITTED',
//     SUBMITTED_SUCCEEDED: 'SUBMIT_SUCCEEDED'
// }

class Register extends Component {
  questions = [
    {
      id: "booger1234",
      type: TYPE.RADIO,
      label: "",
      question: "Fracaso Metodo Anticoncepcion",
      answers: [
        "no usaba",
        "barrera",
        "DIU",
        "horomonal",
        "emergencia",
        "natural"
      ]
    }
  ];

  render() {
    return (
      <form>
        {this.questions.map(({ label, question, answers, id }) => (
          <RadioQuestion errorClassName="booger" name={question} label={question} answerButtons={answers} />
        ))}
      </form>
    );
  }
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "register"
  })(Register)
);
