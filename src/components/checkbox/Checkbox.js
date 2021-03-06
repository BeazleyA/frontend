import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = (props) => {
  //When tick box clicked then variable set to true if clicked and false if not clicked
  const handleCH1check = (event) => {
    props.setCH1(event.target.checked);
  };
  //When tick box clicked then variable set to true if clicked and false if not clicked
  const handleCH2check = (event) => {
    props.setCH2(event.target.checked);
  };
  //When tick box clicked then variable set to true if clicked and false if not clicked
  const handleCH3check = (event) => {
    props.setCH3(event.target.checked);
  };

  return (
    <Form>
      <Form.Check
        inline
        defaultChecked
        onInput={handleCH1check}
        label="2018"
        data-testid="Cohort One"
        variant= "alert"
      ></Form.Check>

      <Form.Check
        inline
        defaultChecked
        onInput={handleCH2check}
        label="2019"
      ></Form.Check>

      <Form.Check
        inline
        defaultChecked
        onInput={handleCH3check}
        label="2020"
      ></Form.Check>
    </Form>
  );
};

export default Checkbox;
