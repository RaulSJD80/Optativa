import './App.css';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista';
import Formulario from '../Formulario';



function App (){
  return (
    <>
    <Header/>
      <h2>Mi Aplicacion</h2>
      <div classname= "contenedor-incidencias">
        <main>
          <p>Esta aplicacion mueestra el contenido almacenado de mi app:</p>
           <MiLista listadoIncidencias = {this.state.incidencias}/>
        </main>
        <aside>
          <Formulario agregarIncidencia = {this.agregarIncidencia}/>  
        </aside>
      </div>
    <Footer/>
   
    

     
   </>
    
  );
}



export default App;
