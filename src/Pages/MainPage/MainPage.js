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

    // Person ID
    const [userId, setUserId] = useState();


    //setting the button to the persons info, then displaying that page
    function handleButtonClick(userId){
        setUserId(userId)
        handleMainPageChange(false) //changes to false and then in the return is loads person info page

    }
    // If true its on the main page, if false it's on a personal info page
    const [isDisplayMainPage, setIsDisplayMainPage] = useState(true);
    function handleMainPageChange(input) { //will be true or false input
        setIsDisplayMainPage(input)

    }
    function displayUsers() {
        const associates = []

        for (const [index, user] of data.Users.entries()) { //loops through the people in data file
            if (cH1 && user.startDate == "07.09.18") {
                associates.push(
                    <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        <Button
                                variant="primary"
                                onClick={()=>handleButtonClick(user.userId)} //without the () => the button is clicked on render(page load)
                            >More Profile Information</Button>
                    </div>
                )
            } else if (cH2 && user.startDate == "07.09.19") {
                associates.push(
                    <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        <Button
                                variant="primary"
                                onClick={()=>handleButtonClick(user.userId)} //without the () => the button is clicked on render(page load)
                            >More Profile Information</Button>
                    </div>
                )
            } else if (cH3 && user.startDate == "07.09.20") {
                associates.push(
                    <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        <Button
                                variant="primary"
                                onClick={()=>handleButtonClick(user.userId)} //without the () => the button is clicked on render(page load)
                            >More Profile Information</Button>
                    </div>
                )
            }

        }
        return associates;

    }


   // const allUsers = data.Users.map((user, index) => (
   //     <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
    


    return isDisplayMainPage ? (

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


            </div>
            <div>
                {/*goes to personal Info */}

            </div>

            <Checkbox setCH1={setCH1} setCH2={setCH2} setCH3={setCH3} />
            {displayUsers()}

        </div>

    ) : (
        //passes userId from main page to PersonInfo and the handler to change page
            <PersonInfo userId={userId} backToMainPage={handleMainPageChange} />

        )
}

export default MainPage;
// ? do this if true
// : else do this