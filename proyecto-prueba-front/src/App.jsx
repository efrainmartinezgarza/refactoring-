
// Elementos a importar 
import Title from "./Components/Title"; 
import List from "./Components/List";
import Form from "./Components/Form";
import "./App.css"; 

// Liga a la base de datos
const baseUrl = 'http://localhost:3001/api/notes'

const App = () => {

  return (
   
     // Componentes a desplegar en pantalla
     // Cada componente recibe props (parámetros) que ayudan a su estética y/o funcionalidad.
    <div className="div-exterior">
     
      <div className="div-contenido">

        <Title texto="Notas" color={"white"} grosor={"bold"}/>
        <List baseUrl={baseUrl}/>
        <Form baseUrl={baseUrl} buttonText="Guardar"/>

      </div>

    </div>
  );
};

export default App;
