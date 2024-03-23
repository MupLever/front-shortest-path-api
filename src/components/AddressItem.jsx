import React from 'react';
import Node from './UI/Node/Node';

function AddressItem({address, duration}) {
    return (
        <div>
            {
            duration === 0 ?
                <div></div> :
                <div className='p-3' style={{borderLeft: '3px dashed', marginLeft: '45px'}}>{duration} мин.</div>
            }
            <div className='card mx-3 col-6'>
                <ul className='nav me-lg-auto justify-content-center p-3'>
                    <li className='m-1'><Node/></li>
                    <li className='m-1'>{address.city}, {address.street}, {address.house_number}</li>
                </ul>
            </div>
        </div>

    )
}

export default AddressItem;
