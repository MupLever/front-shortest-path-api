import React from 'react';

function RouteItem(props) {
    return (
        <div className="card m-3">
            <h5 className="card-header">Исполнитель: {props.route.executor} Дата исполнения: {props.route.execution_date}</h5>
            <div className="card-body">
                <h5 className="card-title">Количество заказов: {props.route.count}</h5>
                <p className="card-text">Дата назначения: {props.route.created_at}</p>
                <a href="#" className="btn btn-primary">Открыть</a>
            </div>
        </div>
  );
}

export default RouteItem;
