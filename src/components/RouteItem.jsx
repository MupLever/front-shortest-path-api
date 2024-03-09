import React from 'react';
import ListAddress from './ListAdresses';

function RouteItem({route}) {
    return (
        <div className='card m-3'>
            <h5 className='card-header'>Исполнитель: {route.executor} Дата исполнения: {route.execution_date}</h5>
            <div className='card-body'>
                <h5 className='card-title'>Количество заказов: {route.count}</h5>
                <p className='card-text'>Дата назначения: {route.created_at}</p>
                <a href='#' className='btn btn-primary'>Открыть</a>
            </div>
            <ListAddress path={route.path}/>
        </div>
  );
}

export default RouteItem;
