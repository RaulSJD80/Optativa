import {useState} from 'react';



function Form (props){

    const envioFormulario = (event) =>{
        event.preventDefault();
        const form = event.target;
        props.agregarIncidencia(form.titulo.value, form.email.value,  form.descripcion.value,
            form.categoria.value, form.urgencia.value, form.ubicacion.value
        );
    };

    
        return(
            <div className = "card p-4">
                <h2 className = "card-title mb-4 text-center">Registrar Incidencia</h2>
                <form onSubmit={envioFormulario}>
                    
                    {/*Id Incidencia
                    <div class ="element-form">
                        <label>Id Incidencia</label>
                        <input type = "number" name = "id" placeholder="Ej: 1,2,3,..." reqired/>                        
                    </div>
                    <br></br>
                 */}
                   {/*Titulo*/}
                    <div>
                        <label className = "mb-3 form-label">Titulo</label>
                        <input className = "mb-3 form-control" type ="text" name = "titulo" placeholder="Ej: No funciona el raton" required/>
                    </div>
                    <br></br>

                    {/*Usuario*/}
                    <div>
                        <label className = "mb-3 form-label">Usuario</label>
                        <input className = "mb-3 form-control" type = "text" name = "email" placeholder = "Ej: 2548136678L" required/>
                    </div>
                    <br></br>
                    
                    
                    {/*Descripcion*/}
                    <div>
                        <label className='mb-3 form-label'>Descripción</label>
                        <textarea className='mb-3 form-control' name = "descripcion" required/>
                    </div>
                    <br></br>

                    {/*Categoria*/}
                    <div>
                        <label className='mb-3 form-label'>Categoria</label>
                        <select className='mb-3 form-control' name = "categoria" required>
                            <option value>Seleccionar...</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Red y Conectividad</option>
                            <option>Usuario y Acceso</option>
                            <option>Infraestructura</option>
                        </select>
                    </div>
                    <br></br>

                    {/*Urgencia*/}
                    <div>
                        <label className='mb-3 form-label'>Nivel de Urgencia</label>
                        <select className='mb-3 form-control' name ="urgencia" required>
                            <option value>Seleccionar...</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                    </div>
                    <br></br>

                    {/*Estado*/}
                    <div>
                        <label className='mb-3 form-label'>Estado</label>
                        <select className='mb-3 form-control' name ="estado" required>
                            <option>Abierta</option>
                            <option>En Curso</option>
                            <option>Resuelta</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                    <br></br>
                    
                    {/*Fecha de Registro
                    <div class = "element-form">
                        <label>Fecha de Registro</label>
                        <input type="text" name ="fecha" required/>
                    </div>
                    <br></br>
                    */}
                    {/*Ubicacion*/}
                    <div>
                        <label className='mb-3 form-label'>Ubicacion</label>
                        <input className='mb-3 form-control' type ="text" name ="ubicacion" placeholder="Ej: B205" required/>
                    </div>
                    <br></br>

                    {/*Boton*/}           
                    <button className="btn mx-auto d-grid" style ={{backgroundColor:"green"}} type = "submit">Registrar</button>
                 </form>
            </div>
        )
    }




export default Form;