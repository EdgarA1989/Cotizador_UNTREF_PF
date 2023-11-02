import React from 'react'
import {  Link } from 'react-router-dom';
import styled from "styled-components";


const StyledH1 = styled.h1`
    font-weight: 400;
    color: whitesmoke; 
    text-align:center;
    width:90vw;
    margin-left:10vw;
    `

    ;

    const styles = {
      historial:{
        display: 'flex',
        justifyContent: 'center',
        width:'100vw',
      },
      a:{
        width:'10vw',
        alignSelf: 'center',
        textAlign: 'end',
        marginRight:'4vw',
      },
      span:{
        
        fontSize:'xx-large',
      }
    }
export default function 
() {


  return (

    <div style={styles.historial}>
      <StyledH1>Seguros del hogar 🏡</StyledH1>
      <Link to='/historial' style={styles.a}>
      <span title="Ver Historial" style={styles.span}>📋</span>
      </Link>
    </div>
  

  )
}
