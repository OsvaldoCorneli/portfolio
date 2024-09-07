import style from "./contacto.module.css"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import PopUp from "../PopUp/PopUp.jsx";



export default function Contacto() {
    
    const email = 'overcorneli' + '@' + 'gmail.com';
    const mailtoLink = `mailto:${email}`;
    const [popupFlag , setPopupFlag] = useState(false)
    
   
    useEffect(()=>{

    },[popupFlag])

    function modificaFlag(){
        setPopupFlag(true)
    }

    return (
        <div className={style.contenedor_contacto}>

            <h3>Contacto</h3>
            <div className={style.contenedor_inconos_contacto}>
                <a href="https://www.linkedin.com/in/osvaldocorneli/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/OsvaldoCorneli" target="_blank"><FontAwesomeIcon icon={faSquareGithub}  /></a>
                <a href={mailtoLink} target="_blank"><FontAwesomeIcon icon={faSquareEnvelope}  /></a>
            </div>
            <a className={style.PopUp_btn} onClick={modificaFlag} >¿No soy el perfil que buscas?</a>
            {
            popupFlag
            ?<PopUp popupFlag={popupFlag} setPopupFlag={setPopupFlag}/>
            : <PopUp />
            }
        </div>
    )
}