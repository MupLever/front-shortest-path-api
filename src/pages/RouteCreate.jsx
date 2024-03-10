import React, {useState} from 'react';


function RouteCreate() {
    class Address {
        constructor(address) {
            this.city = ''
            this.district = ''
            this.street = ''
            this.house_number = ''
        }
    }
    const [address, setAddress] = useState('')
    const [addresses, setAddresses] = useState([new Address('')])
    const addAddress = (e) => {
        e.preventDefault()
        setAddresses([...addresses, new Address(address)])
    }
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
                                <input type='text' name='text' className='form-control' onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className='col-sm-2 px-1'>
                                <button className='btn btn-dark' onClick={addAddress}>Добавить</button>
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
