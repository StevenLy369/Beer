import React from 'react';
import BeerList from './BeerList'
import BeerForm from './BeerForm'



class BeerControl extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            masterBeerList: [],
            formVisibleOnPage: false,
            
            
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            formVisibleOnPage: !prevState.formVisibleOnPage }))
    }

    handleNewBeer = (newBeer) => {
        const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
        this.setState({
            masterBeerList: newMasterBeerList,
            formVisibleOnPage:false

        })

    }



    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
    
     
         if (this.state.formVisibleOnPage) {
          currentlyVisibleState = <BeerForm onNewBeer={this.handleBeerSubmission} />
          buttonText = "View Kegs";
        } else {
          currentlyVisibleState = <BeerList beerList={this.state.masterBeerList} />
          buttonText = "Add Keg";
        }
   
    return(

    <React.Fragment>
    {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>

    );
 }

 
}
 
 
export default BeerControl;