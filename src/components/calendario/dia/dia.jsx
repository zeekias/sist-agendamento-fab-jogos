import React from 'react';

export default function Dia(props) {
    const { numeroDia } = props;

    return (
        <div className="w-48 h-36 bg-green-600 bg-opacity-78 p-4 rounded-none shadow border border-white relative">
            <p className="absolute bottom-3 right-3 text-white text-xl">{numeroDia.toString().padStart(2, '0')}</p>
        </div>
    );
}
