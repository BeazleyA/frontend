import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile'
import data from '../../Users.json'



function PersonInfo(props) {
    const  handleBackButtonClick= (event) => {
        props.backToMainPage(true);
        
    }
    function displayPerson()  {

        for (const [index, user] of data.Users.entries()) {
            if (user.userId === props.userId) { //if the user in the data file equals the users button that's been clicked
               return <Profile jobRole={"Job Role: "+ user.jobRole} name={user.firstName + " " + user.lastName}  
               startDate= {"Start Date: "+ user.startDate} location={"Location: "+ user.location} bio={"Bio: "+ user.bio} image={user.imageLink} /> //Add other parts of the info
             }
        }
    }

       return (
           <div>
               {displayPerson()}
            <Button
                variant="primary"
                onClick={handleBackButtonClick}
            >Back Button</Button>
           </div>

       ) 
   }
       export default PersonInfo;