import React from "react";


function ListadoUsuario (props){

  

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
                      <td>{u.rol}</td>
                      <td>{u.fecha_registro}</td>
                
                    </tr>
             ) )}
                
                </tbody>
            </table>
        </div>
    );
}

export default ListadoUsuario;