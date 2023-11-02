import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction:column;
align-items:center;
    margin: auto;
    max-width: 900px;
    background-color: white;
    /* margin-left: 5%;
    margin-right: 5%; */
    padding: 10px;
    border-color: whitesmoke;
    box-shadow: 26px 28px 15px -8px rgba(0,0,0,0.15);
    border-radius: 0.7rem;
`
const StyledH1 = styled.h1`
text-align:center;
color:#fff;
`

const StyledButton = styled.button`

     margin: 10px 0;
     background-color:#fff;
     color:#000;
  &:hover {
    color: whitesmoke !important;
    background-color: blueviolet !important;
}
&:active {
    background-color: black !important;
}
`


export default function Historial() {
  const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

  return (
   <>
      <StyledH1>Ver historial 📋</StyledH1>
      <StyledDiv>
      <table>
        <thead>
          <tr>
            <th>Fecha de cotización</th>
            <th>Propiedad</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Póliza mensual</th>
          </tr>
        </thead>
        <tbody>
          {historialCotizaciones.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fechaCotizacion}</td>
              <td>{cotizacion.propiedad}</td>
              <td>{cotizacion.ubicacion}</td>
              <td>{cotizacion.metrosCuadrados}</td>
              <td>{cotizacion.poliza}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/'>
        <StyledButton>Volver</StyledButton></Link>
    </StyledDiv>
    </>
  );
}
