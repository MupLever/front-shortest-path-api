import Header from './components/header';
import Login from './components/login';
import Register from './components/register';

function App() {
    // const url = "http://localhost:8000/api/v1/shortest_path/routes";
    // const postData = async (url = '') => {
    //     const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {'Accept': 'application/json'}}
    //         );
    //         return response.json();
    // }
    // const data = postData(url).then((data) => {
    //     return console.log(data);
    // });
    return (
        <div className="App">
            <Header/>
            {/* <Login/> */}
            <Register/>
        </div>
  );
}

export default App;
