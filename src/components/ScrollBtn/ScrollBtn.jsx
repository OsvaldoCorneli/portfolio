import style from "./scrollbtn.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
export default function ScrollBtn(){


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a 
            onClick={scrollToTop}
            className={style.botonscroll}
        >
         <FontAwesomeIcon icon={faCircleChevronUp} />
        </a>
    );
}



