import React, { useState } from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import DisplayData from './DisplayData';
import PersonInfo from '../PersonInfo/PersonInfo';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import navPersonInfo from '../../components/mainToPersonInfo/MainToPersonInfo';
import Elseviertestimage from '../../Images/Elseviertestimage.jpg'
import Profile from '../../components/Profile/Profile'
import data from '../../Users.json'

function MainPage() {

  // Person data
  const [personName, setPersonName] = useState("bob");
      
  
  //setting the button to the persons info, then displaying that page
  const  handleButtonClick= (event) => {
      setPersonName(event.target.value)
      handleMainPageChange(false)
      
  }
    // If true its on the main page, if false it's on a personal info page
    const[isDisplayMainPage, setIsDisplayMainPage] = useState (true);
    function handleMainPageChange(input) { //will be true or false input
             setIsDisplayMainPage(input)

    }
    return (
    data.Users.map((user, index) =>(
        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
    ))
    )


    return  isDisplayMainPage ? (

        <div>
            <div>
            Search bar here
            </div>
            <div>
        <Button
            variant="primary"
            onClick={handleButtonClick}
        ><h2>Person Info Page </h2>
        </Button>

        <Button
            variant="primary"
            onClick={handleButtonClick}
        >changePersonToAlex
        </Button>
    </div>
            <div>
{/*goes to personal Info */}
     
            </div>

            <Checkbox />
           </div> 
            
    ) : (
          <PersonInfo personData = {personName} backToMainPage= {handleMainPageChange} />

    )
}
    
export default MainPage;
// ? do this if true
// : else do this
