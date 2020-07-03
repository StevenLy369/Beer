import  { v4 } from 'uuid'
import React from 'react'
import PropTypes from "prop-types"


function BeerForm(props) {

    function handleNewBeerSubmission(event){
        event.preventDefault();
        
        props.onNewBeerCreation({
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            alcoholContent: event.target.alcoholContent.value,
            pints: 124,
            id: v4()

        })

       
    }



    return ( 

        <React.Fragment>

        <form onSubmit={handleNewBeerSubmission}>
            <input type='text' name='name' placeholder='Enter Item Name'/>
            <input type='text' name='brand' placeholder='Enter Beer Brand'/>
            <input type='number' name='price' placeholder='Enter Beer Cost'/>
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