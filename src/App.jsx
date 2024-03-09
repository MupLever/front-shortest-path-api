import { useEffect, useState } from 'react';
import ListRoute from './components/ListRoute';
import Header from './components/Header';
import Login from './pages/Login';
import { AuthContext } from './context/auth';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true)
    //     }
    // }, []);

    return (
        <div className='App'>
            <AuthContext.Provider value={{isAuth, setIsAuth}}>
                <Header/>
                <Login/>
            </AuthContext.Provider>

            {/* <ListRoute routes={routes}/> */}
            
        </div>
  );
}

export default App;
