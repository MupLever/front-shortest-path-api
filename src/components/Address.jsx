import React from 'react';

function Address({address, callback}) {
    return (
        <div onClick={() => callback(address)}>
            <ul className='nav me-lg-auto justify-content-center p-0 border'>
                <li className='m-1'>{address.city}, {address.district}, {address.street}, {address.house_number}</li>
            </ul>
        </div>
    )
}

export default Address;
