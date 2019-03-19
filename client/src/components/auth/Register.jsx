import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import DateQuestion from "../core/DateQuestion";

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

  onBlur = () => {
      console.log('blur');
  }

  render() {
    return (
      <form>
        {this.questions.map(({ label, question, answers, id }) => (
          <DateQuestion name={question} label={question} onBlur={this.onBlur}/>
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
