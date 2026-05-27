import React,{useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Fondo from '../../img/fondo2.jpg';
import IncidentList from '../IncidentList';
import Login from './Login';
import CerrarSesion from '../CerrarSesion';
import Inicio from '../Inicio';
import UserForm from '../UserForm';
import RoleManagement from '../UserRoleManagement';
import Form from '../Formulario';



function Menu (props){
    const incidencias = useState([]);
    const users = useState([]);


    return(
        <div>
                <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <ul>
          <li><Link to ="/">Inicio</Link></li>
          <li><Link to = "login">Inicio Sesion</Link></li>
          <li><Link to= "incidencia">Ver Incidencias</Link></li>
          <li><Link to = "formulario">Registrar Incidencia</Link></li>
          <li><Link to = "registro_usuario">Registro Usuario</Link></li>
          <li><Link to = "lista_usuarios">Usuarios</Link></li>
          <li><Link to = "cerrarsesion">Cerrar Sesion</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element = {<Inicio /> } />
        <Route path = "login" element = {<Login />} />
        <Route path = "incidencia" element = {<IncidentList incidencias = {incidencias}/>} /> 
        <Route path = "formulario" element = {<Form />} />
        <Route path = "registro_usuario" element = {<UserForm />} /> 
        <Route path = "lista_usuarios" element = {<RoleManagement users = {users}/>} />
      
        
        

      </Routes>

        </div>

    );
}

export default Menu;