import React from 'react';
import Logo from '../../img/logo.png';

class Header extends React.Component {
    render(){
        return (
            <div className="bg-dark text-center text-warning p-3">
                <img src ={Logo}  alt = " Descripcion de imagen" width = "800px" />
                <h3>
                    Bienvenido a la pagina de incidencias
                </h3>
            </div>
        )
    }
}
export default Header;