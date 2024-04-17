
// Elementos a importar 
import { useState } from "react";
import axios from "axios";

function Form({ baseUrl, buttonText }){

    // UseStates (hook): Se definen un conjunto de funciones que al usarse
    // actualizarán el valor de ciertas variables.

    // 1) Palabras escritas por el usuario y próximamente guardadas en la BD
    const [newNote, setNewNote] = useState(""); // [variable a editar, función para editar variable] = useState(valor inicial)

     // 2) Arreglo de elementos contenidos en la BD
    const [notes, setNotes] = useState([]);

    // Función que permite que al escribir en un campo de texto
    // se actualicen las letras que se muestran en pantalla.
    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    };
   
    // Función que permite guardar en la base de datos todo lo escrito
    // en el campo de texto "input".
    const addNote = (event) => {

      // Función utilizada para frenar el comportamiento predeterminado de un evento
      event.preventDefault();

      // Creación del arreglo a meter en la base de datos
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
      };
      
      // Con Axios se hace un POST a la BD
      axios
        .post(baseUrl, noteObject)
        .then((response) => {
          console.log(response);
          setNotes(notes.concat(response.data)) // Actualiza el listado de elementos a desplegar

          setNewNote(""); // Se limpia el campo de texto (imput)
          window.location.reload(); // Se recarga la página 

        });
    };

    const estiloDivFormExterior = { // Estilo CSS
      
      /* Box model */
      marginTop: '15%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    
      /* Tipografía */
      textAlign: 'center' /* Alinea el texto al centro */
    };
    
    const estiloInput = {
      /* Box model */
      width: '90%',
      height: '20px',
      padding: '5%',
      marginBottom: '15%',
    
      /* Tipografía */
      fontFamily: '"Karla", Arial, Helvetica, sans-serif',
      fontWeight: 'bold',
      textAlign: 'center',
    
      /* Visual */
      borderRadius: '5px'
    };
    
    const estiloBotonEnviar = {
      /* Box model */
      width: '60%',
      height: '40px',
    
      /* Tipografía */
      fontFamily: '"Karla", Arial, Helvetica, sans-serif',
      fontWeight: 'bolder',
      textTransform: 'uppercase',
      color: 'white',
    
      /* Visual */
      backgroundColor: '#3f4f7b',
      borderRadius: '20px',
      border: '5px solid white',
      cursor: 'pointer'
    };
    
    return(
       
        // onSubmit: Al presionar "enviar" ejecuta la función "addNote" que permite realizar un POST a la BD.
        // onChange: Al escribir en el input se ejecuta la función "handleNoteChange" que actualiza el valor de "newNote".
        // value: Define el contenido del input. En este caso se escribe aquello contenido en "newNote".
        // buttonText: Etiqueta/texto del botón a utilizar.

        <div className="div-form-exterior" style={estiloDivFormExterior}>
            <form onSubmit={addNote}>
                <input className="input-style"  style={estiloInput} value={newNote} onChange={handleNoteChange} />
                <button style={estiloBotonEnviar} className="send-button-style" type="submit">{buttonText}</button>
            </form>
        </div>
    )
}

// Permite que otros componentes accedan al elemento "Form".
export default Form;
