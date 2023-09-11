// AdminCreatePet.js
import React, { useState } from 'react';

function AdminCreatePet() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the pet information
    const data = {
      name,
      age,
      description,
    };

    // Example using fetch:
    fetch('http://localhost:3000/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success, e.g., show a success message and redirect
          alert('Pet created successfully');
          // Redirect or perform other actions here
        } else {
          // Handle error, e.g., display an error message
          alert('Pet creation failed');
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error creating pet:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Pet (Admin)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Create Pet</button>
      </form>
    </div>
  );
}

export default AdminCreatePet;
