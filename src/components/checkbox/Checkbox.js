import React, { useState } from 'react';
//import form
//import css from "./.css";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


const Checkbox = () => {
    const [cH1, setCH1] = useState(true);
    const [cH2, setCH2] = useState(true);
    const [cH3, setCH3] = useState(true);
    //When tick box clicked then variable set to true if clicked and false if not clicked
const handleCH1check = (event) => {
    
    setCH1(event.target.checked);
    console.log(cH1)
}
//When tick box clicked then variable set to true if clicked and false if not clicked
const handleCH2check = (event) => {
    
setCH2(event.target.checked);
console.log(cH2)
}
//When tick box clicked then variable set to true if clicked and false if not clicked
const handleCH3check = (event) => {
    
setCH3(event.target.checked);
console.log(cH3)
}

    return (<div>Select Cohort
        <Form>
        <Form.Check inline
        onInput={handleCH1check}
         label="Cohort One" 
         data-testid = 'Cohort One'>
        
         </Form.Check>

         <Form.Check inline
        onInput={handleCH2check}
        label="Cohort Two">

        </Form.Check>

        <Form.Check inline
        onInput={handleCH3check}
         label="Cohort Three">
        
         </Form.Check>
    </Form> </div>)
}

export default Checkbox;

