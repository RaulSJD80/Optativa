import React from "react";
import { useState } from "react";



function RoleManagement (props){

    const data = useState([]);
    const cambiarRol = () => {
      if(data.users["rol"].nombre_rol === "comun"){
        (data.users["rol"].nombre_rol = "admin");
      }else {
        (data.users["rol"].nombre_rol = "comun");
      }
    }
  
  



    return(
        <div>

                <table className = "table table-striped table-hover shadow-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Fecha Registro</th>
                  </tr>
                </thead>

                <tbody>
                      {props.users.map((u) =>(
                    <tr key = {u.id}>
                      <td>{u.id}</td>
                      <td>{u.nombre}</td>
                      <td>{u.email}</td>
                      <td>{u.rol.nombre_rol}</td>
                      <td>{u.fecha_registro}</td>
                      <td>
                        <button className="btn mx-auto d-grid" style ={{backgroundColor:"yellow"}} onClick = {cambiarRol}>Cambiar Rol</button>
                      </td>
                
                    </tr>
             ) )}
                
                </tbody>
            </table>
    




        <div>
            
        </div> 

        </div>

    );
}

export default RoleManagement;