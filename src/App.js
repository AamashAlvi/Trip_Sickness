import React, { useState } from "react";
// this is to import the data of the cards from the data.js file 
import data from "./data";

import Tours from "./components/Tours";

const App = () => {

  // in the hook there are two perameters the first parameter is tours.
  // in this tours parameter the data is fetched from the data.js file.
  const [tours , setTours] = useState(data)


  // we have given id as an parameter beacue we want to remove the card by it's id beacue the id is unique of every card
  // and when there is a click on the "Not Intrested" button
  
  // WE WILL PASS THE REMOVETOUR FUNCTION AS A PROP IN THE TOURS SO THAT IT CAN BE ACCESSED BY THE TOUR COMPONENT AND THEN BY THE CARD COMPONENT WHERE IT WILL BE CALLED.
  function removeTour(id) {

    // we have sent an id the parameter and we have asked that if we have got a tour of different id then filter it.
    const newTours = tours.filter(tour => tour.id !== id);

    // this line tells is that after we have filtered the tours in newTours then store it to the setTours.
    // setTours is a parameter passed in the useState hook which is used to update the value
    setTours(newTours);
  }

  // if there is no city left 
  if(tours.length === 0) {
    // Then returnn the selfmade UI for this if condition
    return(

      <div className="refresh">
        <h2>No Tours Left</h2>

        {/* this onClick event says that when ever it is ckicked in the button */}
        {/* then update the "setTours" with the data which is fetched in the useState */}
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }


  return (
    <div className="App">
     
      {/* the tours is passed as prop in this Tour Component  */}
      {/* this prop which fetch the data of the cities to the Tour Component */}

      {/*  WE WILL PASS THE REMOVETOUR FUNCTION AS A PROP IN THE TOURS SO THAT IT CAN BE ACCESSED BY THE TOUR COMPONENT AND THEN BY THE CARD COMPONENT WHERE IT WILL BE CALLED.
 */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>

  )
 }  

export default App;
