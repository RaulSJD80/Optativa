import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from './main/App';


function CerrarSesion (props){
    
  const {offLogin} = useContext(AuthContext);
   



    return (
        <div>
            
            
        
            <button className="btn btn-secondary m-3" style ={{backgroundColor:"red"}} onClick = { offLogin
                /*
                () =>
                {
                    localStorage.removeItem("usuarioLogin");
                    props.setUsuarioLogin(null);
                }*/
            }>
              Cerrar Sesion
            </button>
            
            
            
                    

        </div>
    )
}

export default CerrarSesion;