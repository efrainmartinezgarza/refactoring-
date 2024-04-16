import { useState, useEffect } from "react";
import "./Title.css"

function Title({texto, color, tamano, grosor}){

    // texto: Palabras a desplegar a manera de título.
    // color, tamaño y grosor: Propiedades de estilo CSS que se aplican "in-line" al elemento "test-title".

    return(
        <h1 className="text-title" style={{color: color, fontSize: tamano, fontWeight: grosor}}>
            {texto}
        </h1> 
    )
}

// Permite que otros componentes accedan al elemento "Title".
export default Title;