import React from 'react'


const Button = ({clickRandomQuote, colorRandom}) => {
    const backgroundStyle = {
        backgroundColor: colorRandom
      }
    

  return (
    <button style={backgroundStyle} onClick = {clickRandomQuote}>></button>
  )
}

export default Button