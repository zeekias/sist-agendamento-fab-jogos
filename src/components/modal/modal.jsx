import React from "react";


export default function Modal(props) {
    const isOpen = { props }
    
    return (
        <div className={`${!isOpen && "hidden"}`}>
            <div className="max-w-screen max-h-screen flex justify-center items-center ">
                <div className='w-80 h-96 flex flex-col justify-center items-center border-2 border-gray-300'>
                    <p className='text-3xl font-bold h-8'>HORÁRIO</p>
                    <div className="w-52 h-56 flex flex-col justify-center items-center">
                        <div className="h-24 p-5">
                            <label htmlFor="inicio" className="text-2xl font-bold">INÍCIO</label><br />
                            <input type="time" name="inicio" id="" className="font-bold bg-gray-400 w-52 rounded-md border-gray-400" />
                        </div>
                        <div className="h-24 p-5">
                            <label htmlFor="fimHor" className="text-2xl font-bold text-center">FIM</label><br />
                            <input type="time" name="fimHor" id="" className="font-bold bg-cyan-500 w-52 rounded-md border-cyan-500" />
                        </div>
                    </div>
                </div>
                <div className='w-80 h-96 p-4 text-white bg-black font-bold'>
                    <div className="mb-4 ">
                        <p className="">EVENTO</p>
                        <input type="text" name="" id="" className="bg-black border-b border-white font-light w-full" />
                    </div>
                    <div className="mb-4">
                        <p className="">SEU NOME</p>
                        <input type="text" name="" id="" className="bg-black border-b border-white font-light w-full" />
                    </div>
                    <div className="mb-4">
                        <p className="">PARTICIPANTES</p>
                        <input type="text" name="" id="" className="bg-black border-b border-white font-light w-full" />
                    </div>
                    <div>
                        <p className="">ATIVIDADE</p>
                        <textarea name="" id="" cols="30" rows="6" className="bg-black border-b border-white font-light w-full"></textarea>
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <button className="w-60 py-2 m-2 border rounded-md shadow hover:font-bold hover:text-white hover:bg-green-500">Agendar</button>
            </div>
        </div>
    )
}