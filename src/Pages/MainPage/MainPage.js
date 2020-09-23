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
    const [cH1, setCH1] = useState(true);
    const [cH2, setCH2] = useState(true);
    const [cH3, setCH3] = useState(true);
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
    function displayUsers() {
            const associates  = []

            for(const[index, user] of data.Users.entries()) { //loops through the people in data file
                if(cH1 &&  user.startDate == "07.09.18") {
                    associates.push(
                        <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        </div>
                    )
                }else if(cH2 && user.startDate == "07.09.19"){
                    associates.push(
                        <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        </div>
                    )
                }else if(cH3 && user.startDate == "07.09.20"){
                    associates.push(
                        <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        </div>
                    )
                }

            }
            return associates;

    }


    const allUsers = data.Users.map((user, index) =>(
        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
    ))
    

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

            <Checkbox setCH1={setCH1} setCH2={setCH2} setCH3={setCH3}/>
            {displayUsers()}

           </div> 
            
    ) : (
          <PersonInfo personData = {personName} backToMainPage= {handleMainPageChange} />

    )
}
    
export default MainPage;
// ? do this if true
// : else do this
