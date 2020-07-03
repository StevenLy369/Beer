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




    if (this.state.formVisibleOnPage){
        currentlyVisibleState = <BeerForm onNewBeer={this.handleNewBeer} />
        buttonText ="Return to List"
    }else {
        currentlyVisibleState = <BeerList beerList={this.state.masterKegList}/>
        buttonText ="Add Beer"
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