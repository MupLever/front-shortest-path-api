import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='/login' element={<Navigate to='/routes'/>}/>
                <Route path='/signup' element={<Navigate to='/routes'/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='/' element={<Navigate to='/login'/>}/>
                <Route path='routes' element={<Navigate to='/login'/>}/>
                <Route path='routes/:id' element={<Navigate to='/login'/>}/>
            </Routes>
    )
}

export default AppRouter;
