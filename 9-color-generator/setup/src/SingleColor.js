import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timer = setTimeout(() => {console.log('here');
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  }, [alert]);

  const onClick = (e) => {
    e.preventDefault();
    setAlert(true);

    navigator.clipboard.writeText('#' + hexColor);
  }

  return (
    <button type="button" className={`color ${index > 10 && ' color-light'}`} style={{ backgroundColor:`rgb(${background})`}} onClick={onClick}>
      
      <p className="percent-value">
        {weight}%
      </p>
      <p className="color-value">#{hexColor}</p>
      { alert && <p className="alert">Copied to clipboard!</p> }
    </button>
  )
}

export default SingleColor
 