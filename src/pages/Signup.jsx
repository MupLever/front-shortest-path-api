import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const sigup = event => {
        event.preventDefault()
        const url = 'http://localhost:8000/api/v1/shortest_path/users/'
        const postData = async (url = '', data = {}) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
        postData(url, {email, username, password})
            .then((data) => {
                console.log(data)
            }
        )
    }
    return (
        <main className='container mt-3'>
            <h1 className='mb-4'>Форма регистрации</h1>
            <div className='card col-6'>
                <div className='card-body'>
                    <form onSubmit={sigup}>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>E-Mail</label><br/>
                            <div className='col-sm-8'>
                                <input type='email' name='email' placeholder='example@email.com' className='form-control' required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Имя</label>
                            <div className='col-sm-8'>
                                <input type='text' name='username' required placeholder='Jpyatachkov' className='form-control' onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Пароль</label>
                            <div className='col-sm-8'>
                                <input type='password' name='password' required className='form-control' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Подтверждение пароля</label>
                            <div className='col-sm-8'>
                                <input type='password' name='password_confirmation' required className='form-control'/>
                            </div>
                        </div>
                        <input type='submit' value='Создать' className='btn btn-dark'/>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Signup;
