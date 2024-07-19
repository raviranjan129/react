/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"ravi",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind Test</h1>

<Card  username="chaiaurcode" btntext="visit me" />
<Card  username="Hitesh"  />

    </>
  )
}

export default App
