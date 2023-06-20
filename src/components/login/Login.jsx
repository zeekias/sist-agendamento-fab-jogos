import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const logo = require('../../images/IFMA-LOGO.png');

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isToHidePassword, setIsToHidePassword] = useState(true);
    const [ableButtonLogin, setAbleButtonLogin] = useState(true);
    const authContext = useContext(AuthContext);

    const handleLoginWithGoogle = async () => {
        const result = await authContext.loginByGoogle();

        if (result.status) {
            authContext.pushNotify('sucess', 'Login bem-sucedido!', 'Entrando!');
            return true;
        }

        authContext.pushNotify('error', result.text, 'Erro ao fazer login com Google!');
    }
    const handleHidePassword = () => {
        setIsToHidePassword(!isToHidePassword);
    }
    const handleLoginWithEmail = async () => {
        setAbleButtonLogin(false);
        if (!email) {
            authContext.pushNotify('warning', 'Preencha todos os campos', 'O campo e-mail não pode ficar em branco!');
            setAbleButtonLogin(true);
            return false;
        }
        if (!password) {
            authContext.pushNotify('warning', 'Preencha todos os campos', 'O campo senha não pode ficar em branco!');
            setAbleButtonLogin(true);
            return false;
        }

        const result = await authContext.loginByEmail(email, password);

        if (result.status) {
            authContext.pushNotify('sucess', result.text, 'Entrando!');
            return true;
        }

        authContext.pushNotify('error', result.text, 'Email ou senha inválidos!');

        setAbleButtonLogin(true);

    };

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center p-6">
            <div className="md:hidden lg:flex w-[40%] justify-center items-center"><img src={logo} alt="" /></div>
            <main className="w-[50%] flex flex-col justify-center items-center">
                <p className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-green-500 md:text-5xl lg:text-6xl dark:text-green-500">AGGENDER</p>
                <div className='w-1/2 flex flex-col gap-3'>
                    <button className="w-full py-4 border rounded-md shadow flex items-center justify-center gap-3" onClick={() => handleLoginWithGoogle()}>
                        <FcGoogle /> <span className='font-bold'> Login com o Google </span>
                    </button>
                    <div className='flex flex-col gap-3'>
                        <input className="w-full p-2 border rounded-md" type="e-mail" required placeholder="Email" size="25px" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <div className='flex justify-between items-center'>
                            <input className="w-[90%] p-2 border rounded-md" type={`${isToHidePassword && "password"}`} placeholder="Senha" size="25px" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='w-[8%] flex justify-center items-center'>
                                {
                                    isToHidePassword ?
                                        <AiFillEye size={25} onClick={() => handleHidePassword()} cursor={"pointer"} /> : <AiFillEyeInvisible size={25} onClick={() => handleHidePassword()} cursor={"pointer"} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className='flex px-2'>
                            <input type="checkbox" name="" id="check" />
                            <label htmlFor="check" className="ml-1">Manter-se conectado?</label>
                        </div>
                    </div>
                    <button className="w-full py-4 border rounded-md shadow bg-green-500 hover:bg-green-800" onClick={() => handleLoginWithEmail()} disabled={!ableButtonLogin} > <span className='text-white font-bold'>Login</span></button>
                    <button href="" className="ml-3">Esqueceu sua senha?</button>
                </div>
            </main>
        </div>
    )
}
