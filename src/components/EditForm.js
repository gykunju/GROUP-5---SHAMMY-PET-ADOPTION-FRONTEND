import React, { useState } from 'react';

function EditForm({ pet, onSave }) {
  const [editedPet, setEditedPet] = useState({ ...pet });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPet({ ...editedPet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedPet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedPet.name}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditForm;