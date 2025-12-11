import React from 'react';
import Logo from '../../img/logoIES.png';


class Header extends React.Component {
    render(){
        return (
            <div className ="bg-dark text-center text-danger p-3">
                <img src = {Logo} alt = "Logo IES N1" width = "500px" />
                <h3>
                    Bienvenido a la pagina de incidencias
                </h3>
            </div>
        )
    }
}
export default Header;