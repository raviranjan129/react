import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setConter] = useState(15)


  // let counter = 15
const addValue =()=>{
  
  counter=counter+1;

  // setConter(counter)   // batch m jata hai 
 setConter(prevcounter => prevcounter+1); // callback func in setcounter 
 setConter(prevcounter => prevcounter+1);
 setConter(prevcounter => prevcounter+1);
 setConter(prevcounter => prevcounter+1);
}

const removevalue = () =>{
  setConter(counter-1);
}
  return (
    <>
     
        <h1>Chai aur react</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add value {counter} </button>
        <br />
        <button
        onClick={removevalue}>remove value {counter}</button>
        <p>footer {counter} </p>
    </>
  )
}

export default App
