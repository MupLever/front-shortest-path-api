import { useState } from 'react';
import ListRoute from './components/ListRoute';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    const [routes, setRoutes] = useState([
        {executor: "Ilya", execution_date: "23.02.2001", count: 30, created_at: "22.02.2001"},
        {executor: "Max", execution_date: "23.02.2001", count: 35, created_at: "22.02.2001"},
    ])
    return (
        <div className="App">
            <Header/>
            <Register/>
            <ListRoute routes={routes}/>
        </div>
  );
}

export default App;
