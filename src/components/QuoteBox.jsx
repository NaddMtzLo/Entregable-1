import React, { useState } from 'react'
import quotes from '../json/quotes.json'
import Button from './Button'

const QuoteBox = ({getIndexRandom, colors, setColorRandom, colorRandom}) => {    
  const indexRandom = getIndexRandom(quotes)
    
  const [quoteRandom, setQuoteRandom] = useState(quotes[indexRandom])
    
  const clickRandomQuote = () =>{
  const indexColorRandom = getIndexRandom(colors)
  setQuoteRandom(quotes[indexRandom])
  setColorRandom(colors[indexColorRandom])
      }
    
  const lettersStyle = {
    color: colorRandom
  }
 
  return (
   <article className='card'>
    <p style={lettersStyle}>{quoteRandom.quote}</p>
    <p style={lettersStyle}>{quoteRandom.author}</p>
    <Button 
    clickRandomQuote={clickRandomQuote}
    colorRandom={colorRandom}
    />
   </article>
  )
}

export default QuoteBox