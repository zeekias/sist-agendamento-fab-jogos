import React from 'react'
import Navbar from '../navbar/Navbar'
import Calendario from '../calendario/Calendario'
export default function Dashboard() {
    return (
        <div className='h-screen'>
            <header>
                <Navbar />
            </header>
            <main>
                <Calendario />
            </main>

        </div>
    )
}
