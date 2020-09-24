import React, { useState } from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import PersonInfo from '../PersonInfo/PersonInfo';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile'
import database from '../../Users.json'
import Searchbar from '../../components/Searchbar/Searchbar'
import './main.css'
import logo from './logo.png'
import Searchresults from '../../components/Searchresults/Searchresults'

function MainPage() {
    const [cH1, setCH1] = useState(true);
    const [cH2, setCH2] = useState(true);
    const [cH3, setCH3] = useState(true);

   
  const [data, setData] = useState(database.Users);

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

        for (const [index, user] of database.Users.entries()) { //loops through the people in data file
            if (cH1 && user.startDate === "07.09.18") {
                associates.push(
                    <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        <Button
                                variant="primary"
                                onClick={()=>handleButtonClick(user.userId)} //without the () => the button is clicked on render(page load)
                            >More Profile Information</Button>
                    </div>
                )
            } else if (cH2 && user.startDate === "07.09.19") {
                associates.push(
                    <div>
                        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
                        <Button
                                variant="primary"
                                onClick={()=>handleButtonClick(user.userId)} //without the () => the button is clicked on render(page load)
                            >More Profile Information</Button>
                    </div>
                )
            } else if (cH3 && user.startDate === "07.09.20") {
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

    return  isDisplayMainPage ? (
       <> 
       <div class="boxed">
      <h1 style={{"color":"#708090", "text-align": "center", "font-family": "cursive"}}><em>Non Solus</em></h1>
      <img style={{"float": "right", "margin": "20px 0px 10px 10px"}} src={logo} width="100" />
      </div>
        <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
              <Searchbar data={data} setData={setData}/>
                <div className="icon-wrap">
                  <svg className="svg-inline--fa fa-search fa-w-16" fill="#ccc" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="advance-search">
              <span className="desc">Cohort</span>
  
              <div className="row second">
                <div className="input-field">
                  <div className="input-select">
                    
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-select">
                
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-select">
                    
                  </div>
                </div>
              </div>
              
              <Searchresults data={data} setData={setData}/>
              <div className="row third">
                <div className="input-field">
                  <div className="result-count">
                    <span> </span>results</div>
                  <div className="group-btn">
                    <button className="btn-delete" id="delete">RESET</button>
                    <button className="btn-search">SEARCH</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
        </> 
    ) : (
        //passes userId from main page to PersonInfo and the handler to change page
            <PersonInfo userId={userId} backToMainPage={handleMainPageChange} />

        )
}

export default MainPage;
// ? do this if true
// : else do this