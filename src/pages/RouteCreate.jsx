import React, { useState } from 'react';
import Addresses from '../components/Addresses';
import RouteService from '../API/RouteSetvice';


function RouteCreate() {
    function debounce(caller, timeoutMs) {
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
                setAddresses(addresses)
            })
    }

    const debouncedInputHandler = debounce(inputHandler, 250)
    const [inputData, setInputData] = useState('')
    const [addresses, setAddresses] = useState([])
    const [fetchAddresses, setFetchAddresses] = useState([])
    const [fetchData, setFetchData] = useState({
        executor: '',
        execution_date: Date.now(),
        addresses_ids: []
    })
    const addAddress = (address) => {
        setFetchAddresses([...fetchAddresses, address])
        setInputData('')
        setAddresses([])
    }

    const removeAddress = (address) => {
        setFetchAddresses(fetchAddresses.filter(fa => fa.id !== address.id))
    }

    const createRoute = () => {
        RouteService.create(
            {data: {...fetchData, addresses_ids: fetchAddresses.map(address => address.id)}}
        )
    }

    return (
        <main className='container mt-3'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-4'>Создание маршрута</h1>
                    <div className='card'>
                        <div className='card-body'>
                            <form onSubmit={createRoute}>
                                <div className='mb-3 row'>
                                    <label className='col-sm-4 col-form-label'>Исполнитель</label>
                                    <div className='col-sm-8'>
                                        <input type='text' name='executor' className='form-control' onChange={(e) => setFetchData(
                                            {...fetchData, executor: e.target.value}
                                        )}/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-4 col-form-label'>Дата исполнения</label>
                                    <div className='col-sm-8'>
                                        <input type='date' name='execution_date' className='form-control' onChange={(e) => setFetchData(
                                            {...fetchData, execution_date: Date.parse(e.target.value)}
                                        )}/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-4 col-form-label'>Адрес</label>
                                    <div className='col-sm-8'>
                                        <input type='text' name='text' className='form-control' value={inputData} onChange={(e) => {
                                            setInputData(e.target.value)
                                            debouncedInputHandler(e)
                                        }}/>{
                                            addresses.length ?
                                            <Addresses addresses={addresses} callback={addAddress}/> :
                                            <div></div>
                                        }

                                    </div>
                                </div>
                                <input type='submit' value='Создать' className='btn btn-dark'/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    {
                        fetchAddresses.length ? 
                        <div>
                            <h1 className='mb-4'>Выбранные адреса</h1>
                            <Addresses addresses={fetchAddresses} callback={removeAddress}/>
                        </div> 
                        :
                        <div></div>
                    }
                </div>

            </div>
        </main>
    )
}

export default RouteCreate;
