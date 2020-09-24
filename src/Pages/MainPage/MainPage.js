import React, { useState } from "react";
import Checkbox from "../../components/checkbox/Checkbox";
import PersonInfo from "../PersonInfo/PersonInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../../components/Profile/Profile";
import database from "../../Users.json";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./main.css";
import logo from "./logo.png";
import Searchresults from "../../components/Searchresults/Searchresults";
import { Card, Button, CardColumns } from "react-bootstrap";

function MainPage() {
  const [cH1, setCH1] = useState(true);
  const [cH2, setCH2] = useState(true);
  const [cH3, setCH3] = useState(true);

  const [data, setData] = useState(database.Users);

  // Person ID
  const [userId, setUserId] = useState();

  //setting the button to the persons info, then displaying that page
  function handleButtonClick(userId) {
    setUserId(userId);
    handleMainPageChange(false); //changes to false and then in the return is loads person info page
  }

  // If true its on the main page, if false it's on a personal info page
  const [isDisplayMainPage, setIsDisplayMainPage] = useState(true);
  function handleMainPageChange(input) {
    //will be true or false input
    setIsDisplayMainPage(input);
  }

  function displayUsers() {
    const associates = [];

    for (const [index, user] of data.entries()) {
      //loops through the people in data file
      if (cH1 && user.startDate === "07.09.18") {
        associates.push(
          <Card bg="dark" text="light" key={index}>
            <img className=" card-img-top" src={user.imageLink} />
            <Card.Body className="d-flex flex-column">
              <div className="d-flex mb-2  justify-content-center">
                <Card.Title className="mb-1 font-weight-bold">
                  {user.firstName + " " + user.lastName}
                </Card.Title>
              </div>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(user.userId)}
              >
                Profile
              </Button>
            </Card.Body>
          </Card>
        );
      } else if (cH2 && user.startDate === "07.09.19") {
        associates.push(
          <Card bg="dark" text="light" key={index}>
            <img className=" card-img-top" src={user.imageLink} />
            <Card.Body className="d-flex flex-column">
              <div className="d-flex mb-2  justify-content-center">
                <Card.Title className="mb-1 font-weight-bold">
                  {user.firstName + " " + user.lastName}
                </Card.Title>
              </div>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(user.userId)}
              >
                Profile
              </Button>
            </Card.Body>
          </Card>
        );
      } else if (cH3 && user.startDate === "07.09.20") {
        associates.push(
          <Card bg="dark" text="light" key={index}>
            <img className=" card-img-top" src={user.imageLink} />
            <Card.Body className="d-flex flex-column">
              <div className="d-flex mb-2  justify-content-center">
                <Card.Title className="mb-1 font-weight-bold">
                  {user.firstName + " " + user.lastName}
                </Card.Title>
              </div>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(user.userId)}
              >
                Profile
              </Button>
            </Card.Body>
          </Card>
        );
      }
    }
    return associates;
  }


// Displayed code
  return isDisplayMainPage ? (
    <>
      <div class="boxed">
        <h1
          style={{color: "#ffffff", "text-align": "center","font-family": "ff din medium"
          }}
        >
        <b>Non Solus</b>
        </h1>
        <img
          style={{ float: "left", margin: "10px 0px 0px 0px", padding: "5px" }}
          src={logo}
          width="100"
        />
      </div>
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <Searchbar data={data} setData={setData} />
              </div>
            </div>
            <div className="advance-search">
              <span className="desc">Filter: Cohort year<Checkbox setCH1={setCH1} setCH2={setCH2} setCH3={setCH3} /></span>
              {/* <Searchresults data={data} setData={setData} /> */}
              <CardColumns>{displayUsers()}</CardColumns>
              <br></br>
              </div>
          </div>
        </form>
      </div>
    </>
  ) : (
    //passes userId from main page to PersonInfo and the handler to change page
    <PersonInfo userId={userId} backToMainPage={handleMainPageChange} />
  );
}

export default MainPage;
// ? do this if true
// : else do this
