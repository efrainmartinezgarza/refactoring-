
function Title({ texto, color, grosor }){

    // Props:
    // --------------------------------------------------------------------------------------------
    // texto: Palabras a desplegar a manera de título.
    // color y grosor: Propiedades de estilo CSS que se aplican "in-line" al elemento "test-title".

    const estiloTitle = { // Estilo CSS 
        
        /* Box model */
        marginTop: '0px',
        marginBottom: '0px',
    
        /* Tipografía */
        fontFamily: '"Karla", Arial, Helvetica, sans-serif',
        textTransform: 'capitalize',
        color: color || "black", 
        textAlign: 'center',
        fontSize:'50px',
        fontWeight: grosor || "normal"
    };

    return(
        // Se despliega un título cuya apariencia se define por "estiloTitle"
        // y cuyo contenido se define por el prop "texto"
        <h1 className="text-title" style={estiloTitle}>
            {texto}
        </h1> 
    )
}

// Permite que otros componentes accedan al elemento "Title".
export default Title;