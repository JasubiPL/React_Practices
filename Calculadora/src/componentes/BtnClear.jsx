import React from "react";
import '../css/BtnClear.css';

const BtnClear = (props) =>(
    <div className='btnClear' onClick={() => props.borrarScreen()} >
        {props.children}
    </div>
);

export default BtnClear;