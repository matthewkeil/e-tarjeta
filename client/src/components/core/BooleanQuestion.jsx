import React from "react";
import { Field } from "redux-form";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const renderBooleanField = ({
  name,
  input,
  meta: { touched, error, warning }
}) => (
  <Switch
    name={name}
    checked={input.value}
    onChange={() => input.onChange(!input.value)}
  />
);

export default ({ name, label }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <FormControlLabel
      control={<Field name={name} component={renderBooleanField} />}
      label="Si"
      labelPlacement="end"
    />
  </FormControl>
);
