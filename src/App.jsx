import { useEffect, useState } from 'react'
import './App.css'

import PopUp from "./components/PopUp/PopUp"
import Hello from "./components/Hello/Hello"
import Proyectos from './components/Proyectos/Proyectos'
import Educacion from './components/Educacion/Educacion'

function App() {

  const [ishidden , setIsHidden] = useState(false)

  function handlerPublicity(){

    setTimeout(()=>{
      console.log("ingresa")
      setIsHidden(true)
    },[300000])

    
  }

  useEffect(()=>{
    console.log("ingresa al usEfect")
    handlerPublicity()
  },[])


  return (
    <>
    <div className='grillas'>
      <div className='impar'></div>
      <div className='par'></div>
      <div className='impar'></div>
      <div className='par'></div>
    </div>
    <Hello/>
    <Proyectos/>
    <Educacion/>


    {ishidden ? <PopUp handlerPublicity={handlerPublicity} setIsHidden={setIsHidden}/> : ""}
    </>

  )
}

export default App
