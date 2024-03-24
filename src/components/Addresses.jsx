import React from 'react';
import Address from './Address';

function Addresses({addresses, callback}) {
    return (
        <div className='card' style={{position: "absolute", width: "25rem"}}>
            {addresses.map(node =>
                <Address address={node} key={node.id} callback={callback}/>
            )}
        </div>
  );
}

export default Addresses;
