import React, {useContext} from 'react';
import {AuthContext} from "../context/auth";

function Header() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                <li><h5 className='my-0 mr-md-auto font-weight-normal'>МаршОптим</h5></li>
            </ul>
            <div className='text-end'>
                <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                    <li><a className='nav-link px-2 text-dark' href='#'>Домой</a></li>
                    <li><a className='nav-link px-2 text-dark' href='#'>Создать</a></li>
                    <li><a className='nav-link px-2 text-dark' href='#'>Маршруты</a></li>
                    <li><a className='nav-link px-2 text-dark' href='#'>Поддержка</a></li>
                </ul>
            </div>
            {isAuth
            ?
            <a className='btn btn-danger' onClick={logout}>Выйти</a>
            :
            <a className='btn btn-primary' href='#' >Войти</a>
            }
        </div>
    );
}

export default Header;
