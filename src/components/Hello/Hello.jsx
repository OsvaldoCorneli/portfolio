import style from "./hello.module.css"

export default function Hello() {


    return (
        <div className={style.contenedor_hello}>
            <h2 className={style.hellomessage}>¡Hola!👋</h2>
            <h2 className={style.firstTittle}>Soy Osvaldo,</h2>
            <h2>Desarrollador Full Stack y Diseñádor UX/UI</h2>
            <p>Desarrollador de aplicaciones web enfocado en crear soluciones 
                innovadoras y responsivas que 
                cumplan con los estándares y necesidades de los usuarios.</p>
        </div>
    )



}