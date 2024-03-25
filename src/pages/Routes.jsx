import React, { useEffect, useState } from 'react';
import RouteService from '../API/RouteSetvice';
import ListRoute from '../components/ListRoute';

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
            <ListRoute routes={routes}/>
        </div>
    )
}

export default Routes;
