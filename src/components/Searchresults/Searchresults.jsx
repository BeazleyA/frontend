import React, { useState } from 'react'
import profiles from '../../Users.json'
import Checkbox from '../checkbox/Checkbox'
import { Image } from "react-bootstrap"

function Searchresults({data, setData}) {

    //get data from the user.json file
    //const dataList = profiles.Users


    //setting the array for picking up text in the searchbar, intitially declared as empty and data declared as entire cohort
    //const [searchText, setSearchText] = useState("");
    //const [result, setResult] = useState(profiles.Users);
  
   
    // handle change event of search input
    const handleChange = value => {
      //setSearchText(value);
      // filterData(value)
    };
  
  
    // filter users.json (cohort) by search text in searchbar
    // const filterData = (value) => {
    //   const lowercasedValue = value.toLowerCase().trim();
    //   if (lowercasedValue === "") setData(profiles.users);
    //   else {
    //     const filteredData = profiles.Users.filter(item => {
    //       return Object.keys(item).some(key =>
    //         item[key].toString().toLowerCase().includes(lowercasedValue)
    //       );
    //     });
    //     setData(filteredData);
    //   }
    // }
  return (
    <div className="Search Text">
      {data.map((d, i) => {
        return <div key={i}>
          <b>Name: </b>{d.firstName + " " + d.lastName}<br />
          <b>Start Date: </b>{d.startDate}<br />
          <b></b>
          {/* <Image src={d.imageLink} rounded /> */}
          <img style={{ height: "150px" }} src={d.imageLink}></img>
        </div>
      })}
      <div className="clearboth">{data.length === 0 && <span>No Tech Associate found to display!</span>}</div>
    </div>
    )
}


export default Searchresults;