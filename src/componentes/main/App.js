
import React,{useState, useEffect} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from '../Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fondo from '../../img/fondo2.jpg';
import IncidentList from '../IncidentList';
import Login from './Login';


function App (){

//Definir la URL de la API para incidencias
const INCIDENCIA_API_URL = "http://localhost:3004/incidencias";
//Definir URL de la API para usuarios
const USUARIO_API_URL = "http://localhost:3004/users";


const [usuarios, setUsuarios] = useState([]);
const [incidencias, setIncidencias] = useState ([]);

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
 /* const obtenerUsuarios = async () => {
    try{
      let response = await fetch (USUARIO_API_URL);
        if(!response.ok){
        throw new Error("HTTP Error");
      }
      const data = await response.json();
      console.log(data);
      setUsuarios(data);
    } catch (e){
      console.error("Error al cargar los usuarios: ", e);
    }
  }*/
  
  obtenerIncidencias();
  //obtenerUsuarios();
}, []);

  // Funciones de logueado
  const [usuarioLogin, setUsusarioLogin] = useState(null);
  const API_LOGIN_URL = "http://localhost:3004/login";

  const inicioSesion = async(email, password) => {
    try {
      const response = await fetch (API_LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        }, 
        body: JSON.stringify({"email": email, "password": password}),
      });
      if(response.ok) {
        const data = await response.json();
        setUsusarioLogin(data["users"]);
        console.log("Login existoso. Usuario: ", data["users"]);
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




        
      
      const agregarIncidencia = async (  nuevo_titulo, nuevo_usuario, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia,
    nuevo_ubicacion ) => {
      try{
      const fecha = new Date();
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
      const day = String(fecha.getDate()).padStart(2, '0');
      const fechaFormateada = (new Date().toISOString);

      let usuarioEncontrado = usuarios.find((u) => u.email === nuevo_usuario);
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

    




  

  

  
  return (
    <div className = "card" style = {{ backgroundImage : `url(${Fondo})`, backgroundSize: "cover", 
    backgroundRepeat:"no-repeat" }}>
    <Header/>
      <h2 className= 'mb-4 text-center'>Mi Aplicacion</h2>
      <div className = "contenedor-fluid mt-4 row">
        {usuarioLogin ? (
          <div>
         <IncidentList incidencias = {incidencias}/>
         <Form agregarIncidencia = {agregarIncidencia}/>
         </div>
         
        
        ) :
        <Login inicioSesion = {inicioSesion}/>
      }

      </div>
    <Footer/>
   
    

     
   </div>
    
  );

}




export default App;
