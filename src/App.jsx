import { useState,useCallback } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [CharAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)str+="1234567890"
    if(CharAllowed)str+="!@#$%^&*-_,./"
    for(let i=1;i<=str.length;i++){
      let charIndex=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(charIndex)
    }
    setPassword(pass)

  },[length,numberAllowed,CharAllowed])


  return (
   <>
    <h1 className='text-3xl mt-20 text-center'>Password Generator</h1>
   </>
  )
}

export default App
