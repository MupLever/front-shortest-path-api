import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    return (
        <main className="container mt-3">
            <h1 className="mb-4">Форма регистрации</h1>
            <div className="card" style={{"width": "30rem;"}}>
                <div className="card-body">
                    <form action="" method="">
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">E-Mail</label><br/>
                            <div className="col-sm-8">
                                <input type="email" name="email" placeholder="example@email.com" className="form-control" required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Имя</label><br/>
                            <div className="col-sm-8">
                                <input type="text" name="username" required placeholder="Jpyatachkov" className="form-control" onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Пароль</label><br/>
                            <div className="col-sm-8">
                                <input type="password" name="password" required className="form-control" onChange={(e) => setPwd(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Подтверждение пароля</label><br/>
                            <div className="col-sm-8">
                                <input type="password" name="password_confirmation" required className="form-control"/>
                            </div>
                        </div>
                        <input type="submit" value="Создать" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </main>
  );
}

export default Register;
