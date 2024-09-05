import style from "./cardproyect.module.css"
import importarImagenes from "../../controllers/importarImagenes"




export default function CardProyect(props){

    

    return(
        <div className={style.contenedor_proyectos}>
            <h3>{props.tittle}</h3>
            <p>{props.description}</p>
            <div className={style.iconos}>
            {   
            
                importarImagenes.map((imagen)=>(
                    <img key={imagen.id} src={imagen.tecnologia} alt="" />
                ))
            }
            </div>
            

        </div>
    
        
    )
}