import  { v4 } from 'uuid'
import React from 'react'
import PropTypes from "prop-types"


function BeerForm(props) {

    function handleBeerSubmission(event){
        event.preventDefault();
        props.onNewBeerCreation({
            name: event.target.beerName.value,
            brand: event.target.beerName.value,
            price: event.target.beerPrice.value,
            alcoholContent: event.target.alcoholContent.value,
            pints: 124,
            id: v4()
        })

       
    }



    return ( 

        <React.Fragment>

        <form onSubmit={handleBeerSubmission}>
            <input type='text' name='beerName' placeholder='Enter Item Name'/>
            <input type='text' name='beerBrand' placeholder='Enter Beer Brand'/>
            <input type='number' name='beerPrice' placeholder='Enter Beer Cost'/>
            <input type='number' name='alcoholContent' placeholder='Enter Alcohol Content'/>
            <button type='submit'>Submit</button>
        </form>

            
        </React.Fragment>
        
    )
   
    
}
BeerForm.prototype = {
    onNewBeerCreation: PropTypes.func
}



export default BeerForm;