import style from "./Proyectos.module.css"
import CardProyect from "../CardProyect/CardProyect.jsx"
import data from "../../../public/data/proyectos.json"
import { useState } from "react"
import { useEffect } from "react"

export default  function Proyectos(){
    
    const [datos , setDatos] = useState([])

    useEffect(()=>{
        if(data){
            setDatos(data)
        }
    },[])

    return(
        <div className={style.contenedor_proyects}>
        
        <h3>Proyectos</h3>
        <div className={style.card_proyectos_contenedor}>
        {
        datos.length != 0 ?
        datos?.map((element) => (
            <a 
            href={element.url} 
            target="_blank"
            key={element.id}
            >
                <CardProyect
                
                tittle={element.tittle}
                description={element.description}
                date={element.date}
                icons={element.icons}
                />
                </a>
                

        )): <div>No hay proyectos</div>}
        
        </div>
        
        </div>
    )


}