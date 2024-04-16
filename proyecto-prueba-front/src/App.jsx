
// Elementos a importar
import { useState, useEffect } from "react";
import axios from "axios"; // Librería para la comunicación con la BD
import Title from "./Title";
import List from "./List";
import Form from "./Form";
import "./App.css";

// Liga a la base de datos 
const baseUrl = 'http://localhost:3001/api/notes'

const App = () => {

  // UseStates: Se definen un conjunto de funciones que al usarse
  // actualizarán el valor de ciertas variables. 

  // 1) Palabras escritas por el usuario y proximamente guardadas en la BD
  const [newNote, setNewNote] = useState("");  // [variable a editar, función para editar variable] = useState(valor inicial)
  
  // 2) Arreglo de elementos contenidos en la BD
  const [notes, setNotes] = useState([]);


  // Función que obtiene los elementos de la base de datos
  // y los almacena en la variable "notes".
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {  // Se ejecuta un GET a la BD y se guarda el contenido en "response"
      setNotes(response.data);  // Se usa un "useState" para meter el contenido de "response" en la variable "notes"
    });
  }, []);


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
      });

  };

  return (

    // Elementos a desplegar en pantalla
    <div className="div-exterior">
      <div className="div-contenido">

        <Title texto="Notas" color={"white"} tamano={"50px"} grosor={"bold"}/>
        <List arrayBD={notes}/> 
        <Form onSubmit={addNote} value={newNote} onChange={handleNoteChange} buttonText="Guardar"/>

      </div>
    </div>
  );
};

export default App;