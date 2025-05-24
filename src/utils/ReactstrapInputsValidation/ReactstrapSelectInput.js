import * as React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

 
const ReactstrapSelectInput = ({ field, form: { touched, errors }, disabled = false, ...props }) => {
  let error = errors[field.name];
  let touch = touched[field.name];
  const InputsProps = { ...props };
  delete InputsProps["inputprops"];
  delete InputsProps["label"];
  return (
    <FormGroup>
      <Label for={props.inputprops.id} className={"label-color"}>
        {props.label}
      </Label>
      <Input id={props.inputprops.id} {...field} {...InputsProps} type="select" invalid={Boolean(touched[field.name] && errors[field.name])} >
        {props.inputprops.defaultOption && <option value="">{props.inputprops.defaultOption}</option>}
        {props.inputprops.options.map((option, index) => {
          if (option.name)
            return (
              <option value={option.id} key={index}>
                {option.name}
              </option>
            );
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </Input>
      {touch && error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};
export default ReactstrapSelectInput;
