import './App.css';
import MiLista from'../MiLista';
import {useState} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import Form from '../Formulario';



function App (){


const [incidencias, setIncidencias] = useState ([
  
                {
            id_incidencia: 1,
            id_usuario: "e546754k",
            titulo: "Proyector averiado en el aula 302",
            descripcion: "El proyector no enciende y la lampara esta dañada",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-25",
            estado: "Abierta",
            ubicacion: "A302"
                },
                {
        
        
            id_incidencia: 2,
            id_usuario: 'e54584p',
            titulo: "Ordenador de Secretaria no enciende",
            descripcion: "El equipo no responde al presionar el boton de encendido",
            categoria: "Software",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "Secretaria" 
        },
        {
            id_incidencia: 3,
            id_usuario: 'e84521de',
            titulo: "Impresora sin conexion",
            descripcion: "La impresora  no aparece en red",
            categoria: "Red/Impresora",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-14",
            estado: "Resuelta",
            ubicacion: "Sala de Profesores"
        },
         {
            id_incidencia: 4,
            id_usuario: 'f44144r',
            titulo: "Wifi no disponible",
            descripcion: "No hay señal de Wifi en el pabellon deportivo",
            categoria: "Software",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "A303" 
        },
         {
            id_incidencia: 5,
            id_usuario: 's43099z',
            titulo: "Pantalla tactil no responde",
            descripcion: "La pantalla tactil presenta fallos en la calibracion",
            categoria: "Software",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "A302" 
        },
         {
            id_incidencia: 6,
            id_usuario: 'k25958m',
            titulo: "Raton y teclado dañados",
            descripcion: "El raton y el teclado de un PC no funcionan correctamente",
            categoria: "Software",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "B104" 
        },
         {
            id_incidencia: 7,
            id_usuario: 'q09943x',
            titulo: "Altavoces sin sonido",
            descripcion: "Los altavoces no reproducen audio, aunque esten conectados",
            categoria: "Software",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "D005" 
        },
         {
            id_incidencia: 8,
            id_usuario: 'w6651l',
            titulo: "Sertvidor se reinicia",
            descripcion: "El servidor interno se reinicia de forma inesperada",
            categoria: "Software",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "Sala de servidores" 
        },
         {
            id_incidencia: 9,
            id_usuario: 'v8657r5',
            titulo: "Cable HDMI roto",
            descripcion: "El cable HDMI no transmite imagen al proyector",
            categoria: "Software",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "B105" 
        },
         {
            id_incidencia: 10,
            id_usuario: 'p52841f',
            titulo: "Software educativo no abre",
            descripcion: "El programa de Matematicas no se ejevcuta en varios equipos",
            categoria: "Software",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-26",
            estado: "En proceso",
            ubicacion: "A307" 
         }
        ]);
  
  
        
      
      const agregarIncidencia = (  nuevo_usuario, nuevo_titulo, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia,
    nuevo_ubicacion ) => {

      const fecha = new Date();
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
      const day = String(fecha.getDate()).padStart(2, '0');
      const fechaFormateada = `${year}-${month}-${day}`;

       

      const nueva_incidencia = {
        id_incidencia: incidencias.length + 1,
        id_usuario: nuevo_usuario,
        titulo: nuevo_titulo,            
        descripcion: nuevo_descripcion,
        categoria: nuevo_categoria,
        nivel_urgencia: nuevo_nivel_urgencia,
       fecha_registro: fechaFormateada,
        estado: "Abierta",
        ubicacion: nuevo_ubicacion
        
      }
      setIncidencias(
       [...incidencias, nueva_incidencia]
      );

      console.log("datos recibidos", nueva_incidencia);
    }




  

  

  
  return (
    <>
    <Header/>
      <h2>Mi Aplicacion</h2>
      <div className = "contenedor-incidencias">
        <main>
          <p>Esta aplicacion muestra el contenido almacenado de mi app:</p>
           <MiLista incidencias = {incidencias}/>
        </main>
        <aside>
          <Form agregarIncidencia = {agregarIncidencia}/>
        </aside>
      </div>
    <Footer/>
   
    

     
   </>
    
  );
}




export default App;
