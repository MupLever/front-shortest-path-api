import React from 'react';
import Node from './UI/Node/Node';

function AddressItem({address, duration}) {
    return (
        <div className='card m-3 col-6'>
            <ul className='nav me-lg-auto mb-2 justify-content-center p-3'>
                <li className='m-1'><Node/></li>
                <li className='m-1'>{address.city}, {address.street}, {address.house_number}</li>
                <li className='m-1'>{duration} мин.</li>
            </ul>
        </div>
    )
}

export default AddressItem;
