import style from "./contacto.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';



export default function Contacto() {
    const email = 'overcorneli' + '@' + 'gmail.com';
    const mailtoLink = `mailto:${email}`;
    return (
        <div className={style.contenedor_contacto}>

            <h3>Contacto</h3>
            <div className={style.contenedor_inconos_contacto}>
                <a href="https://www.linkedin.com/in/osvaldocorneli/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/OsvaldoCorneli" target="_blank"><FontAwesomeIcon icon={faSquareGithub}  /></a>
                <a href={mailtoLink} target="_blank"><FontAwesomeIcon icon={faSquareEnvelope}  /></a>
            </div>

        </div>
    )
}