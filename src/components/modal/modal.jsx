import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Modal(props) {
    const authContext = useContext(AuthContext);
    const [eventName, setEventName] = useState("");
    const [owner, setOwner] = useState("");
    const [participants, setParticipants] = useState([]);
    const [description, setDescription] = useState("");
    const [startDatetime, setStartDatetime] = useState(null);
    const [endDatetime, setEndDatetime] = useState(null);

    const handleBookEvent = async() => {
        if(!eventName) return;
        const mee = {
            id: 1,
            eventName: eventName,
            owner: owner,
            participants: participants,
            description: description,
            startDatetime: new Date(startDatetime),
            endDatetime: new Date(endDatetime),
        };
        const result = await authContext.bookEvent(mee);
        console.log(result)
        if (result.status) {
            authContext.pushNotify('Success', 'Solicitação enviada', 'Aguarde a resposta');
            props.setIOpen(false);
            return true;
        }
    }

    return (
        <div className={`${props.isOpen ? "abrido" : "hidden"} absolute inset-0 top-10 items-center justify-center`}>
            <div className="max-w-screen max-h-screen flex justify-center items-center ">
                <div className='w-80 h-96 flex flex-col justify-center items-center border-2 border-gray-300 bg-white'>
                    <p className='text-3xl font-bold h-8'>HORÁRIO</p>
                    <div className="w-52 h-56 flex flex-col justify-center items-center">
                        <div className="h-24 p-5">
                            <label htmlFor="inicio" className="text-2xl font-bold">INÍCIO</label><br />
                            <input type="time" name="inicio" id="" className="font-bold bg-gray-400 w-52 rounded-md border-gray-400" value={startDatetime} onChange={(e) => setStartDatetime(e.target.value)} />
                        </div>
                        <div className="h-24 p-5">
                            <label htmlFor="fimHor" className="text-2xl font-bold text-center">FIM</label><br />
                            <input type="time" name="fimHor" id="" className="font-bold bg-cyan-500 w-52 rounded-md border-cyan-500" value={endDatetime} onChange={(e) => setEndDatetime(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='w-80 h-96 p-4 text-white bg-black font-bold'>
                    <div className="mb-4 ">
                        <p className="">EVENTO</p>
                        <input type="text" className="bg-black border-b border-white font-light w-full" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <p className="">SEU NOME</p>
                        <input type="text" value={owner} className="bg-black border-b border-white font-light w-full" onChange={(e) => setOwner(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <p className="">PARTICIPANTES</p>
                        <input type="text" className="bg-black border-b border-white font-light w-full" value={participants} onChange={(e) => setParticipants(e.target.value.split(","))} />
                    </div>
                    <div>
                        <p className="">ATIVIDADE</p>
                        <textarea cols="30" rows="6" className="bg-black border-b border-white font-light w-full" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center">
                <button className="w-60 py-2 m-2 border rounded-md shadow hover:font-bold hover:text-white hover:bg-green-500" onClick={handleBookEvent()}>Agendar</button>
                <button className="w-60 py-2 m-2 border rounded-md shadow hover:font-bold hover:text-white hover:bg-red-500" onClick={() => props.setIOpen(false)}>Fechar</button>
            </div>
        </div>
    )
}