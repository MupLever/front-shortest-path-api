import React from 'react';
import RouteItem from './RouteItem';

function RouteList({routes}) {
    return (
        <div>
            {routes.map(route => 
                <RouteItem route={route} key={route.id}/>
            )}
        </div>
  );
}

export default RouteList;
