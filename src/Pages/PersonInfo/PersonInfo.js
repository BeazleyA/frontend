import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile'
import data from '../../Users.json'
import MainPage from '../MainPage/MainPage'

function PersonInfo(props) {
    const  handleBackButtonClick= (event) => {
        props.backToMainPage(true);
        
    }
    function displayPerson()  {
        for (const [index, user] of data.Users.entries()) {
            if (user.userId == props.userId) { //if the user in the data file equals the users button that's been clicked
               return <Profile  userId={"User ID: "+ user.userId} jobRole={"Job Role: "+ user.jobRole} name={"Name: "+ user.firstName + " " + user.lastName}  
               startDate= {"Start Date: "+ user.startDate} location={"Location: "+ user.location} bio={"Bio: "+ user.bio} image={user.imageLink} /> //Add other parts of the info
            }
        }
    }

       return (
           <div>
              <h1> Person Info Page  </h1>
            
            <Button
                variant="primary"
                onClick={handleBackButtonClick}
            >Back Button</Button>
            {displayPerson()}
           </div>

       ) 
   }
       export default PersonInfo;