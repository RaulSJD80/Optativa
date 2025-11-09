import './App.css';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import Formulario from '../Formulario';



class App extends React.Component{

  incidencias = [
                {
            id_incidencia: 1,
            id_usuario: 'e546754k',
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
            fecha_registro: "2025-10-28",
            estado: "En proceso",
            ubicacion: "A307" 
         }
        ]
    

  fechaFormateada = (fecha_registro) => {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
  const day = String(fecha.getDate()).padStart(2, '0');
  const fechaFormateada = `${year}-${month}-${day}`;
  }



  agregarIncidencia = (nuevo_id_incidencia, nuevo_titulo, nuevo_usuario, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia,
    nuevo_estado, nuevo_ubicacion, nuevo_fecha_registro) => {

      const nueva_incidencia = {
        id_incidencia: this.state.incidencias.lenght +1,
        usuario: nuevo_usuario,
        titulo: nuevo_titulo,
        descripcion: nuevo_descripcion,
        categoria: nuevo_categoria,
        nivel_urgencia: nuevo_nivel_urgencia,
        estado: "Abierta",
        ubicacion: nuevo_ubicacion,
        fecha_registro: this.fechaFormateada
      }
      this.setState({
        incidencias: [...this.state.incidenecias, nueva_incidencia]
      })

      console.log("datos recibidos", nueva_incidencia);
    }
  

  

  render(){
  return (
    <>
    <Header/>
      <h2>Mi Aplicacion</h2>
      <div id = "contenedor-incidencias">
        <main>
          <p>Esta aplicacion mueestra el contenido almacenado de mi app:</p>
            <ul>
              {state.incidencias.map(i =>(
                <li key={i.incidenecia}>
                  <strong>Titulo: </strong>{i.titulo}<br/>
                  <strong>ID: </strong>{i.id_incidencia}<br/>
                  <strong>Descripcion: </strong>{i.descripcion}<br/>
                  <strong>Usuario: </strong>{i.usuario}<br/>
                  <strong>Urgencia: </strong>{i.nivel}<br/>
                  <strong>Ubicacion: </strong>{i.ubicacion}<br/>
                  <strong>Estado: </strong>{i.estado}<br/>
                  <strong>Fecha Registro: </strong>{i.fecha_registro}<br/>
                </li>
              ))}
            </ul>
        </main>
        <aside>
          <Formulario agregarIncidencia = {agregarIncidencia}/>  
        </aside>
      </div>
    <Footer/>
   
    

     
   </>
    
  );
}
}



export default App;
