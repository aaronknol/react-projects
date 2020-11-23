import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
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
          <input type="text" value={color} id="color" name="color" onChange={handleChange} placeholder="#f15025" />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h2>List goes here</h2>
      </section>
    </>
  )
}

export default App
