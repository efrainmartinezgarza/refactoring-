
// Elementos a importar 
import { useState, useEffect } from "react";
import axios from "axios"; // Ayuda al llamado de la base de datos

function List({ baseUrl }) {
    

    // UseState (hook) Arreglo de elementos contenidos en la BD
    const [notes, setNotes] = useState([]);  // [variable a editar, función para editar variable] = useState(valor inicial)

    // UseEffect (hook): Función que obtiene los elementos de la base de datos
    // y los almacena en la variable "notes".
    useEffect(() => {
        axios.get(baseUrl).then((response) => { // Se ejecuta un GET a la BD y se guarda el contenido en "response"
          setNotes(response.data);  // Se usa un "useState" para meter el contenido de "response" en la variable "notes"
        });
    }, [baseUrl]);

    const estiloList = { // Estilo CSS

        /* Box model */
        maxHeight: "230px",
        marginTop: '14%',
        marginBottom: '5%',
        boxSizing: 'border-box',
        padding: '2%',
        overflowY: "auto",
      
        /* Tipografía */
        fontFamily: '"Karla", Arial, Helvetica, sans-serif',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        textTransform: 'capitalize',
      
        /* Visual */
        backgroundColor: 'white',
        border: '10px solid #3f4f7b',
        borderRadius: '2vw'

    };    

    return (
   
        // notes: Arreglo de elementos obtenidos de la base de datos.
        // Estos son leídos y transformados (uno por uno) a un formato de lista no ordenada (bullets).
        
        <div className="list-out-div" style={estiloList}>
            <ul>
                {notes.map((note) => (  
                    <li key={note.id}>{note.content}</li> 
                ))}
            </ul>
        </div>
    );
}

// Permite que otros componentes accedan al elemento "List".
export default List;
