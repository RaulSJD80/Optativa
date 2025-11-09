import React from 'react';
import './Form.css';


class Form extends React.Component{

    envioFormulario = event =>{
        event.preventDefault();
        const form = event.target;
        this.props.agregarIncidencia(form.titulo.value, form.usuario.value, form.descripcion.value,
            form.categoria.value, form.urgencia.value, form.ubicacion.value
        );
    };

    render(){
        return(
            <div>
                <h2>Registrar Incidencia</h2>
                <form onSubmit={this.envioFormularo}>
                    {/*Id Incidencia*/}
                    <div class ="elemento-form">
                        <label>Id Incidencia</label>
                        <input type = "number" name ="id incidencia" placeholder="Ej: 1,2,3,..." reqired/>
                    </div>
                    {/*Titulo*/}
                    <div class ="element-form">
                        <label>Titulo</label>
                        <input type ="text" name = "titulo" placeholder="Ej: No funciona el raton" required/>
                    </div>
                    {/*Usuario*/}
                    <div class = "elemnt-form">
                        <label>Usuario</label>
                        <input type = "text" name = "usuario" placeholder = "Ej: 2548136678L" required/>
                    </div>
                    {/*Descripcion*/}
                    <div class = "elemnt-form">
                        <label>Descripción</label>
                        <textarea name = "descripcion" required/>
                    </div>
                    {/*Categoria*/}
                    <div class = "elemnt-form">
                        <label>Categoria</label>
                        <select name = "categoria" required>
                            <option value>Seleccionar...</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Red y Conectividad</option>
                            <option>Usuario y Acceso</option>
                            <option>Infraestructura</option>
                        </select>
                    </div>
                    {/*Urgencia*/}
                    <div class ="elemnt-form">
                        <label>Nivel de Urgencia</label>
                        <select name ="urgencia" required>
                            <option value>Seleccionar...</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                    </div>
                    {/*Estado*/}
                    <div class ="element-form">
                        <label>Estado</label>
                        <select name ="estado" required>
                            <option>Abierta</option>
                            <option>En Curso</option>
                            <option>Resuelta</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                    {/*Fecha de Reagistro*/}
                    <div class = "elemnt-form">
                        <label>Fecha de Registro</label>
                        <input type="text" name ="fecha" required/>
                    </div>
                    {/*Ubicacion*/}
                    <div class ="elemnt-form">
                        <label>Ubicacion</label>
                        <input type ="text" name ="ubicacion" placeholder="Ej: B205" required/>
                    </div>
                    {/*Boton*/}           
                    <button type = "submit" class ="element-for-button">Registrar</button>
                 </form>
            </div>
        )
    }
}



export default Formulario;