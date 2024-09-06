import style from "../PopUp/PopUp.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';

export default function CardPopUp(props){

return(
    <div className={style.popcard}>
                    <div className={style.popcard_info}>
                    <h4>{props.name}</h4>
                    <h5>{props.tittle}</h5>
                    </div>
                    <div className={style.popcard_btns}>
                    <a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                     <a href={props.github} target="_blank"><FontAwesomeIcon icon={faSquareGithub}  /></a>
                     {
                        props.portfolio != ""
                        ?  <a href={props.portfolio} target="_blank"><FontAwesomeIcon icon={faBriefcase} /></a>
                        : <FontAwesomeIcon icon={faBriefcase} className={style.btn_desactivado}/>   
                     }
                    
                    </div>
                

                </div>
)

}