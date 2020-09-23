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
               return <Profile  userId={<h2>"User ID: "</h2>+ user.userId} jobRole={<h2>"Job Role: "</h2>+ user.jobRole} name={<h2>"Name: "/</h2>+ user.firstName + " " + user.lastName}  
               startDate= {<h2>"Start Date: "</h2>+ user.startDate} location={<h2>"Location: "</h2>+ user.location} bio={<h2>"Bio: "</h2>+ user.bio} image={user.imageLink} /> //Add other parts of the info
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