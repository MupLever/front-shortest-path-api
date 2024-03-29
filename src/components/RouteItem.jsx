import React from 'react';
import {useNavigate} from 'react-router-dom';

function RouteItem({route}) {
    const navigate = useNavigate()

    return (
        <div className='card m-3'>
            <h5 className='card-header'>
                Исполнитель: {route.executor}<br/>
                Дата исполнения: {route.execution_date}
                </h5>
            <div className='card-body'>
                <h5 className='card-title'>Количество заказов: {route.positions.length - 2}</h5>
                <p className='card-text'>Дата назначения: {route.created_at}</p>
                <button className='btn btn-dark' onClick={() => navigate(`${route.id}`)}>Подробнее</button>
            </div>
        </div>
    )
}

export default RouteItem;
