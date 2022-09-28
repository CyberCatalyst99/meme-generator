import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header.jsx'
import MemeForm from './components/meme-form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MemeForm />
    </div>
  )
}

export default App
