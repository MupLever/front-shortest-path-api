import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import RouteService from '../API/RouteSetvice';
import ListAddresses from '../components/ListAdresses';

function RouteId() {
    const params = useParams();
    const [route, setRoute] = useState({path: []})
    useEffect(() => {
        const fetchData = async () => {
            const routes = await RouteService.getById(params.id)
            setRoute(routes)
        }
        fetchData();
    }, [])
    return (
        <div>
            <ListAddresses path={route.path}/>
        </div>
  );
}

export default RouteId;
