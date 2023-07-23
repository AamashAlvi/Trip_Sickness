


import { useState } from "react";

// in the Tours Component we have passed the object in the card.
// we are fetching that information through props which are initilized in the Card section in the Tour Component.

// removeTourn is passed as a prop from the card.js and earlier it was passed from the App.js to the card.js as a prop.
function Card({id , name ,info , image , price , removeTour}) {
   
    const [readmore , setReadmore] = useState(false);


    // it says that if the "readmore" is true the show the full info and if it is false the show the sunstring fetched form the info.
    // this fill fetch the data from the info section and store it in the description section.
    // .substring is used to fetch 200 words from the info section.
    // the dollar sigh is used to ftech the string from the info secttion and save the dtring to the description section.
    const description = readmore ? info :`${info.substring(0,200)}`;

    // This function tells us this that if we click and the readmore is true then is should switch on false
    // and if the readmore is false then it should become true after clicking.
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return(

        // this is container which is named card it contains all the details of the card,
        <div className="card">

            {/* this is to place the image in the card  */}
            <img src={image} className="image"></img>

            {/* this div contains all the info of the tour */}
            <div className="tour-info">
            {/* this div contains the name and the price of the city */}
            <div className="tour-details">
                {/* IT IS WRITTEN IN BRACKETS BECAUSE IT IS CALLED FROM THE PROP FUNCTION  */}
                <h4 className="tour-price">₹{price}</h4>

                <h4 className="tour-name">{name}</h4>

            </div>

            {/* this section contains the description of the city  */}
            <div className="description">
                {description}

                {/* this is written in span tag beacuse to add the cass on read more and show less */}

                {/* this onClick event handler is used so taht if we click on the read more and show less then it hsould change */}

                <span className="read-more" onClick={readmoreHandler}>

                    {/* this statement tells us that is the readmore variable is true then "show less" and if it is false then "read more" */}
                    {/* the "?" tells us that if the readmore variable is true then "show less" */}
                    {/* the ":" tells us that if the readmore variable is false is false then "read more" */}
                    {/* the "show less" and "read more" is written in backticks so that it directly prints it on the UI*/}
                    {readmore ? ` Show Less`:` Read More` }
                </span>

            </div>

            </div>

            {/* This function is written App.js because the tour data is written in it */}
            {/* This onClick event is to remove the tour from the page and is mapped with a fuction named "removeTour" */}

            {/* there is an arrow function applied on the onClick event so that the to call the removeTour function for the id fetched above "function Card"*/}
            <button onClick={() =>removeTour(id)} className="btn-red">
                Not Intrested
            </button>

            <a href="https://www.makemytrip.com/holidays-india/" >
                <button className="btn-red">
                    Intrested
                </button>
            </a>
            

        </div>



    );
}


    export default Card;