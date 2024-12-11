import { useState } from 'react'
//usestate use's hook for ui updation
import reactLogo  from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]=useState(15)

  //arrow function-instances to decrease the value
  const decreasevalue= () =>{
    counter=counter-1
    setcounter(counter)
    
    console.log('value decreased to', counter)

  }

  // let counter =0
  const addvalue = () =>{
    console.log('counter clicked')
    counter=counter+1
    setcounter(counter)
    console.log('Value Addded to', counter)
  }
  return (
    <>
    <h1>UI updation using react useState
    </h1>
     <h1>Simple value Adjust Counter</h1>
     <h3>counter :{counter}</h3>
     <button onClick={addvalue}>Add Value: {counter}</button>
     <br></br>
     <button onClick={decreasevalue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App
