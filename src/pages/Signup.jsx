import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [signupData, setSignupData] = useState({username: '', email: '', password: ''})
    const confirmPasswordInputRef = useRef()
    const navigate = useNavigate()

    const sigup = async event => {
        event.preventDefault()
        if (confirmPasswordInputRef.current.value === signupData.password) {
            try {
                const url = 'http://localhost:8000/api/v1/shortest_path/users/'
                const response = await fetch(url, {
                    method: 'POST', 
                    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
                    body: JSON.stringify(signupData)
                })
                const response_json = await response.json()

                (function() {
                    navigate("/login")
                }());

                return response_json;
            } catch (error) {
                console.log(`ERROR: ${error}`)
            }
        } else {
            console.log("ERROR: Пароли не совпадают");
        }

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
                                <input type='email' name='email' placeholder='example@email.com' className='form-control' required onChange={(e) => setSignupData({...signupData, email: e.target.value})}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Имя</label>
                            <div className='col-sm-8'>
                                <input type='text' name='username' required placeholder='Jpyatachkov' className='form-control' onChange={(e) => setSignupData({...signupData, username: e.target.value})}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Пароль</label>
                            <div className='col-sm-8'>
                                <input type='password' name='password' required className='form-control' onChange={(e) => setSignupData({...signupData, password: e.target.value})}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Подтверждение пароля</label>
                            <div className='col-sm-8'>
                                <input type='password' name='password_confirmation' required className='form-control' ref={confirmPasswordInputRef}/>
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
