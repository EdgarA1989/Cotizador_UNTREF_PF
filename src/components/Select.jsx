import React from 'react';
import styled from 'styled-components';


const StyledSelect= styled.select`
   min-width: 50% !important;
    width: 70% !important;
    border: 0.1rem solid #d1d1d1;
    border-radius: 0.4rem;
    box-shadow: none;
    box-sizing: inherit;
    height: 4rem;
    padding: 0.6rem 1rem;
   
`


export default function Select({ options ,value ,onChange}) {
  return (
    <StyledSelect value={value} onChange={onChange} required>
      {/* DOY VALOR POR DEFECTO */}
       <option value="">...</option>


       {/* AGREGO LOS VALORES OBTENIDOS DE JSON */}
      {options && options.length > 0 ? (
        options.map((option) => (
          <option key={option.tipo} value={option.tipo}>
            {option.tipo}
          </option>
        ))
      ) : (
        <option value="..."></option>
      )}
    </StyledSelect>
  );
}
