import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


//back button need its event to call props.backToMainPage(true) 
// to go back to main page

function PersonInfo(props) {
    const  handleBackButtonClick= (event) => {
        props.backToMainPage(true);
        
    }
       return (
           <div>
              <h1> Person Info Page  </h1>
            Back Button {props.personData}
            
            <Button
                variant="primary"
                onClick={handleBackButtonClick}
            ></Button>
           </div>

       ) 
   }
       export default PersonInfo;

