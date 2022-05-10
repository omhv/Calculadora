import React from "react"
import './App.css'
import Result from "./components/Result"

//generacion de la funcion  del componente
const App = () => {
   //lo que ejecuta la función
   console.log("Renderizacion de App")
   return (
       <main className='react-calculator'>  
       <Result/>
       
       <div className="numbers">
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>0</button>
       </div>
<div> className = 'function'{
    
}</div>
      </main>  )
}

// exportacion
export default App