import style from "./cardeducation.module.css"
import imagenes from "../../controllers/importarImageneseducacion"

export default function CardEducation(props){
    

    return (

        <div className={style.card_contenedor_educacion}>
            <div className={style.contenedor_info}>
                <h3>{props.name}</h3>
                <h4>{props.curso}</h4>
                <h5>{props.time}</h5>
            </div>
            <div className={style.contenedor_imagen}>

               {
                imagenes.length > 0 
                ? imagenes.map((logo)=>(
                    props.id == logo.id
                    ? <img key={logo.id} src={logo.imagen} alt={logo.name} />
                    : ""
                )) 
                : ""
               }
                
            </div>
            
            
        </div>


    )
}