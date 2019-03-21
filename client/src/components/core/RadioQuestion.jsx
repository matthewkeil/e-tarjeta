import React from "react";
import { Field } from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from './Question.module.scss';

const renderRadioField = ({
  children,
  meta: { touched, error, warning },
  input,
  name,
  onBlur,
  warnClassName,
  errorClassName
  // formLabelClassName,
  // formLabelPassedClasses,
  // formControlClassName,
  // formControlPassedClasses,
  // radioButtonClassName,
  // radioButtonPassedClasses,
}) => (
  <RadioGroup
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
    name={name}
    onBlur={onBlur}
    classes={{root: styles.radioGroup}}
  >
    {children}
    {touched &&
      ((error && (
        <FormHelperText className={errorClassName}>{error}</FormHelperText>
      )) ||
        (warning && (
          <FormHelperText className={warnClassName}>{warning}</FormHelperText>
        )))}
  </RadioGroup>
);

export default ({
  fullWidth,
  formControlClassName,
  label,
  name,
  answers,
  onBlur,
  warnClassName,
  errorClassName,

  // classes,
  // radioGroupClassName,
  // radioButtonClassName,

  ...custom
}) => (
  <FormControl
    component="fieldset"
    fullWidth={fullWidth}
    className={formControlClassName}
    // classes={{ ...classes.formControl }}
  >
    <FormLabel component="legend">{label}</FormLabel>
    <Field
      name={name}
      component={renderRadioField}
      onBlur={onBlur}
      warnClassName={warnClassName}
      errorClassName={errorClassName}
    >
      {answers.map(({ label, value }, key) => (
        <FormControlLabel
          key={key}
          control={
            <Radio
            // className={radioButtonClassName}
            // classes={radioButtonPassedClasses}
            />
          }
          value={value}
          label={label}
        />
      ))}
    </Field>
  </FormControl>
);
