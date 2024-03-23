import React, { useEffect, useState } from 'react';
import Addresses from '../components/Addresses';


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
                setAddresses([...addresses])
            })
    }

    const debouncedInputHandler = debouce(inputHandler, 250)
    const [inputData, setInputData] = useState('')
    const [addresses, setAddresses] = useState([])
    const [fetchAddresses, setFetchAddresses] = useState([])
    const addAddress = (address) => {
        setInputData('')
        setAddresses([])
        setFetchAddresses([...fetchAddresses, address])
    }
    useEffect(() => {
        console.log(fetchAddresses)
    }, [fetchAddresses])

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
                            <div className='col-sm-8'>
                                <input type='text' name='text' className='form-control' value={inputData} onChange={(e) => {
                                    setInputData(e.target.value)
                                    debouncedInputHandler(e)
                                }}/>
                                <Addresses addresses={addresses} callback={addAddress}/>
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
