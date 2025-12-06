
import React from 'react';





function MiLista(props) {
    
 
  
       
        return(
            <>
                <ul>
                    
                    
                     
              {props.incidencias.map((i) =>(
                <li key = {i.id}>
                  <strong>ID: </strong>{i.id_incidencia}<br/>
                  <strong>Usuario: </strong>{i.id_usuario}<br/>
                  <strong>Titulo: </strong>{i.titulo}<br/>
                  <strong>Descripcion: </strong>{i.descripcion}<br/>  
                  <strong>Categoria: </strong>{i.categoria}<br></br>                                 
                  <strong>Urgencia: </strong>{i.nivel_urgencia}<br/>                 
                  <strong>Estado: </strong>{i.estado}<br/>
                  <strong>Fecha de Registro: </strong>{i.fecha_registro}<br/>
                  <strong>Ubicacion: </strong>{i.ubicacion}<br/>
                </li>
             ) )}
            
                    

                
                </ul>
            </>

        );

    
}

export default MiLista;