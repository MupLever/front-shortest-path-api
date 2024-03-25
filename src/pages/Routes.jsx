import React, { useEffect, useState } from 'react';
import RouteService from '../API/RouteSetvice';
import RouteList from '../components/RouteList';

function Routes() {
    const [routes, setRoutes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const routes = await RouteService.getAll()
            setRoutes(routes)
        }
        fetchData();
    }, [])

    return (
        <div>
            <RouteList routes={routes}/>
        </div>
    )
}

export default Routes;
