import React from 'react';
import BeerList from './BeerList'
import BeerForm from './BeerForm'



class BeerControl extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            masterBeerList: [],
            formVisibleOnPage: false,
            selectedBeer:null,
            edit:false
        }
    }



render() {
    let currentlyVisibleState = null;
    let buttonText = null;




    if (this.state.formVisibleOnPage){
        currentlyVisibleState = <BeerForm />
    }else {
        currentlyVisibleState = <BeerList />
    }

   
    return(
    <React.Fragment>
    {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>}
    </React.Fragment>
)
 }

 
}
 
 
export default BeerControl;