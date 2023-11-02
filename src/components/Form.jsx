import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from './Select'
import Input from './Input'
import '../estilos/App.css'


//ESTILOS

const styles = {
  cotizador:{
  margin: '20px 0',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

 boton:{
  marginLeft:'20px',
  fontSize: 'xx-large',
  cursor: 'pointer',

},
};

const StyledH2 = styled.h2`
     text-align: center;
`

const StyledDiv = styled.div`
      margin: auto;
    max-width: 900px;
    background-color: white;
    /* margin-left: 5%;
    margin-right: 5%; */
    padding: 20px;
    border-color: whitesmoke;
    box-shadow: 26px 28px 15px -8px rgba(0,0,0,0.15);
    border-radius: 0.7rem;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`

const StyledLabel= styled.label`
      font-weight: 400;
    color: black;
    font-size:2rem;
`
const StyledButton = styled.button`
    border: 0.1rem solid #9b4dca;
    border-radius: 0.4rem;
    
    &:hover{
    color: whitesmoke !important;
    background-color: blueviolet !important;
    :active{
      background-color:#fff;
    }
  }



 
`
    const StyledSpan = styled.span`
    color: blueviolet;
    font-size: x-large;
    font-weight: 700;
    `
  

//JS
export default function Form() {

  //VARIABLES

  // Filtrar los datos por categoría y ubicación
  const [datos, setDatos] = useState([]);
  const [span, setSpan]= useState(0)
  const propiedades = datos.filter((dato) => dato.categoria === 'propiedad');
  const ubicaciones = datos.filter((dato) => dato.categoria === 'ubicacion');
  const [propiedadElegida, setPropiedadElegida]= useState('...')
  const [ubicacionElegida, setUbicacionElegida]= useState('...')
  const [metrosCuadrados, setMetrosCuadrados]= useState('20')
  const [loading, setLoading]= useState(false);
  const [guardar, setGuardar]= useState(false);
 
 
  function handleCotizar(){
    
    //Obtengo los factores seleccionados
    const factorPropiedad = datos.find((dato) => dato.categoria === 'propiedad' && dato.tipo === propiedadElegida);
    const factorUbicacion = datos.find((dato) => dato.categoria === 'ubicacion' && dato.tipo === ubicacionElegida);
   setLoading(true);
 


    setTimeout(() => {
    if (factorPropiedad && factorUbicacion) {
      const factorProp = factorPropiedad.factor;
      const factorUbic = factorUbicacion.factor;
      const costoM2 = 35.86;
      const resultadoCalculado = factorProp * factorUbic * metrosCuadrados * costoM2;
      setSpan(resultadoCalculado.toFixed(2));
  
     
    }
      
    setLoading(false),
    setGuardar(true)
    } ,2500)
  }

//CAPTURO ARCHIVO JSON MEDIANTE FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datos.json');
        const data = await response.json();
        setDatos(data);
       

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
  
    fetchData();
  }, []);
  


//GUARDO EN LOCALSTORAGE EL HISTORIAL
  const guardarEnHistorial = ()=> {
    setGuardar(false);
    const cotizacion = {
                        fechaCotizacion: new Date().toLocaleString(),
                        propiedad:       propiedadElegida,
                        ubicacion:       ubicacionElegida,
                        metrosCuadrados: metrosCuadrados,
                        poliza:          span,
                       }
    const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []
          historialCotizaciones.push(cotizacion)
          localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
          toast()
         
}


  return (


    <StyledDiv>
       
        <StyledH2>Completa los datos solicitados</StyledH2>
        <StyledLabel for="propiedad">Selecciona el tipo de propiedad</StyledLabel>
        <Select options={propiedades} id='propiedad' value={propiedadElegida} onChange={(e) => setPropiedadElegida(e.target.value)}/>
        <StyledLabel for="ubicacion">Selecciona su ubicación</StyledLabel>
        <Select options={ubicaciones} id='ubicacion' value={ubicacionElegida}
        onChange={(e) => setUbicacionElegida(e.target.value)}/>
        <StyledLabel for="metros2">Ingresa los Metros cuadrados:</StyledLabel>
        <Input id='metros2' value={metrosCuadrados}
        onChange={(e) => setMetrosCuadrados(e.target.value)}/>

        <StyledButton onClick={handleCotizar}>
          {loading ? <img src="images/Ellipsis-1.1s-44px.gif" width="40px" /> : "Cotizar"}
        </StyledButton>
        <div style={styles.cotizador}>
          <StyledSpan>Precio estimado: ${span}</StyledSpan> 
          {guardar ? <span onClick={guardarEnHistorial} style={styles.boton}>💾</span>: ""}
        </div>
    </StyledDiv>

    
    
  )
}

