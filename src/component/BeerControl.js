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



render() {
    let currentlyVisibleState = null;
    let buttonText = null;




    if (this.state.formVisibleOnPage){
        currentlyVisibleState = <BeerForm />
        buttonText ="Add Beer"
    }else {
        currentlyVisibleState = <BeerList />
        buttonText ="Return to Beer List"
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