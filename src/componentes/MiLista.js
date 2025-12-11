
import React from 'react';







function MiLista(props) {
    
 
  
       
        return(
            <div className ="container mt-3">
              
                <ul>
                    {props.incidencias.map((i) => (
                      <div key = {i.id} className = "mb-4 pb-2 border-bottom">
                        <li clasName = "text-titulopersonalizado-morado"><strong>Titulo: </strong>{i.titulo}, <br/></li>
                        <li className = "mb-1 text-muted"><strong>Descipcion: </strong>{i.descripcion},<br/></li>
                        <li className = "mb-0"><strong>Usuario: </strong>{i.email}, <br/></li>
                        <li className = "mb-0"><strong>Urgencia: </strong>{i.nivel_urgencia},<br/></li>
                        <li className = "mb-0"><strong>Ubicacion: </strong>{i.ubicacion}<br/><br/></li>
                      </div>
                    ))}
                    
             
            
                    

                
                </ul>
            </div>

        );

    
}

export default MiLista;