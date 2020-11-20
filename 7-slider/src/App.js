import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Person from './Person';
import Button from './Button';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [index]);

  const onPrevClick = () => setIndex(index - 1);

  const onNextClick = () => setIndex(index + 1);

  return (
    <section className="section">
      <div className="title">
        <h1><span>/</span>Reviews</h1>
      </div>
      <div className="section-center">
        {
          people.map((person, personIndex) => {
            let position = 'nextSlide';
            
            if (personIndex === index) {
              position = 'activeSlide';
            }

            if (personIndex === index -1 || (index === 0 && personIndex === people.length - 1)) {
              position = 'lastSlide';
            }
            
            return (
              <Person person={person} key={person.id} position={position}></Person>
              
            )
          })
        }
        <Button type="button" classes="prev" onClick={onPrevClick}>
          <FiChevronLeft />
        </Button>
        <Button type="button" classes="next" onClick={onNextClick}>
          <FiChevronRight />
        </Button>
      </div>
    </section>
  )
}

export default App;
