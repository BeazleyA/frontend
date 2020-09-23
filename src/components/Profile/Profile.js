import React, { Component } from 'react';
import Users from '../../Users.json';
import './Style/profile.css'

//class  which will map our data to the the web app in the HTML format

//Use a .map function to render the first Name, last name and Image of cohort


//we want to loop the JSON array over the profile compnonent to return the values of firstname lastname and image
const Profile = ({ name, image }) => {
    console.log(Users)
    return (
        <ul>
            <li>
                <div class ="profilename">{name}</div>
                <div class="profilepic"><img src={image}></img></div>
            </li>
        </ul>
    );
};

export default Profile;
