import { useEffect, useState } from 'react'
import './App.css'
import PopUp from "./components/PopUp/PopUp"
import Hello from "./components/Hello/Hello"
import Proyectos from './components/Proyectos/Proyectos'
import Educacion from './components/Educacion/Educacion'
import Contacto from './components/Contacto/contacto'
import ScrollBtn from './components/ScrollBtn/ScrollBtn'


function App() {

  const [ishidden , setIsHidden] = useState(true)

  function handlerPublicity(){

    setTimeout(()=>{
      setIsHidden(true)
    },[300000])

    
  }

  useEffect(()=>{
    handlerPublicity()
  },[])


  return (
    <>
    {/* <div className='grillas'>
      <div className='impar'></div>
      <div className='par'></div>
      <div className='impar'></div>
      <div className='par'></div>
    </div> */}
    <Hello/>
    <Proyectos/>
    <Educacion/>
    <Contacto/>
    <ScrollBtn/>

    {ishidden ? <PopUp handlerPublicity={handlerPublicity} setIsHidden={setIsHidden}/> : ""}
    </>

  )
}

export default App
