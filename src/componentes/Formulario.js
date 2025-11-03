import React from 'react';
import './Form.css';


class Form extends React.Component{

    envioFormulario = (Event)=>{
        event.preventDefault();
        const form = event.target;
        this.props.agregarIncidencia(form.titulo.value, form.nievel_urgencia.value);
    };

    render(){
        return(
            <div>
                <h2>Registrar Incidencia</h2>
                <form onSubmit={this.envioFormularo}>
                    {/*Titulo Incidencia*/}
                    <div classname ="elemento-form">
                        <label>Titulo Incidencia</label>
                        <input type = "number" name ="id" placeholder="Introduzca el id Incidencia" reqired/>
                    </div>
                    

               
                <button type = "submit">Registrar</button>
                 </form>
            </div>
        )
    }
}

export default Formulario;