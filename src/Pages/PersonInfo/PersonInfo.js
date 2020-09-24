import React from 'react';
import { Button , Card } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile'
import data from '../../Users.json'
import "../MainPage/main.css"




function PersonInfo(props) {
    const  handleBackButtonClick= (event) => {
        props.backToMainPage(true);
        
    }
    function displayPerson()  {

        for (const [index, user] of data.Users.entries()) {
            if (user.userId === props.userId) { //if the user in the data file equals the users button that's been clicked
        return <Profile jobRole={user.jobRole} name={user.firstName + " " + user.lastName}  
               startDate= {user.startDate} location={user.location} bio={user.bio} image={user.imageLink} /> //Add other parts of the info
             }
        }
    }

       return (
           <body className="personInfo">
           <div>
            <Card>
               {displayPerson()}
            <Button
                variant="primary"
                onClick={handleBackButtonClick}
            >Back to results</Button>
            </Card>
           </div>
           </body>

     ) 
   }
       export default PersonInfo;