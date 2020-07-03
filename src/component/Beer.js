import React from 'react';
import PropTypes from 'prop-types';



function Beer(props) {
    return(
        <React.Fragment>
          
            
            <h3>Beer Name:{props.name}</h3>
            <h5>Beer Brand:{props.brand}</h5>
            <h4>Beer Price:{props.price}</h4>
            <h5>Alcohol Content:{props.alcoholContent}</h5>
       

        </React.Fragment>
    )
}



Beer.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,

}

export default Beer