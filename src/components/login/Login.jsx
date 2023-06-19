import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const logo = require('../../images/IFMA-LOGO.png');

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext);

    const handleLoginWithGoogle = () => {
        authContext.loginByGoogle();
    }

    const handleLoginWithEmail = () => {
        authContext.loginWithEmail(email, password);
    };

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center p-6">
            <div className="w-[40%] flex justify-center items-center"><img src={logo} alt="" /></div>
            <main className="w-[50%] flex flex-col justify-center items-center">
                <p className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-green-500 md:text-5xl lg:text-6xl dark:text-white">AGGENDER</p>
                <div className='w-1/2 flex flex-col gap-3'>
                    <button className="w-full py-4 border rounded-md shadow" onClick={()=>handleLoginWithGoogle()}>Login com o Google</button><br />
                    <div className='flex flex-col gap-3'>
                        <input className="w-full p-2 border rounded-md" type="text" placeholder="Email" size="25px" value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <input className="w-full p-2 border rounded-md" type="password" placeholder="Senha" size="25px" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="flex">
                        <div className='flex px-2'>
                            <input type="checkbox" name="" id="check" />
                            <label htmlFor="check" className="ml-1">Manter-se conectado?</label>
                        </div>
                    </div>
                    <button className="w-full py-4 border rounded-md shadow bg-green-500" onClick={() => handleLoginWithEmail()}> <span className='text-white font-bold'>Login</span></button><br />
                    <a href="" className="ml-3">Esqueceu sua senha?</a>
                    <a href="">Crie sua conta</a>
                </div>
            </main>
        </div>
    )
}
