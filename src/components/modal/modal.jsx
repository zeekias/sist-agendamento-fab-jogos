import React from "react";

export default function Modal(props) {
    return (
        <div className='min-w-full min-h-screen flex justify-center items-center p-5 m-2'>
            <div className='w-80 h-96 flex flex-col justify-center items-center border-2 border-gray-300'>
                <p className='text-3xl font-bold h-8'>HORÁRIO</p>
                <div className="w-52 h-56  flex flex-col justify-center items-center">
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
                <div className="mb-4">
                    <p className="">SEU NOME</p>
                    <p></p>
                </div>
                <div className="mb-4">
                    <p className="">PARTICIPANTES</p>
                    <p></p>
                </div>
                <div>
                    <p className="">ATIVIDADE</p>
                    <p></p>
                </div>
            </div>
        </div>

    )
}