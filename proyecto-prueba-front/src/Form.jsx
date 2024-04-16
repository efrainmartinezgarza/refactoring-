import { useState, useEffect } from "react";
import "./Form.css";

function Form({onSubmit, value, onChange, buttonText}){

    // onSubmit: Función "addNote" que permite realizar un POST a la BD.
    // onChange: Al escribir en el input se ejecuta la función "handleNoteChange" que actualiza el valor de "newNote".
    // value: Define el contenido del input. En este caso se escribe aquello contenido en "newNote".
    // buttonText: Etiqueta del botón a utilizar.

    return(
        <div className="div-form-exterior">
            <form onSubmit={onSubmit}>
                <input className="input-style" value={value} onChange={onChange} />
                <button className="send-button-style" type="submit">{buttonText}</button>
            </form>
        </div>
    )
}

// Permite que otros componentes accedan al elemento "Form".
export default Form;