import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}


const TYPE = {
    RADIO: 'RADIO',
    BOOLEAN: 'BOOLEAN',
    TEXT: 'TEXT',
    TEXTAREA: 'TEXTAREA',
    DATE: 'DATE'
}

// const FORM_STATE = {
//     PRISTINE: 'PRISTINE',
//     TOUCHED: 'TOUCHED',
//     DIRTY: 'DIRTY',
//     SUBMITTED: 'SUBMITTED',
//     SUBMITTED_SUCCEEDED: 'SUBMIT_SUCCEEDED'
// }

class Register extends Component {
    questions = [{
        id: 'booger1234',
        type: TYPE.RADIO,
        question: 'Fracaso Metodo Anticoncepcion',
        answers: ['no usaba', 'barrera', 'DIU', 'horomonal', 'emergencia', 'natural']
    }];

    render() {
        return (
            <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={this.state.activeStep}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
                {this.questions.map(question => {
<Radio classes={root: {}}
                })}
        );
    }
}

export default connect(
    mapStateToProps,
)(Register);