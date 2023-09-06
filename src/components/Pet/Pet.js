// import React, { useState, useEffect } from 'react';
// import { Card, Image } from 'semantic-ui-react';
// import './Pet.css'

// function Pet() {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetch("") 
//       .then((response) => response.json())
//       .then((data) => setPets(data))
//       .catch((error) => console.error('Error fetching pets:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Pet List</h1>
//       <Card.Group>
//         {pets.map((pet) => (
//           <Card key={pet.id}>
//             <Image src={pet.image_url} alt={pet.name} />
//             <Card.Content>
//               <Card.Header>{pet.name}</Card.Header>
//               <Card.Meta>Age: {pet.age}</Card.Meta>
//               <Card.Description>About: {pet.about}</Card.Description>
//             </Card.Content>
//           </Card>
//         ))}
//       </Card.Group>
//     </div>
//   );
// }

// export default Pet;