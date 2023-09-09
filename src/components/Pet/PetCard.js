import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function PetCard() {
  const [pet, setPet] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    fetch(`http://localhost:3000/pets/${id}`)
    .then(res => res.json())
    .then(data => setPet(data))
  },[])

  function handleClick(){
    navigate(`/pets/${id}/adoption`)
  }

  return (
    <div className="pet-card" key={pet.id}>
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} />
      <p>Age: {pet.age}</p>
      <p>{pet.description}</p>
      <button onClick={handleClick}>ADOPT</button>
    </div>
  );
}

export default PetCard;