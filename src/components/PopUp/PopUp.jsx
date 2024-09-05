import style from "./PopUp.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


function PopUp({ handlerPublicity, setIsHidden }) {

    function handlerBtnCerrar() {
        setIsHidden(false)
        handlerPublicity()
    }

    function handlerBtnNoMolestar() {
        setIsHidden(false)
    }

    return (
        <span className={style.contenedor_popUp}>
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
                <div className={style.popcard}>
                    <div className={style.popcard_info}>
                    <h4>Osvaldo Corneli</h4>
                    <h5>Full Stack Developer</h5>
                    </div>
                    <div className={style.popcard_btns}>
                    <a href="#">INFORMACION</a>
                    </div>

                </div>
                <div className={style.popups_btn}>
                    <a className={style.btn_popup} onClick={handlerBtnNoMolestar}>No volver a mostrar</a>
                </div>
            </div>
        </span>
    )
}

export default PopUp;