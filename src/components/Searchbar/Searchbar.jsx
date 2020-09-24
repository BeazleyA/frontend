import React, { useState } from 'react'
import profiles from '../../Users.json'
import Checkbox from '../checkbox/Checkbox'
import { Image } from "react-bootstrap"

function Searchbar({data, setData}) {

    //get data from the user.json file
    const dataList = profiles.Users


    //setting the array for picking up text in the searchbar, intitially declared as empty and data declared as entire cohort
    const [searchText, setSearchText] = useState("");
    // const [data, setData] = useState(dataList);
  
   
    // handle change event of search input
    const handleChange = value => {
      setSearchText(value);
       filterData(value);
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
        <input
        type="text"
        placeholder="Search by Name, Role or Location"
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
  
    )
}


export default Searchbar;