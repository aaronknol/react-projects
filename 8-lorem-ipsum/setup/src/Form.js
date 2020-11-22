import React from 'react';

function Form ({ handleSubmit, handleChange, count }) {
    return (
        <form className="lorem-form" onSubmit={handleSubmit}>
            <label htmlFor="amount">Number of paragraphs</label>
            <input type="number" id="amount" name="amount" value={count} onChange={handleChange} />
            <button type="submit" className="btn">Generate</button>
        </form>
    )
}

export default Form