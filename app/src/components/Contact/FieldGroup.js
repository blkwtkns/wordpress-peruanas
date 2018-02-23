import React from 'react';
import {
  HelpBlock,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const FieldGroup = ({id, label, help, ...props}) => (

    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl  {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

export default FieldGroup;
