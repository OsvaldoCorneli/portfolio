import { useEffect, useState } from 'react'
import style from "./PopUp.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import CardPopUp from "../CardPopUp/CardPopUp.jsx";
import data from "../../../public/data/colegas.json"

function PopUp() {

    const [ishidden, setIsHidden] = useState(false)
    
    function handlerBtnCerrar() {
        setIsHidden(false)
        handlerPublicity()
    }

    function handlerBtnNoMolestar() {
        setIsHidden(false)
    }

    function handlerPublicity() {

        setTimeout(() => {
            setIsHidden(true)
        }, 60000)


    }

    useEffect(() => {
        handlerPublicity()
    

    }, [])



    return (
        <>
        { ishidden 
        
        ? <span className={style.contenedor_popUp}>
            <div className={style.popUps}>
                <div className={style.popups_close}>
                    <a className={style.btn_popup} onClick={handlerBtnCerrar} ><FontAwesomeIcon icon={faRectangleXmark} /></a>
                </div>
                <div className={style.popups_message}>
                    <h2>Gracias por visitar mi portfolio</h2>
                    <p>Aprecio mucho que te hayas tomado el tiempo para revisar mi trabajo.
                        Si mi perfil no encaja con lo que estás buscando, te invito a explorar
                        los portfolios de algunos colegas talentosos. ¡Espero que encuentres
                        lo que necesitas!</p>
                </div>

                {
                    data.length > 0
                        ? data.map((datos) => (

                            <CardPopUp
                                key={datos.id}
                                name={datos.name}
                                tittle={datos.tittle}
                                linkedin={datos.linkedin}
                                github={datos.github}
                                portfolio={datos.portfolio}

                            />


                        ))
                        : ""
                }



                <div className={style.popups_btn}>
                    <a className={style.btn_popup} onClick={handlerBtnNoMolestar}>No volver a mostrar</a>
                </div>
            </div>
        </span>
        : ""
    } 
    </>)
}

export default PopUp;