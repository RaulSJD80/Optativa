
import React from 'react';
import { useState } from 'react';




function IncidentList({props, actualizarEstado}) {

  const cambioEstado = async () => {
    const estatus = {estado : "Cerrada"};
    await actualizarEstado(estatus);
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
                    <th></th>
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
                      <td> 
                       {i.estado != "Cerrada" ? ( <button style ={{backgroundColor:"violet"}} onClick = {cambioEstado}>
                         Cambiar Estado</button>)
                       : ( null )}
                       
                      </td>
                      <td>{i.fecha_registro}</td>
                      
                
                    </tr>
             ) )}
                
                </tbody>
            </table>

        );

    
}

export default IncidentList;