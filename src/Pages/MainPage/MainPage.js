import React, { useState } from 'react';
//import form
import DisplayData from './DisplayData';
import PersonInfo from '../PersonInfo/PersonInfo';
//import css from "./.css";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile'
import Elseviertestimage from '../../Images/Elseviertestimage.jpg'
import data from '../../Users.json'



function MainPage() {
    return (
    data.Users.map((user, index) =>(
        <Profile key={user.userId} name={user.firstName + " " + user.lastName} image={user.imageLink} />
    ))
    )
}

export default MainPage