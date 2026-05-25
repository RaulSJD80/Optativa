
import React,{useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from '../Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fondo from '../../img/fondo2.jpg';
import IncidentList from '../IncidentList';
import Login from './Login';
import CerrarSesion from '../CerrarSesion';
import Inicio from '../Inicio';
import UserForm from '../UserForm';
import RoleManagement from '../UserRoleManagement';
import { jwtDecode } from 'jwt-decode';
import { createContext } from 'react';
export const AuthContext = createContext();


function App (){

  

//Definir la URL de la API para incidencias
const INCIDENCIA_API_URL = "http://localhost:3004/incidencias";
//Definir URL de la API para usuarios
const USUARIO_API_URL = "http://localhost:3004/users";


const [users, setUsuarios] = useState([]);
const [incidencias, setIncidencias] = useState ([]);
const nuevo_usuario = useState([]);

  //Añadir usuario
  const agregarUsuario = async (nuevo_nombre, nuevo_email, nuevo_password, nuevo_rol, fechaFormateada) => {
    try{
      let usuarioEncontrado = users.find((u) => u.email === users.email);
      if(!usuarioEncontrado){
          nuevo_usuario = {
          nombre : nuevo_nombre,
          email : nuevo_email,
          password : nuevo_password,
          rol : nuevo_rol,
          fecha_registro : fechaFormateada
        }

        let response = await fetch (USUARIO_API_URL,{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(nuevo_usuario)
        });
        if(!response.ok){
          throw new Error(`Fallo de la peticion POST. Estado HTTP: ${response.status}` );
        }
        let data = await response.json();
        console.log("Nuevo_usuario: ", data);
        setUsuarios([...users, data]);
      }else{
        alert("Ususario ya existe");
        throw new Error('Error al crear usuario. Usuario ya existe');
      }
    }catch (error){
      console.error("Error en la peticion POST", error.message);
    }
  }
   
    //Cambio de rol metodo PATCH

   // const {nombre_rol} = users.rol;
  const cambioRol = async () => {
    try{
      let response = await fetch (USUARIO_API_URL,{
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify({nuevo_rol: users["rol"].nombre_rol}),
      });
      if(response.ok){
        let data = await response.json();
        console.log("Nuevo rol: ",data);
        setUsuarios([...users["rol"].nombre_rol, data]);
      }else{
        alert("Ya tiene ese rol");
      }
    }catch (error){
      console.error("Error en la peticion PATCH", error.message);
    }

  }


   
  
      






  // Funciones de logueado
  const [usuarioLogin, setUsuarioLogin] = useState(null);
  const API_LOGIN_URL = "http://localhost:3004/login";

  const onLogin = async (email, password) => {
    try {
      const response = await fetch(API_LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        }, 
        body: JSON.stringify({"email": email, "password": password}),
      });
      if(response.ok) {
        const data = await response.json();
        setUsuarioLogin(data["user"]);
        localStorage.setItem("authToken", data["accessToken"]);
        console.log("Login exitoso. Usuario: ", data["user"]);
        return true;
      } else {
         const errorData = await response.json();
         alert(`Fallo de autenticacion. Error: ${response.status}: ${errorData}`);
         return false;
      }
    } catch (error) {
      console.error("Error de red al intentar el Login: ", error);
      return false;
    }
  };

  //Borrado de usuario logueado
  const offLogin = () => {
   const usuario = localStorage.getItem('authToken');
   
   if(usuario){
    localStorage.removeItem('authToken');
    setUsuarioLogin(null);
   }
  };


  

  

  useEffect(() => {
      const obtenerIncidencias = async () => {
    try{
      let response  = await fetch (INCIDENCIA_API_URL);
      if(!response.ok){
        throw new Error("HTTP Error");
      }
      const data = await response.json();
      console.log(data);
      setIncidencias(data);
    } catch (e){
      console.error("Error al cargar las inicdencias: ", e);
    }
  }

  const obtenerUsuarios = async () => {
    try{
      let response = await fetch (USUARIO_API_URL);
      if(!response.ok){
        throw new Error("HTTP Error");
      }
      const data = await response.json();
      console.log(data);
      setUsuarios(data);
    } catch (e){
      console.error("Error al cargar usuarios: ", e);
    }
  }

  
  


  const obtenerUsuarioLogueado =  () => {
    const savedUser = localStorage.getItem('authToken');
    if(savedUser){
      const decodedUser = jwtDecode(localStorage.getItem('authToken'));
      console.log(decodedUser);
      if(decodedUser){
        const user = users.find((u)=>u.email === decodedUser.email);
        // si existe el usuario en TextDecoder, lo convertimos a objeto JSON
        user ? setUsuarioLogin(user) : setUsuarioLogin(null);
      }
    }
   
  }
   
  obtenerIncidencias();
  obtenerUsuarios();
  obtenerUsuarioLogueado();
}, [users]);




        
      //Añadimos incidencias
      const agregarIncidencia = async (  nuevo_titulo, nuevo_usuario, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia,
    nuevo_ubicacion, fechaFormateada ) => {
      try{
      const fecha = new Date();
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
      const day = String(fecha.getDate()).padStart(2, '0');
      const fechaFormateada = (new Date().toISOString);

      let usuarioEncontrado = users.find((u) => u.email === nuevo_usuario);
      if(usuarioEncontrado){
           const nueva_incidencia = {
         titulo: nuevo_titulo, 
        usuario: usuarioEncontrado,
                  
        descripcion: nuevo_descripcion,
        categoria: nuevo_categoria,
        nivel_urgencia: nuevo_nivel_urgencia,
       fecha_registro: (new Date().toISOString),
        estado: "Abierta",
        ubicacion: nuevo_ubicacion,
        comentarios: []
        
      }

      let response = await fetch (INCIDENCIA_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nueva_incidencia)
      });

      if(!response.ok){
        throw new Error(`Fallo de la peticion POST. Estado HTTP: ${response.status}` );
      }
      let data = await response.json();
      console.log("nueva incidencia: ", data);
      setIncidencias([...incidencias, data]);
      }else{
        alert("No se puede crear incidencia. Ususario no encontrado");
        throw new Error('Error al crear incidencia. Usuario no encontrado');
      }
   
  }
    catch(e){
      console.error("Fallo la peticion POST de la incidencia", e.message);
    }
  }

  //Cambiar estado

  const cambiarEstado = async() => {
    try{
      let response = await fetch (INCIDENCIA_API_URL ,{
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify({estado: incidencias["estado"]}),
      });
       if(response.ok){
        let data = await response.json();
        console.log("Nuevo estado: ",data);
        setIncidencias([...incidencias["estado"], data]);
      }else{
        alert("Incidencia esta cerrada");
      }
    }catch (error){
      console.error("Error en la peticion PATCH", error.message);
    }

  }

  

    



    
  

  

  
  return (

    <div className = "card" style = {{ backgroundImage : `url(${Fondo})`, backgroundSize: "cover", 
    backgroundRepeat:"no-repeat" }}>
      <Header/>
      <div className = "contenedor-fluid mt-4 row">
        

           <nav>
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
        <Route path = "incidencia" element = {<IncidentList incidencias = {incidencias} />} /> 
        <Route path = "formulario" element = {<Form />} />
        <Route path = "registro_usuario" element = {<UserForm />} /> 
        <Route path = "lista_usuarios" element = {<RoleManagement users = {users} />} />
      
        
        

      </Routes>

              

    
    
    
    
    
     </div>
      <Footer/>
     </div>
  );

}
    {/*
      <Inicio/>
      
        

        {usuarioLogin  ? (
          <div>
             <AuthContext.Provider value = {{usuarioLogin, offLogin}}>
              <CerrarSesion/>
             </AuthContext.Provider>
           <IncidentList incidencias = {incidencias}/>
           <Form agregarIncidencia = {agregarIncidencia}/>
           
            
         </div>
        ) : (
        <Login onLogin= {onLogin}/>
        )
        } 
    */}

export default App;
