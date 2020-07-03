import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';




const beerArray=[];

function BeerList(props){
    return(
        <React.Fragment>
            {beerArray.map((beer,index) =>
            <Beer
            beerName={beer.beerName}
            beerBrand={beer.beerBrand}
            beerPrice={beer.beerPrice}
            alcoholContent={beer.alcoholContent}
            key={index} />

            )}

        </React.Fragment>
    )
}
BeerList.propTypes = {
    beerList: PropTypes.array
}


export default BeerList;










