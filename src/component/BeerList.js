import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';


function BeerList(props){
    return(
        <React.Fragment>
            <hr/>
            {props.beerList.map((beer) =>
            <Beer
            whenBeerClicked = {props.onBeerSelection}
            name={beer.name}
            brand={beer.brand}
            price={beer.price}
            alcoholContent={beer.alcoholContent}
            id={beer.id}
            key={beer.id}
            />)}

        </React.Fragment>
    )
}
    
    BeerList.propTypes = {
       beerList: PropTypes.array,
       onBeerSelection: PropTypes.func
    } 
    



export default BeerList;










