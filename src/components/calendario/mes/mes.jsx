import React from "react";
import Dia from "../dia/dia";

export default function Mes(props) {
    const { numeroMes } = props;

    // Função para obter o nome do mês
    const obterNomeMes = () => {
        const dataAtual = new Date();
        const dataMesAno = new Date(dataAtual.getFullYear(), numeroMes - 1, 1);
        const nomeMes = dataMesAno.toLocaleString("default", { month: "long" }).toUpperCase();
        const ano = dataMesAno.getFullYear();
        return { nomeMes, ano };
    };

    const { nomeMes, ano } = obterNomeMes();

    // Função para obter o número de dias do mês
    const obterNumeroDiasMes = () => {
        const dataAtual = new Date();
        const ultimoDiaMes = new Date(dataAtual.getFullYear(), numeroMes, 0).getDate();
        return ultimoDiaMes;
    };

    const numeroDiasMes = obterNumeroDiasMes();

    // Função para obter o primeiro dia da semana do mês
    const obterPrimeiroDiaSemana = () => {
        const dataAtual = new Date();
        const primeiroDia = new Date(dataAtual.getFullYear(), numeroMes - 1, 1).getDay();
        return primeiroDia === 0 ? 7 : primeiroDia;
    };

    const primeiroDiaSemana = obterPrimeiroDiaSemana();

    const renderizaLinhas = () => {
        const linhas = [];
        let dia = 1;

        for (let semana = 0; dia <= numeroDiasMes; semana++) {
            const diasNaSemana = [];
            for (let i = 0; i < 7; i++) {
                if ((semana === 0 && i < primeiroDiaSemana - 1) || dia > numeroDiasMes) {
                    diasNaSemana.push(<div key={i} className="flex-row w-48"></div>);
                } else {
                    diasNaSemana.push(<Dia key={dia} numeroDia={dia} />);
                    dia++;
                }
            }

            linhas.push(<div className="flex" key={semana}>{diasNaSemana}</div>);
        }

        return linhas;
    };

    return (
        <div className="relative">
            <div className="text-green-400 text-3xl font-bold">
                {nomeMes}, {ano}
            </div>
            <div>
                <ul className="flex">
                    <li className="flex-row w-48 border border-white">DOMINGO</li>
                    <li className="flex-row w-48 border border-white">SEGUNDA</li>
                    <li className="flex-row w-48 border border-white">TERÇA</li>
                    <li className="flex-row w-48 border border-white">QUARTA</li>
                    <li className="flex-row w-48 border border-white">QUINTA</li>
                    <li className="flex-row w-48 border border-white">SEXTA</li>
                    <li className="flex-row w-48 border border-white">SÁBADO</li>
                </ul>
            </div>
            <div className="">
                {renderizaLinhas()}
            </div>
        </div>
    );
}
