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
    let amount = Number(count);
    let newData = [...data];
    console.log('count: ', count, ' length: ', data.length);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      
      let difference = count - data.length;
      
      if (difference < data.length) {
        for (let i = 0; i < difference; i++) {
          newData.push(data[i]);
        }
      } else {
        while (difference > 0) {
          console.log('hey: ', ((newData.length + 1) % data.length));
          newData[newData.length] = data[(newData.length) % data.length];
          difference = difference - 1;
        }
      }
      
      console.log(newData);
    }
    setText(data.slice(0, count));
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
