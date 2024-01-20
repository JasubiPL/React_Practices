import React from "react";
import '../css/Screen.css';

const Screen = ({input}) => (
    <div className="screen">
        {input}
    </div>
);

export default Screen;
//Los componentes tambien se pueden definir con una funcion flecha guardada en una constante