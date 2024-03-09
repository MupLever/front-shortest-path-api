import { useState } from 'react';
import ListRoute from './components/ListRoute';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
    return (
        <div className='App'>
            <Header/>
            {/* <ListRoute routes={routes}/> */}
            <Login/>
        </div>
  );
}

export default App;
