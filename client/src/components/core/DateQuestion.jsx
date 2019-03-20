import React from "react";
import { Field } from "redux-form";
import { DatePicker } from "material-ui-pickers";


const renderDateField = ({
  meta: { touched, error, warning },
  input,
  name,
  label,
  onBlur
}) => (
    <DatePicker
      name={name}
      label={label}
      value={input.value}
      onChange={value => input.onChange(value)}
      onBlur={onBlur}
      disableFuture
      openTo="year"
      views={["year", "month", "day"]}
      helperText={!touched ? "" : error ? error : warning ? warning : ""}
    />
);

export default ({ name, label, onBlur }) => (
  <Field
    name={name}
    label={label}
    component={renderDateField}
    onBlur={onBlur}
  />
);
