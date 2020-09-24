import React from 'react'
import { Card, Button, CardColumns} from "react-bootstrap"

function Searchresults({data, setData}) {

    //get data from the user.json file
    //const dataList = profiles.Users


    //setting the array for picking up text in the searchbar, intitially declared as empty and data declared as entire cohort
    //const [searchText, setSearchText] = useState("");
    //const [result, setResult] = useState(profiles.Users);
  
   
    // handle change event of search input
    //const handleChange = value => {
      //setSearchText(value);
      // filterData(value)
   // };
  
  
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
    <CardColumns>
      {data.map((d, i) => {
        return <Card bg = 'dark' text='light'  key={i}>
          <img className=" card-img-top" src={d.imageLink}/>
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2  justify-content-center">
          <Card.Title className="mb-1 font-weight-bold">{d.firstName + " " + d.lastName}</Card.Title>
          </div>
          <Button variant="primary">See Profile</Button>
          </Card.Body>
        </Card>
      })}
      <div className="clearboth">{data.length === 0 && <span>No Tech Associate found to display!</span>}</div>
    </CardColumns>
    )
}


export default Searchresults;