import React from "react";
import Mes from "./mes/mes";

export default function Calendario() {
  const numeroMes = new Date().getMonth() + 1;

  return (
    <div>
      <Mes numeroMes={numeroMes} />
    </div>
  );
}
