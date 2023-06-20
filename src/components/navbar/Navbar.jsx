import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
export default function Navbar() {
    const authContext = useContext(AuthContext);

    const handleLogout = async () => {
        await authContext.logoutContext();
    }

    return (
        <nav className='w-screen flex justify-center items-center p-4 bg-black'>
            <ul className='w-full flex justify-between items-center'>
                <li className='mb-4 text-lg font-extrabold leading-none tracking-tight text-green-500 md:text-2xl lg:text-3xl dark:text-white'>Fábrica de Inovação</li>
                <li>
                    <button className='w-full p-2 border rounded-md shadow bg-red-500  hover:bg-red-800 border-none' onClick={() => handleLogout()}>
                        <span className='text-white font-bold'>LOGOUT</span>
                    </button></li>
            </ul>
        </nav>
    )
}
