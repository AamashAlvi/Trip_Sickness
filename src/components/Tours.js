
import Card from "./Card"


// this component will hold the heading of the page and the all teh cards of the page.

// porps is passed in the Tour Function which is used to fetch the data
// which was passed in the App Component in tours.

// removeTour is imported from the App.js component because it is going to be passed to the Card component.
function Tours({tours , removeTour}) {

    return(

        // this is a parent level div ehich holds the heading and the cards.
        <div className="container">
            <div>
                <h2 className="title">Trip Sickness</h2>
            </div>

            <div className="cards">
                {
                    // the tours is the porps which is fetched 
                    // the map fuction iterates through each element or object  of an array
                    // for each value of tours it will return a card .
                    // that means it return seven cards.
                    tours.map( (tour) => {

                        // the iterated data which we have got from the tours and which is tour 
                        // is cloned through the spread operator in each card.
                        // that means there are 7 objects in the tours array and each object is copied in a different card.

                          // WE WILL PASS THE REMOVETOUR FUNCTION AS A PROP IN THE CARDS SO THAT IT CAN BE ACCESSED BY THE TOUR COMPONENT WHERE IT WILL BE CALLED.

                        return <Card {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>


    );


}


export default Tours;