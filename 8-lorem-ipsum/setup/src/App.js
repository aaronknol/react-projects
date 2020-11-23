import React, { useState } from 'react';
import data from './data';
import Form from './Form';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let repeatingData = [...data];
    
    if (count > data.length) {
      
      let difference = count - data.length;
      
      while (difference > 0) {
        repeatingData[repeatingData.length] = data[(repeatingData.length) % data.length];
        difference = difference - 1;
      }
      
      setText(repeatingData);
    } else {
      setText(data.slice(0, count));
    }
  }
  
  return (
    <section className="section-center">
      <h1>Tired of boring Lorem Ipsum?</h1>

      <Form handleSubmit={handleSubmit} handleChange={handleChange} count={count}></Form>
      <article className="lorem-text">
      {
        text.map((paragraph, index) => {
          return (
            <p key={index}>{paragraph}</p>
          )
        })
      }
      </article>
    </section>
  )
}

export default App;
