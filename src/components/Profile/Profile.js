import React from "react";
import "./Style/profile.css";
import { Card, Button } from "react-bootstrap";
//class  which will map our data to the the web app in the HTML format

//Use a .map function to render the first Name, last name and Image of cohort

//we want to loop the JSON array over the profile compnonent to return the values of firstname lastname and image
        
    
const Profile = ({
  name,
  jobRole,
  location,
  startDate,
  bio,
  image,
  userId,
}) => { 
  return (
     <>
     {
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" height="auto" width="150px" src={image} alt={name}/>
    <Card.Body>
      <Card.Title><div class="profilename">{name}</div></Card.Title>
      <Card.Text>
      <div class="userId">{userId}</div>
        <div class="jobRole"><b>Job Role: </b>{jobRole}</div>
        <div class="startDate"><b>Start Date: </b>{startDate}</div>
        <div class="location"><b>Location: </b>{location}</div>
        <div class="bio"><b>Bio: </b>{bio}</div>
      </Card.Text>
   
    </Card.Body>
  </Card>}
        {/* <div class="profilename">{name}</div>
        <div class="profilepic">
          <img height="150px" width="150px" alt={name} src={image}></img>
        </div>
        <div class="userId">{userId}</div>
        <div class="jobRole">{jobRole}</div>
        <div class="startDate">{startDate}</div>
        <div class="location">{location}</div>
     <div class="bio">{bio}</div> */}
      </>
  );
};

export default Profile;
