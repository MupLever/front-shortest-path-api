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
        <div className='row'>
            <div className='col-5'>
                <ListAddresses positions={route.positions}/>
            </div>
            <div className='col-4'>
                <div className='card'>
                    <h5 className='card-header'>
                        Исполнитель: {route.executor} <br/>
                        Дата исполнения: {route.execution_date}
                        </h5>
                    <div className='card-body'>
                        <h5 className='card-title'>Количество заказов: {route.positions.length}</h5>
                        <p className='card-text'>Дата назначения: {route.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteId;
