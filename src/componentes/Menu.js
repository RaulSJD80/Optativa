import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function menu (props){
    const menuClick = (event) =>{
        
        localStorage.removeItem("usuaioLogin");
        props.setUsuarioLogin(null);
    }


    return (
        <div>
           
                    <div>
                        <button className="btn btn-secondary m-3" style ={{backgroundColor:"red"}} type = "button" onClick = {menuClick}>
                                Cerrar Sesion
                        </button>
                    </div>

                
            
        </div>
    )
}

export default menu;