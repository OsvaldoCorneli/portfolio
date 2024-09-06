import style from "./educacion.module.css"
import CardEducation from "../CardEducation/CardEducation.jsx"
import data from "../../../public/data/education.json"
import { useState } from "react"
import { useEffect } from "react"

export default function Educacion() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        if (data.length > 0) {
            setDatos(data)

        }
    }, [])

    return (

        <div className={style.contenedor_educacion}>
            <h3>Educacion</h3>

            <div className={style.contenedor_cards}>
            {

                datos.length > 0
                    ? datos.map((element) => (
                        < CardEducation
                            key={element.id}
                            name={element.name}
                            curso={element.curso}
                            time={element.time}
                            id={element.id}
                        />
                    ))
                    : ""
            }
            </div>
        </div>


    )
}