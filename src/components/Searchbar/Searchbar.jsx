import React, { useState } from 'react'
import profiles from '../../Users.json'
import Checkbox from '../checkbox/Checkbox'
import { Image } from "react-bootstrap"

function Searchbar() {

    //get data from the user.json file
    const dataList = profiles.Users


    //setting the array for picking up text in the searchbar, intitially declared as empty and data declared as entire cohort
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);
  
   
    // handle change event of search input
    const handleChange = value => {
      setSearchText(value);
      filterData(value)
    };
  
  
    // filter users.json (cohort) by search text in searchbar
    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setData(dataList);
      else {
        const filteredData = dataList.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setData(filteredData);
      }
    }

    return (
     <div id= "search">
        <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className= 'cohort-checkbox'>

      </div>
       <div className="Search Text">
        {data.map((d, i) => {
          return <div key={i} className="box" style={{ backgroundColor: d.color }}>
            <b>Name: </b>{d.firstName + " " + d.lastName}<br />
            <b>Start Date: </b>{d.startDate}<br />
            <b></b>
            {/* <Image src={d.imageLink} rounded /> */}
            <img style = {{height: "150px"}} src = {d.imageLink}></img>
        </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No Tech Associate found to display!</span>}
      </div>
   </div>
    )
}


export default Searchbar;