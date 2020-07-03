import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';






function BeerList(props){
    return(
        <React.Fragment>
            {props.beerList.map((beer,index) =>
            <Beer
            
            beerName={beer.name}
            beerBrand={beer.brand}
            beerPrice={beer.price}
            alcoholContent={beer.alcoholContent}
            key={index}
            />)}

        </React.Fragment>
    )
}
    
    BeerList.propTypes = {
       beerList: PropTypes.array
    } 
    



export default BeerList;










