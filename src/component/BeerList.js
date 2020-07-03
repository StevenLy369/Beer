import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';


function BeerList(props){
    return(
        <React.Fragment>
            <hr/>
            {props.beerList.map((beer,index) =>
            <Beer
            
            name={beer.name}
            brand={beer.brand}
            price={beer.price}
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










