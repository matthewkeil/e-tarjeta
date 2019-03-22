import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";

import { ACT } from "../../store";
import {
  DateQuestion,
  TextQuestion,
  RadioQuestion,
  BooleanQuestion,
  TextAreaQuestion,
  CardLayout
} from "../core";

import styles from "./NewClient.module.scss";

import { TYPES } from "./question_types";

const Register = ({ questions, attemptGetQuestions, handleSubmit }) => {
  useEffect(() => {
    attemptGetQuestions();
  });

  return !questions.length ? null : (
    <CardLayout>
      <h1>Registracion</h1>
      <form onSubmit={handleSubmit}>
        {questions.map(({ id, type, name, label, answers }) => {
          const questionProps = {
            name,
            label,
            answers,
            key: id,
            fullWidth: true,
            className: styles.wrapper
          };

          switch (type) {
            case TYPES.TEXTAREA:
              return <TextAreaQuestion {...questionProps} />;
            case TYPES.RADIO:
              return <RadioQuestion {...questionProps} />;
            case TYPES.BOOLEAN:
              return <BooleanQuestion {...questionProps} />;
            case TYPES.DATE:
              return <DateQuestion {...questionProps} />;
            case TYPES.TEXT:
            default:
              return <TextQuestion {...questionProps} />;
          }
        })}
        <div className={styles.actions}>
          <Button className={styles.buttons}>cancel</Button>
          {/* <Button variant="contained" className={styles.buttons}>
            skip
          </Button> */}
          <div className={styles.spacer} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.buttons}
          >
            register
          </Button>
        </div>
      </form>
    </CardLayout>
  );
};

const form = "clientRegistration";

function mapStateToProps(state) {
  return {
    questions: state.clients.questions,
    types: state.clients.types
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetQuestions: () => dispatch(ACT.clients.attemptGetQuestions()),
    handleSubmit: e => {
      e.preventDefault();
      dispatch(ACT.clients.attemptRegistration(form));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(reduxForm({ form })(Register));
