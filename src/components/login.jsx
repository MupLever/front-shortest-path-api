import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    function sendProfile() {
        const url = "http://localhost:8000/api/v1/shortest_path/auth/login/";
        const postData = async (url = '') => {
            const response = await fetch(url, {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}}
                );
                return response.json();
        }
        const data = postData(url).then((data) => {
            return console.log(data);
        });
    }
    return (
        
        <main className="container mt-3">
            <h1 className="mb-4">Вход</h1>
            <div className="card" style={{"width": "30rem;"}}>
                <div className="card-body">
                    <form>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">E-Mail</label><br/>
                            <div className="col-sm-8">
                                <input type="text" name="username" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Пароль</label><br/>
                            <div className="col-sm-8">
                                <input type="password" name="password" className="form-control" onChange={(e) => setPwd(e.target.value)}/>
                            </div>
                        </div>
                        <input type="submit" value="Войти" className="btn btn-primary" onClick={sendProfile}/>
                    </form>
                </div>
            </div>
            <div className="m-3">
                <div className="row">
                    <div className="col-10">Еще не зарегистрированы?</div>
                    <div className="col-2">
                        <a href="#" className="px-2 text-dark">Зарегистрироваться</a>
                    </div>
                </div>
            </div>
        </main>
  );
}

export default Login;
