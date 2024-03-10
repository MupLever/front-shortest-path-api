import React, {useContext} from 'react';
import {AuthContext} from "../context";
import { Link } from 'react-router-dom';

function Header() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-danger text-white border-bottom box-shadow'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                <li><h5 className='my-0 mr-md-auto font-weight-normal'>ОптиМа</h5></li>
            </ul>
            <div className='text-end'>
                <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                    <li><Link className='nav-link px-2 text-white' to='#'>Домой</Link></li>
                    <li><Link className='nav-link px-2 text-white' to='/routes/new'>Создать</Link></li>
                    <li><Link className='nav-link px-2 text-white' to='/routes'>Маршруты</Link></li>
                    <li><Link className='nav-link px-2 text-white' to='#'>Поддержка</Link></li>
                </ul>
            </div>
            {isAuth
            ?
            <Link className='btn btn-dark' onClick={logout}>Выйти</Link>
            :
            <Link className='btn btn-dark text-white' to='/login'>Войти</Link>
            }
        </div>
    )
}

export default Header;
