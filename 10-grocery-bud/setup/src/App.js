import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
            { alert.show && <Alert /> }
            <h1>Grocery bud</h1>
            <input type="text" id="item" className="grocery" placeholder="e.g eggs" value={name} onChange={ handleChange } />
            <button type="submit"className="submit-btn">
              { isEditing ? 'Edit' : 'Submit' }
            </button>
        </form>
        <List />
        <button type="button" className="clear-btn">Clear items</button>
      </div>
    </section>

  )
}

export default App
