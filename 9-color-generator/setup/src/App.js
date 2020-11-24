import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [numberOfColors, setNumberOfColors] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('firing');
    
    try {console.log('number of colors: ', numberOfColors);
      let colors = new Values(color).all(numberOfColors);

      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  const handleChange = (e) => {
    setColor(e.target.value);
  }

  const handleChangeColors = (e) => {
    setNumberOfColors(e.target.value);
  }

  return (
    <>
      <section className="container">
        <h1>Color generator</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color:</label>
          <input 
            type="text" 
            value={color} 
            id="color" 
            name="color" 
            onChange={handleChange} 
            placeholder="#f15025" 
            className={ `${error ? 'error' : null }`}
          />
          <input 
            type="text" 
            value={numberOfColors} 
            id="numberOfColors" 
            name="numberOfColors" 
            onChange={handleChangeColors} 
            placeholder="10" 
            className={ `${error ? 'error' : null }`}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        { error && color !== '' && <p style={{ textAlign: 'center' }}>Unable to generate a color from the color provided</p> }
        { color === '' && <p style={{ textAlign: 'center' }}>Enter a hex code!</p> }
        { !error && (
            list.map((color, index) => {
              return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
            })
          )
        }
        
      </section>
    </>
  )
}

export default App
