import React from 'react';
import AddressItem from './AddressItem';

function ListAddress({path}) {
    return (
        <div>
            {path.map((node, index) => 
                <AddressItem address={node.address} duration={node.duration} key={index}/>
            )}
        </div>
  );
}

export default ListAddress;
