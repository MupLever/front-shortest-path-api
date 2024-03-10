import React from 'react';
import AddressItem from './AddressItem';

function ListAddress({path}) {
    return (
        <div>
            {path.map(node => 
                <AddressItem address={node.address} duration={node.duration}/>
            )}
        </div>
  );
}

export default ListAddress;
