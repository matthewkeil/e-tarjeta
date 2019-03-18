import React from "react";
import { Field } from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";

function renderRadioField({
  meta: { touched, error, warning },
  //   fullWidth,
  warnClassName,
  errorClassName,
  formLabelClassName,
  formLabelPassedClasses,
  formControlClassName,
  formControlPassedClasses,
  radioButtonClassName,
  radioButtonPassedClasses,
  name,
  label,
  buttons,
  blur,
  ...custom
}) {
  return (
    <FormControl
      component="fieldset"
      className={formControlClassName}
      classes={formControlPassedClasses}
      error={error}
    >
      <FormLabel component="legend" classes={formLabelPassedClasses}>
        {label}
      </FormLabel>
      <RadioGroup name={name} onBlur={blur} {...custom}>
        {buttons.map((label) => (
          <FormControlLabel
            control={
              <Radio
                className={radioButtonClassName}
                classes={radioButtonPassedClasses}
              />
            }
            value={label}
            label={label}
          />
        ))}
      </RadioGroup>
      {touched &&
        ((error && (
          <FormHelperText className={errorClassName}>{error}</FormHelperText>
        )) ||
          (warning && (
            <FormHelperText className={warnClassName}>{warning}</FormHelperText>
          )))}
    </FormControl>
  );
}

export default ({
  //   fullWidth,
  //   warnClassName,
  //   errorClassName,
  formControlClassName,
  radioGroupClassName,
  radioButtonClassName,
  name,
  label,
  buttons,
  blur,
  ...custom
}) => (
  <Field
    name={name}
    label={label ? label : name}
    buttons={buttons}
    // fullWidth={fullWidth}
    component={renderRadioField}
    // onKeyDown={catchEnter}
    // onBlur={getTitleInfo(url)}
  />
);
