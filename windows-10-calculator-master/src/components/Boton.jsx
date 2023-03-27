import React from "react";
import "./Boton.css"

function Boton(props) {

    const valor = props.children;

    function esOperador() {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
            && (valor !== "±");
    };

    function isEquals() {
        return valor === '=';
    }

    if (valor === "C" || valor === "CE") {
        return (
            <div className={`boton${esOperador() ? ' operador' : ''}`}
            onClick={props.onClick}>
                {props.children}
            </div>
        );
    }

    return (
        <div className={`boton${esOperador() ? ' operador' : ''}${isEquals() ? ' equals' : ''} `} 
        onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Boton;