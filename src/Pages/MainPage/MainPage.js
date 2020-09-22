import React, { useState } from "react";
//import form
// import DisplayData from "./DisplayData";
// import PersonInfo from "../PersonInfo/PersonInfo";
// //import css from "./.css";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";

const MainPage = () => {
  return (
    <div>
      <h1>Elseveier Directory</h1>
      <div>Search bar here</div>
    </div>
  );
};

export default MainPage;

// function MainPage() {
//     // Declare a new state variable for each cohort (Make boolean)
//     const [cH1, setCH1] = useState(true);
//     const [cH2, setCH2] = useState(true);
//     const [cH3, setCH3] = useState(true);
//     // Person data
//     const [personName, setPersonName] = useState("bob");
//     // If true its on the main page, if false it's on a personal info page
//     const[isDisplayMainPage, setIsDisplayMainPage] = useState (true);
//     function handleMainPageChange(input) { //will be true or false input
//              setIsDisplayMainPage(input)

//     }
// //When tick box clicked then variable set to true if clicked and false if not clicked
//     const handleCH1check = (event) => {

//         setCH1(event.target.checked);
//     }
// //When tick box clicked then variable set to true if clicked and false if not clicked
// const handleCH2check = (event) => {

//     setCH2(event.target.checked);
// }
// //When tick box clicked then variable set to true if clicked and false if not clicked
// const handleCH3check = (event) => {

//     setCH3(event.target.checked);
// }
//     //setting the button to the persons info, then displaying that page
//     const  handleButtonClick= (event) => {
//         setPersonName(event.target.value)
//         handleMainPageChange(false)

//     }

//     return isDisplayMainPage ? (

//         <div>
//             <div>
//             Search bar here
//             </div>
//             <div>
// {/*goes to personal Info */}
//             <Button
//                 variant="primary"
//                 onClick={handleButtonClick}
//             >changePersonToBob</Button>

//             <Button
//                 variant="primary"
//                 onClick={handleButtonClick}
//             >changePersonToAlex</Button>
//             </div>
//             {
//              <Form>
//                 <Form.Check inline
//                 onInput={handleCH1check}
//                  label="Cohort One" >

//                  </Form.Check>

//                  <Form.Check inline
//                 onInput={handleCH2check}
//                 label="Cohort Two">

//                 </Form.Check>

//                 <Form.Check inline
//                 onInput={handleCH3check}
//                  label="Cohort Three">

//                  </Form.Check>
//             </Form> }
//             <DisplayData data = {"Hello"}/>

//         </div>
//     ) : (
//     <PersonInfo personData = {personName} backToMainPage= {handleMainPageChange} />

//     )
// }
// export default MainPage;
// // ? do this if true
// // : else do this
