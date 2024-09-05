import style from "./PopUp.module.css"



function PopUp({handlerPublicity, setIsHidden}){

    function handlerBtnCerrar(){
        setIsHidden(false)
        handlerPublicity()
    }

    function handlerBtnNoMolestar(){
        setIsHidden(false)
    }

    return(
        <span className={style.contenedor_popUp}>
            <div className={style.popUps}>
            <h2>ESTA PUBLICIDAD</h2>
            <a className={style.btn_popup} onClick={handlerBtnCerrar} >CERRAR</a>
            <a className={style.btn_popup}  onClick={handlerBtnNoMolestar}>No volver a mostrar</a>
            </div>
        </span>
    )
}

export default PopUp;