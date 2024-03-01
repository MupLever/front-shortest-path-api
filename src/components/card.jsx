import React from 'react';

function Card(props) {
    return (
        <div className="card m-3">
            <h5 className="card-header">Исполнитель: {props.executor} Дата исполнения: {props.execution_date}</h5>
            <div className="card-body">
                <h5 className="card-title">Количество заказов: {props.count}</h5>
                <p className="card-text">Дата назначения: {props.created_at}</p>
                <a href="#" className="btn btn-primary">Открыть</a>
            </div>
        </div>
  );
}

export default Card;
