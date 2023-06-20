import { useContext } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Modal(props) {
    const authContext = useContext(AuthContext);
    const isOpen = { props }
    const handleBookEvent = (eventName = 'MARATONA DE JOGOS', owner = 'Ezequiel', participants = ['Ezequiel', "Jordan", 'Danilo'], description = 'Jogos Doidos', startDatetime = '2022-06-20T13:00', endDatetime = '2023-07-21T13:00') => {
        const mee = {
          id: 1,
          eventName: eventName,
          owner: owner,
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          participants: participants,
          description: description,
          startDatetime: new Date(startDatetime),
          endDatetime: new Date(endDatetime),
        };
    
        authContext.bookEvent(mee);
    
      }
    
    return (
        <div className={`${isOpen && "hidden"}`}>
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