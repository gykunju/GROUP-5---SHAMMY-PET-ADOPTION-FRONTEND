import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Pet.css';
import { useLogin } from "../UserContext";
import { useNavigate } from "react-router-dom";
import EditForm from '../EditForm';


function Pet() {
  const [pets, setPets] = useState([]);
  const { loggedInUser } = useLogin();
  const [editingPet, setEditingPet] = useState(null);
  
  const navigate = useNavigate();
  
  
  useEffect(() => {
    fetch('http://localhost:3000/pets') 
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  },[]);

  function handleClick(id){
    navigate(`/pets/${id}`)
  }

  function handleCreate(){
    navigate("/create")
  }

  function handlePets(){
    navigate("/adoptedpets")
  }

  const handleEditClick = (pet) => {
    setEditingPet(pet);
  };

  const handleSaveEdit = (editedPet) => {
    setEditingPet(null);
  };

  function handleDelete(id){
    fetch(`http://localhost:3000/pets/${id}`,{
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
        alert ("pet deleted")
      }
      else {
        alert ("failed")
      }
    })
  }

  return (
    <div className="pet-container">
      <h1 className="pet-title">Pet List</h1>
      <button onClick={handlePets} className='pet-button'>ADOPTED PETS</button>
      {loggedInUser?.admin && <button onClick={handleCreate}>Create Pet</button>}
      <Card.Group>
        {pets.map((pet) => (         
          <Card key={pet.id} className="pet-card" >
            <Image src={pet.image} alt={pet.name} className="pet-image" />
            <Card.Content>
              <Card.Header onClick={()=>handleClick(pet.id)}>{pet.name}</Card.Header>
              <Card.Meta>Age: {pet.age}</Card.Meta>
              <Card.Description className="pet-details">About: {pet.description}</Card.Description>
              {loggedInUser?.admin && (
                <>
               <button onClick={() => handleEditClick(pet)}>Edit</button>
                <button onClick={() => handleDelete(pet.id)}>delete</button>
                </>
              )}
            {editingPet && (
          <EditForm pet={editingPet} onSave={handleSaveEdit} />
          )}
            </Card.Content>
          </Card>
            ))}
      </Card.Group>
    </div>
  );
}

export default Pet;