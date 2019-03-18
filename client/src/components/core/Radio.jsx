import React, { Fragment } from "react";
import { Field } from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

function renderRadioField({
  //   meta: { touched, error, warning },
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
}) {
  return (
    <Fragment>
      <FormControl component="fieldset" className={formControlClassName}>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          name={name}
          className={radioGroupClassName}
          onBlur={blur}
          {...custom}
        >
          {buttons.map(({ value, label }) => (
            <FormControlLabel
              control={<Radio className={radioButtonClassName} />}
              value={value}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Fragment>
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
    fullWidth={fullWidth}
    passedClasses={{
      inputClassName,
      warnClassName,
      errorClassName
    }}
    component={renderRadioField}
    // onKeyDown={catchEnter}
    // onBlur={getTitleInfo(url)}
  />
);
