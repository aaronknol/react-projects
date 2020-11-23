import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(',');
  const hex = rgbToHex(...rgb);

  return (
    <article className={`color ${index > 10 && ' color-light'}`} style={{ backgroundColor:`rgb(${background})`}}>
      
      <p className="percent-value">
        {weight}%
      </p>
      <p className="color-value">#{hexColor}</p>
    </article>
  )
}

export default SingleColor
 