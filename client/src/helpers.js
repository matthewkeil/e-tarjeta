import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";

export function listify(array) {
    return array
      .map((name, i) => {
        if (array.length - i === 1) {
          return name;
        }
  
        if (array.length - i === 2) {
          return `${name} and `;
        }
  
        return `${name}, `;
      })
      .join("");
  }
  
  export function renderTextField({
    meta: { touched, error, warning },
    fullWidth,
    passedClasses,
    input,
    blur,
    ...custom
  }) {
    return (
      <Fragment>
        <TextField
          onBlur={blur}
          fullWidth={fullWidth}
          className={passedClasses ? passedClasses.input : ''}
          label={input.name}
          {...input}
          {...custom}
        />
        {touched &&
          ((error && <span className={passedClasses.errorClassName}>{error}</span>) ||
            (warning && <span className={passedClasses.warnClassName}>{warning}</span>))}
      </Fragment>
    );
  }