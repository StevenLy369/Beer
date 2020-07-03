import  { v4 } from 'uuid'
import React from 'react'


function BeerForm() {
    return ( 

        <React.Fragment>

        <form>
            <input type='text' name='beerName' placeholder='Enter Item Name'/>
            <input type='text' name='beerBrand' placeholder='Enter Beer Brand'/>
            <input type='number' name='beerPrice' placeholder='Enter Beer Cost'/>
            <input type='number' name='alcoholContent' placeholder='Enter Alcohol Content'/>
            <button type='submit'>Submit</button>
        </form>

            
        </React.Fragment>
        
    )
}






export default BeerForm;