import { useState } from 'react';
import ListRoute from './components/ListRoute';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    const [routes, setRoutes] = useState([
        {id: 1, executor: "Ilya", execution_date: "23.02.2001", count: 30, created_at: "22.02.2001", path: [
            {
                address: "Moscow, Vladimirskya, 24, 130",
                duration: 0
            },
            {
                address: "Irkutsk, Deputatskya, 7, 80",
                duration: 37
            },
            {
                address: "ST, Lenina, 114, 2007",
                duration: 75
            },
            {
                address: "Moscow, Vladimirskya, 24, 130",
                duration: 97
            }],
            total_duration: 209
        }
    ])
    return (
        <div className="App">
            <Header/>
            <ListRoute routes={routes}/>
        </div>
  );
}

export default App;
