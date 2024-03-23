import React from 'react';
import AddressItem from './AddressItem';

function ListAddresses({positions}) {
    return (
        <div>
            {positions.map(node => 
                <AddressItem address={node.address} duration={node.duration} key={node.id}/>
            )}
        </div>
  );
}

export default ListAddresses;
