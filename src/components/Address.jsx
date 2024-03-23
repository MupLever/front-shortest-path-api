import React from 'react';

function Address({address, callback}) {
    console.log(address)
    return (
        <div className='card m-0 col-6' onClick={() => callback(address.id)}>
            <ul className='nav me-lg-auto mb-2 justify-content-center p-0'>
                <li className='m-1'>{address.city}, {address.district}, {address.street}, {address.house_number}</li>

            </ul>
        </div>
    )
}

export default Address;
