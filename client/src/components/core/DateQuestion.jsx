import React from "react";
import { Field } from "redux-form";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';

const renderDateField = ({
  meta: { touched, error, warning },
  input,
  name,
  label,
  onBlur
}) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <DatePicker
      name={name}
      label={label}
      value={input.value}
      onChange={value => input.onChange(value)}
    //   onBlur={onBlur}
      disableFuture
      openTo="year"
      views={["year", "month", "day"]}
      helperText={!touched ? "" : error ? error : warning ? warning : ""}
    />
  </MuiPickersUtilsProvider>
);

export default ({ name, label, onBlur }) => (
  <Field
    name={name}
    label={label}
    component={renderDateField}
    onBlur={onBlur}
  />
);
