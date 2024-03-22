import React, {useState} from 'react';


function RouteCreate() {
    function debouce(caller, timeoutMs) {
        let lastCallTimer;

        return (...args) => {
            if (lastCallTimer) {
                clearTimeout(lastCallTimer);
            }

            lastCallTimer = setTimeout(() => {
                caller(...args);
                lastCallTimer = undefined;
            }, timeoutMs);
        };
    }

    function inputHandler(e) {
        e.preventDefault();
    
        const { value } = e.target
        const url = `http://localhost:8000/api/v1/shortest_path/addresses/?part_address=${value}`
        fetch(url)
            .then(response => response.json())
            .then(addresses => {
                console.log(addresses)
                setAddresses([...addresses])
            })
    }

    const debouncedInputHandler = debouce(inputHandler, 250)
    const [addresses, setAddresses] = useState([])

    return (
        <main className='container mt-3'>
            <h1 className='mb-4'>Создание маршрута</h1>
            <div className='card col-6'>
                <div className='card-body'>
                    <form>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Исполнитель</label>
                            <div className='col-sm-8'>
                                <input type='text' name='executor' className='form-control'/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Дата исполнения</label>
                            <div className='col-sm-8'>
                                <input type='date' name='execution_date' className='form-control'/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Адрес</label>
                            <div className='col-sm-6'>
                                <input type='text' name='text' className='form-control' onChange={(e) => debouncedInputHandler(e)}/>
                            </div>
                            <div className='col-sm-2 px-1'>
                                <button className='btn btn-dark'>Добавить</button>
                            </div>
                        </div>
                        <input type='submit' value='Создать' className='btn btn-dark'/>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default RouteCreate;
