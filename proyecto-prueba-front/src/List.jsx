import { useState, useEffect } from "react";
import "./List.css";

function List({ arrayBD }) {

    // arrayBD: Arreglo de elementos obtenidos de la base de datos. 
    // Estos son leídos y transformados a un formato de lista no ordenada (bullets).

    return (
        <div className="list-out-div"> 
            <ul>
                {arrayBD.map((note) => ( // Con "map" se repite un proceso por cada elemento en un arreglo. El elemento actual se almacena en "note".
                    <li key={note.id}>{note.content}</li> // Se accede a propiedades específicas de una fila de la BD.
                ))}
            </ul>
        </div>
    );
}

// Permite que otros componentes accedan al elemento "List".
export default List;