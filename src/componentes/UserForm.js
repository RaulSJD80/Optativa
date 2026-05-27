import React from "react";
import { useState } from "react";


function UserForm (props){

    const envioUsuario = (event) =>{
        event.preventDefault();
        const user = event.target;
        props.agregarUsuario(user.nombre.value, user.email.value, user.password.value, 
            user.rol.value, user.fecha_registro.value
        );
    };




    return(
        <div className = "card p-4">
            <h2 className = "card-title mb-4 text-center">Registrar Usuario</h2>
            <form onSubmit={envioUsuario}>
                {/*Nombre*/}
                <div>
                    <label className = "mb-3 form-label">Nombre</label>
                    <input className = "mb-3 form-control" type ="text" name = "nombre" required/>
                </div>
                <br/>
                {/*email*/}
                 <div>
                    <label className = "mb-3 form-label">Email</label>
                    <input className = "mb-3 form-control" type ="text" name = "email" required/>
                </div>
                <br/>
                {/*password*/}
                 <div>
                    <label className = "mb-3 form-label">Password</label>
                    <input className = "mb-3 form-control" type ="text" name = "password" required/>
                </div>
                <br/>
                {/*rol*/}
                 <div>
                    <label className = "mb-3 form-label">Rol</label>
                    <input className = "mb-3 form-control" type ="text" name = "rol" required/>
                </div>
                <br/>
                {/*Fecha Registro*/}
                 <div>
                    <label className = "mb-3 form-label">Fecha Registro</label>
                    <input className = "mb-3 form-control" type ="date" name = "feche_registro" required/>
                </div>
                <button className="btn mx-auto d-grid" style ={{backgroundColor:"orange"}} type = "submit">Registrar</button>
              

            </form>

        </div>
    );
}

export default UserForm;