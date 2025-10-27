
import '../main/App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../main/MiLista';



function App() {
  return (
   <div>
    
    <h1>Hola mundo </h1>
    <h2>Este es mi primer componente React</h2>
    <div classname = 'parrafo'>
      <p>Bienvenido ami aplicacion, esto fue creado con JavaScript en React</p>
    </div>
    {/*<br/>
      <Milista 
      titulo ="Clientes"
      nombre1 = "Andres"
      nombre2 = "Maria"
      nombre3 = "Alicia"
      nombre4 = "Javier"/>
      <br/>
      <Milista
      titulo = "Amigos"
      nombre1 = "Santiago"
      nombre2 = "Francisco"
      nombre3 = "Micaela"
      nombre4 = "Sara"/>
      <br/>
      <Milista 
      titulo ="Familia"
      nombre1 = "Raul"
      nombre2 = "Andres"
      nombre3 = "Marta"
      nomre4 = "Victor"/>*/}

      <MiLista/>
   </div>
    
  );
}

function Milista(props) {
  return(
    <div classname = 'lista'>
      <h4>Mi lista de {props.titulo}: </h4>
      <ul>
        <li>{props.nombre1}</li>
        <li>{props.nombre2}</li>
        <li>{props.nombre3}</li>
        <li>{props.nombre4}</li>
      </ul>
    </div>
  )
}

export default App;
