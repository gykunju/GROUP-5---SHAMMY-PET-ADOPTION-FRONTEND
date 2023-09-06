// import React, { useState, useEffect } from 'react';
// import './Pet.css'

// function Pet () {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetch('')
//       .then((response) => response.json())
//       .then((data) => setPets(data))
//       .catch((error) => console.error('Error fetching pets:', error));
//   }, []);

//   return (
//     <div className="pet-container">
//       <h2>Pets</h2>
//       <div className="pet-list">
//         {pets.map((pet) => (
//           <div key={pet.id} className="pet-item">
//             <img src={pet.image} alt={pet.name} />
//             <h3>{pet.name}</h3>
//             <h3>{pet.age}</h3>
//             <h3>{pet.about}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pet;

import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';

function Pet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch() 
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      <h1>Pet List</h1>
      <Card.Group>
        {pets.map((pet) => (
          <Card key={pet.id}>
            <Image src={pet.image_url} alt={pet.name} />
            <Card.Content>
              <Card.Header>{pet.name}</Card.Header>
              <Card.Meta>Age: {pet.age}</Card.Meta>
              <Card.Description>About: {pet.about}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default Pet;