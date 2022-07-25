import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
const colors = ['#A2A392', '#6E0D25', '#D7C9AA', '#774E24', '#DCAB6B', '#B58DB6', '#5D2E46', '#AD6A6C', '#2B4570', '#7180AC', '#86BBD8', '#24899D', '#C879FF', '#417B5A', '#C879FF', '#B8336A', '#37515F', '#251605', '#49111C', '#D84727', '#EF7B45', '#208AAE']

function App() {
  const getIndexRandom = array => (
    Math.floor(Math.random() * array.length)
  )

  const indexColorRandom = getIndexRandom(colors)
  const [colorRandom, setcolorRandom] = useState(colors[indexColorRandom])
 
  const backgroundStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={backgroundStyle} className="App">
        <QuoteBox 
        getIndexRandom = {getIndexRandom}
        colors = {colors}
        setColorRandom = {setcolorRandom}
        colorRandom = {colorRandom}
        />
    </div>
  )
}

export default App
