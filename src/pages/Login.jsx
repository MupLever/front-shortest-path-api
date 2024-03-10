import React, { useState, useContext } from 'react';
import {AuthContext} from "../context";
import { Link } from 'react-router-dom';

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault()
        const url = 'http://localhost:8000/api/v1/shortest_path/auth/login/'
        const postData = async (url = '', data = {}) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return response.json();
        }
        postData(url, {email, password})
            .then((data) => {
                localStorage.setItem('auth', data.access_token)
                setIsAuth(true)
            }
        )
    }
    return (
        <main className='container mt-3'>
            <h1 className='mb-4'>Вход</h1>
            <div className='card col-6'>
                <div className='card-body'>
                    <form  onSubmit={login}>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>E-Mail</label><br/>
                            <div className='col-sm-8'>
                                <input type='text' name='username' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-sm-4 col-form-label'>Пароль</label><br/>
                            <div className='col-sm-8'>
                                <input type='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <input type='submit' value='Войти' className='btn btn-dark'/>
                    </form>
                </div>
            </div>
            <div className='m-3'>
                <div className='row'>
                    <div className='col-4'>Еще не зарегистрированы?</div>
                    <div className='col-2'>
                        <Link to='/signup' className='px-2 text-dark'>Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </main>
  );
}

export default Login;
