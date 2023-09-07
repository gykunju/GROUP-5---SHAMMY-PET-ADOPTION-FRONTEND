import React from 'react';

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.image_url} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Age: {pet.age}</p>
      <p>About: {pet.about}</p>
    </div>
  );
}

export default PetCard;