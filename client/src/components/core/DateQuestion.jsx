import React from "react";
import { Field } from "redux-form";
import { DatePicker } from "material-ui-pickers";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

const renderDateField = ({
  meta: { touched, error, warning },
  input,
  name,
  label,
  onBlur,
  fullWidth
}) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <DatePicker
      name={name}
      label={input.value ? label : " "}
      value={input.value}
      onChange={value => input.onChange(value)}
      onBlur={onBlur}
      disableFuture
      openTo="year"
      invalidLabel={label}
      fullWidth={fullWidth}
      // format={getFormatString({
      //   moment: "DD/MM/YYYY"
      // })}
      views={["year", "month", "day"]}
      helperText={!touched ? "" : error ? error : warning ? warning : ""}
    />
  </MuiPickersUtilsProvider>
);

export default ({ name, label, onBlur, fullWidth }) => (
  <Field
    name={name}
    label={label}
    component={renderDateField}
    onBlur={onBlur}
    fullWidth={fullWidth}
  />
);
