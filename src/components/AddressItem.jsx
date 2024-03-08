import React, { useState } from 'react';

function AddressItem({address, duration}) {
    return (
        <div>
          {address}
          <br/>
          {duration}
        </div>
  );
}

export default AddressItem;
