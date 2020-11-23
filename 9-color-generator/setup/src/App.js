import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
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
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {
          error ? <p>Unable to generate a color from the color provided</p> :
          list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} />
          })
        }
        
      </section>
    </>
  )
}

export default App
