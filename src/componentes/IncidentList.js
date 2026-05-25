
import React from 'react';
import { useState } from 'react';
import cambiarEstado from './main/App';



function IncidentList(props) {

  const cambioEstado = () => {
    
  }

    
  
  
 
        return(
            <table className = "table table-striped table-hover shadow-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Usuario</th>
                    <th>Urgencia</th>
                    <th>Ubicacion</th>
                    <th>Estado</th>
                    <th>Fecha Registro</th>
                  </tr>
                </thead>

                <tbody>
                      {props.incidencias.map((i) =>(
                    <tr key = {i.id}>
                      <td>{i.id}</td>
                      <td>{i.titulo}</td>
                      <td>{i.usuario.email}</td>
                      <td>{i.nivel_urgencia}</td>
                      <td>{i.ubicacion}</td>
                      <td>{i.estado}</td> 
                      <td><button style ={{backgroundColor:"violet"}} onClick = {cambiarEstado} > Cambiar Estado</button></td>
                      <td>{i.fecha_registro}</td>
                      
                
                    </tr>
             ) )}
                
                </tbody>
            </table>

        );

    
}

export default IncidentList;