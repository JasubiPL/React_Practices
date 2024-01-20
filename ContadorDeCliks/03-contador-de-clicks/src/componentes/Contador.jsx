import React from "react";
import '../css/Contador.css';

function Contador({numeroDeClics}){
    return(
        <div className="contador">
            {numeroDeClics}
        </div>
    );
}

export default Contador;