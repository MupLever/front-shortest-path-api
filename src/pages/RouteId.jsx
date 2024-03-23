import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import RouteService from '../API/RouteSetvice';
import ListAddresses from '../components/ListAddresses';

function RouteId() {
    const params = useParams();
    const [route, setRoute] = useState({positions: []})
    useEffect(() => {
        const fetchData = async () => {
            const route = await RouteService.getById(params.id)
            setRoute(route)
        }
        fetchData()
    }, [params.id])

    return (
        <div>
            <ListAddresses positions={route.positions}/>
        </div>
    )
}

export default RouteId;
