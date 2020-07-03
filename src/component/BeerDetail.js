import React from 'react';
import PropTypes from "prop-types";
function BeerDetail(props){

    const { beer, onClickingDelete } = props;
    return(
        <React.Fragment>
            <h1>Beer Detail</h1>

            <h3>Beer Name:{beer.name}</h3>
            <h3>Beer Brand:{beer.brand}</h3>
            <h3>Beer Price:{beer.price}</h3>
            <h3>Alcohol Content:{beer.alcoholContent}</h3>
            <button onClick={() => onClickingDelete(beer.id)}>DRINK SUM BEER</button>
            
            <hr/>
        </React.Fragment>
    )
}
BeerDetail.propTypes = {
    beer: PropTypes.object,
    onClickingDelete: PropTypes.func
}


export default BeerDetail;