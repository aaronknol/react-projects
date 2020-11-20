import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function Person(props) {

    const { id, name, image, quote, title } = props.person;

    return (
        <article key={id} className={props.position}>
            <img src={image} alt={name} className="person-img" />
            <h2>{name}</h2>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
        </article>
    )
}

export default Person;