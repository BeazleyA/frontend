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
import Searchbar from '../../components/Searchbar/Searchbar'
import './main.css'
import logo from './logo.png'

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

    // this code has been superceded by Search bar component
    // const allUsers = 
    // data.Users.map((user, index) =>(
    //     <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
    // ))


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
              <Searchbar />
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
              <div className="row third">
                <div className="input-field">
                  <div className="result-count">
                    <span>108 </span>results</div>
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
            
        </div>  
    </>    
    ) : (
          <PersonInfo personData = {personName} backToMainPage= {handleMainPageChange} />

    )
}
    
export default MainPage;
// ? do this if true
// : else do this
