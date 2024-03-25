import React from 'react';
import RouteAddressItem from './RouteAddressItem';

function AddressList({positions}) {
    return (
        <div>
            {positions.map(node => 
                <RouteAddressItem address={node.address} duration={node.duration} key={node.id}/>
            )}
        </div>
  );
}

export default AddressList;
