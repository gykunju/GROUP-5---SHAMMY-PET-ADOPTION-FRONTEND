import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';

function AdoptedPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/adoptions')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div className="pet-container">
      {pets.length > 0 ? (
        <div>
          <h1 className="pet-title">Pet List</h1>
          <Card.Group>
            {pets.map((pet) => (
              <Card key={pet.id} className="pet-card">
                <Image src={pet.image} alt={pet.name} className="pet-image" />
                <Card.Content>
                  <Card.Header>{pet.name}</Card.Header>
                  <Card.Meta>Age: {pet.age}</Card.Meta>
                  <Card.Description className="pet-details">About: {pet.description}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      ) : (
        <h1>NONE ADOPTED</h1>
      )}
    </div>
  );
}

export default AdoptedPets;
